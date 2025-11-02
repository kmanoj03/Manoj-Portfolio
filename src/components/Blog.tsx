import { useState, useEffect } from "react";
import { ExternalLink, BookOpen, Loader2 } from "lucide-react";

interface BlogPost {
  title: string;
  brief: string;
  slug: string;
  coverImage?: string;
  dateAdded?: string;
}

const Blog = () => {
  // Manual fallback blog posts (update these if RSS fails)
  const manualPosts: BlogPost[] = [
    // You can manually add your blog posts here as a fallback
    // Example:
    // {
    //   title: "Your Blog Post Title",
    //   brief: "Brief description of your post...",
    //   slug: "your-post-slug",
    //   coverImage: "https://example.com/image.jpg",
    //   dateAdded: "2025-01-15T00:00:00Z",
    // },
  ];

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPostsFromRSS = async () => {
      try {
        setLoading(true);
        setError(null);

        const rssUrl = "https://medium.com/feed/@manoj03.work";
        let xmlText = "";
        
        // Try multiple CORS proxy services as fallbacks
        const proxies = [
          "https://api.allorigins.win/get?url=",
          "https://corsproxy.io/?",
          "https://api.codetabs.com/v1/proxy?quest=",
        ];

        let lastError: Error | null = null;

        // Try each proxy service
        for (const proxyUrl of proxies) {
          try {
            const proxyRes = await fetch(
              proxyUrl + encodeURIComponent(rssUrl),
              { 
                method: 'GET',
                headers: {
                  'Accept': 'application/xml, text/xml, */*'
                }
              }
            );
            
            if (!proxyRes.ok) {
              throw new Error(`Proxy ${proxyUrl} returned ${proxyRes.status}`);
            }

            // Different proxies return different formats
            if (proxyUrl.includes("codetabs")) {
              // codetabs returns XML directly as text
              xmlText = await proxyRes.text();
            } else {
              // Other proxies return JSON
              const proxyData = await proxyRes.json();
              
              if (proxyUrl.includes("allorigins")) {
                if (proxyData.status?.http_code && proxyData.status.http_code !== 200) {
                  throw new Error(`Proxy returned error: ${proxyData.status.http_code}`);
                }
                xmlText = proxyData.contents || "";
              } else {
                // corsproxy.io or others
                xmlText = proxyData || proxyData.contents || "";
              }
            }
            
            if (xmlText && xmlText.length > 0) {
              break; // Success, exit loop
            }
          } catch (proxyErr) {
            lastError = proxyErr instanceof Error ? proxyErr : new Error("Proxy failed");
            continue; // Try next proxy
          }
        }

        if (!xmlText || xmlText.length === 0) {
          throw lastError || new Error("All proxy services failed");
        }

        // Parse RSS XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        
        // Check for parsing errors
        const parseError = xmlDoc.querySelector("parsererror");
        if (parseError) {
          const errorText = parseError.textContent || "Unknown parsing error";
          throw new Error("Failed to parse RSS feed: " + errorText.substring(0, 100));
        }
        
        // Try different RSS item selectors (RSS 2.0 and Atom formats)
        let items = xmlDoc.querySelectorAll("item");
        if (items.length === 0) {
          // Try Atom format
          items = xmlDoc.querySelectorAll("entry");
        }
        
        if (items.length === 0) {
          throw new Error("No blog posts found in RSS feed");
        }
        
        const blogPosts: BlogPost[] = [];
        items.forEach((item, index) => {
          if (index >= 3) return; // Limit to 3 posts
          
          // Handle both RSS 2.0 and Atom formats
          const title = item.querySelector("title")?.textContent?.trim() || "";
          const link = item.querySelector("link")?.textContent?.trim() || 
                      item.querySelector("link")?.getAttribute("href")?.trim() || "";
          const description = item.querySelector("description")?.textContent?.trim() || 
                             item.querySelector("summary")?.textContent?.trim() || "";
          const contentEncoded = item.querySelector("content\\:encoded")?.textContent?.trim() || 
                                item.querySelector("content")?.textContent?.trim() || "";
          const pubDate = item.querySelector("pubDate")?.textContent?.trim() || 
                        item.querySelector("published")?.textContent?.trim() ||
                        item.querySelector("date")?.textContent?.trim() || "";

          if (!title || !link) {
            return; // Skip invalid items
          }
          
          // Try to extract cover image from Medium RSS feed
          let coverImage = "";
          
          // Method 1: Check content:encoded (Medium often puts full HTML here)
          const fullContent = contentEncoded || description;
          if (fullContent) {
            // Look for ANY img tags (including those with escaped HTML entities)
            // Medium RSS often has HTML entities like &lt;img instead of <img
            let imgMatches = fullContent.match(/<img[^>]+>/gi);
            
            // Also check for HTML-encoded img tags
            if (!imgMatches || imgMatches.length === 0) {
              const encodedMatches = fullContent.match(/&lt;img[^>]+&gt;/gi);
              if (encodedMatches) {
                // Decode HTML entities
                imgMatches = encodedMatches.map((tag: string) => 
                  tag.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
                ) as RegExpMatchArray;
              }
            }
            
            if (imgMatches && imgMatches.length > 0) {
              // Try to find the first image that looks like a cover/featured image
              for (const imgTag of imgMatches) {
                // Try src attribute first
                let imgUrl = "";
                const srcMatch = imgTag.match(/src=["']([^"']+)["']/i);
                if (srcMatch && srcMatch[1]) {
                  imgUrl = srcMatch[1];
                }
                
                // If no src, try data-src (lazy loading)
                if (!imgUrl) {
                  const dataSrcMatch = imgTag.match(/data-src=["']([^"']+)["']/i);
                  if (dataSrcMatch && dataSrcMatch[1]) {
                    imgUrl = dataSrcMatch[1];
                  }
                }
                
                // If still no URL, try data-image
                if (!imgUrl) {
                  const dataImageMatch = imgTag.match(/data-image=["']([^"']+)["']/i);
                  if (dataImageMatch && dataImageMatch[1]) {
                    imgUrl = dataImageMatch[1];
                  }
                }
                
                if (imgUrl) {
                  // Decode HTML entities in URL
                  imgUrl = imgUrl
                    .replace(/&amp;/g, "&")
                    .replace(/&#x2F;/g, "/")
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'")
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>');
                  
                  // Handle Medium's CDN URLs - accept ANY valid HTTP(S) URL
                  if (imgUrl.startsWith("http://") || imgUrl.startsWith("https://")) {
                    coverImage = imgUrl;
                    break; // Found a good cover image
                  }
                }
              }
            }
            
            // Method 2: Look for figure tags with img inside (Medium structure)
            if (!coverImage) {
              const figureMatch = fullContent.match(/<figure[^>]*>[\s\S]*?<img[^>]+src=["']([^"']+)["'][^>]*>/i);
              if (figureMatch && figureMatch[1]) {
                let imgUrl = figureMatch[1]
                  .replace(/&amp;/g, "&")
                  .replace(/&#x2F;/g, "/");
                if (imgUrl.startsWith("http")) {
                  coverImage = imgUrl;
                }
              }
            }
            
            // Method 3: Look for background-image in style attributes
            if (!coverImage) {
              const bgImageMatch = fullContent.match(/background-image:\s*url\(["']?([^"'\\)]+)["']?\)/i);
              if (bgImageMatch && bgImageMatch[1]) {
                let imgUrl = bgImageMatch[1]
                  .replace(/&amp;/g, "&")
                  .replace(/&#x2F;/g, "/");
                if (imgUrl.startsWith("http")) {
                  coverImage = imgUrl;
                }
              }
            }
            
            // Method 4: Look for any URL pattern that looks like an image
            if (!coverImage) {
              // Look for common image hosting patterns
              const urlPatterns = [
                /https?:\/\/[^\s<>"']+\.(jpg|jpeg|png|gif|webp|svg)/gi,
                /https?:\/\/miro\.medium\.com\/[^\s<>"']+/gi,
                /https?:\/\/cdn-images[^\s<>"']+/gi,
              ];
              
              for (const pattern of urlPatterns) {
                const matches = fullContent.match(pattern);
                if (matches && matches.length > 0) {
                  coverImage = matches[0];
                  break;
                }
              }
            }
          }
          
          // Method 5: Try media:content or media:thumbnail (for RSS feeds with media extensions)
          if (!coverImage) {
            const mediaContent = item.querySelector("media\\:content, media\\:thumbnail");
            if (mediaContent) {
              coverImage = mediaContent.getAttribute("url") || "";
            }
          }
          
          // Method 6: Try enclosure tag
          if (!coverImage) {
            const enclosure = item.querySelector("enclosure[type^='image']");
            if (enclosure) {
              coverImage = enclosure.getAttribute("url") || "";
            }
          }
          
          // Clean up the image URL
          if (coverImage) {
            // Remove any trailing spaces or newlines
            coverImage = coverImage.trim();
            
            // Remove query params if they exist and add optimal size for Medium
            if (coverImage.includes("miro.medium.com") || coverImage.includes("cdn-images")) {
              coverImage = coverImage.split("?")[0] + "?w=800";
            }
          }

          // Extract slug from link (Medium format)
          // Medium links can be:
          // - https://medium.com/@username/post-title-abc123
          // - https://username.medium.com/post-title-abc123
          // - Direct link from RSS
          let slug = "";
          if (link) {
            // Use the full link directly for Medium posts
            // We'll use the full URL in the href, but extract slug for consistency
            const urlParts = link.split("/").filter(part => part && part !== "https:" && part !== "http:");
            const usernameIndex = urlParts.findIndex(part => part.startsWith("@") || part.includes(".medium.com"));
            
            if (usernameIndex >= 0 && usernameIndex < urlParts.length - 1) {
              slug = urlParts[usernameIndex + 1];
            } else if (urlParts.length > 0) {
              slug = urlParts[urlParts.length - 1];
            }
            
            // If we couldn't extract slug, use the full link
            if (!slug) {
              slug = link;
            }
          }

          // Clean description (remove HTML tags and decode entities)
          // Use content:encoded if available (has more details), otherwise use description
          const rawDescription = contentEncoded || description;
          let cleanDescription = rawDescription
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&#x27;/g, "'")
            .replace(/&hellip;/g, "...")
            .replace(/&mdash;/g, "—")
            .replace(/&ndash;/g, "–")
            .replace(/\s+/g, " ")
            .trim();

          blogPosts.push({
            title: title,
            brief: cleanDescription.length > 150 
              ? cleanDescription.substring(0, 150) + "..." 
              : cleanDescription,
            slug: link || slug, // Store full Medium URL as slug for direct linking
            coverImage: coverImage || undefined,
            dateAdded: pubDate,
          });
        });

        // If no images found in RSS, try fetching og:image from actual Medium post pages
        if (blogPosts.length > 0 && blogPosts.some(post => !post.coverImage)) {
          // Fetch images for posts that don't have them
          const postsWithoutImages = blogPosts.filter(post => !post.coverImage);
          
          await Promise.all(
            postsWithoutImages.map(async (post) => {
              try {
                // Use the full Medium URL
                const postUrl = post.slug.startsWith("http") ? post.slug : `https://medium.com/@manoj03.work/${post.slug}`;
                
                // Try to fetch the page through a proxy to get og:image
                const proxies = [
                  "https://api.allorigins.win/get?url=",
                  "https://corsproxy.io/?",
                ];
                
                for (const proxyUrl of proxies) {
                  try {
                    const response = await fetch(proxyUrl + encodeURIComponent(postUrl));
                    if (!response.ok) continue;
                    
                    let html = "";
                    if (proxyUrl.includes("allorigins")) {
                      const data = await response.json();
                      html = data.contents || "";
                    } else {
                      // corsproxy.io returns HTML directly
                      html = await response.text();
                    }
                    
                    if (!html || typeof html !== "string") continue;
                    
                    // Extract og:image from HTML
                    const ogImageMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
                    if (ogImageMatch && ogImageMatch[1]) {
                      let imgUrl = ogImageMatch[1]
                        .replace(/&amp;/g, "&")
                        .replace(/&#x2F;/g, "/");
                      
                      if (imgUrl.startsWith("http")) {
                        post.coverImage = imgUrl;
                        break; // Success, exit proxy loop
                      }
                    }
                    
                    // Also try twitter:image as fallback
                    if (!post.coverImage) {
                      const twitterImageMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
                      if (twitterImageMatch && twitterImageMatch[1]) {
                        let imgUrl = twitterImageMatch[1]
                          .replace(/&amp;/g, "&")
                          .replace(/&#x2F;/g, "/");
                        
                        if (imgUrl.startsWith("http")) {
                          post.coverImage = imgUrl;
                          break;
                        }
                      }
                    }
                  } catch (proxyErr) {
                    continue;
                  }
                }
              } catch (err) {
                // Silently fail - image fetching is a bonus feature
              }
            })
          );
          
          // Update state with images after fetching
          setPosts([...blogPosts]);
        }

        if (blogPosts.length > 0) {
          setPosts(blogPosts);
          setError(null);
        } else {
          throw new Error("No valid blog posts found after parsing");
        }
      } catch (err) {
        // Fallback to manual posts if RSS fetch fails
        if (manualPosts.length > 0) {
          setPosts(manualPosts);
          setError(null);
        } else {
          setError("Failed to load blog posts. Please visit my blog directly.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPostsFromRSS();
  }, []);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">
            Blog
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4">
            Thoughts, tutorials, and insights on software development & security
          </p>
          <a
            href="https://medium.com/@manoj03.work"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base"
          >
            <span>Visit my blog on Medium</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
            <span className="ml-3 text-gray-400">Loading blog posts...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-400 mb-4">{error}</p>
            <a
              href="https://medium.com/@manoj03.work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
            >
              Visit my blog on Medium
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-4">No blog posts available yet.</p>
            <a
              href="https://medium.com/@manoj03.work"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
            >
              Visit my blog on Medium
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gradient-to-br from-slate-800 to-slate-800/80 rounded-lg overflow-hidden hover:from-slate-700 hover:to-slate-700/80 transition-all duration-300 border border-slate-700/50 hover:border-emerald-400/30 group"
              >
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden bg-slate-700 relative">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        // If image fails to load, hide it
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <div className="p-5 sm:p-6">
                  <div className="mb-3">
                    {post.dateAdded && (
                      <p className="text-gray-400 text-xs sm:text-sm mb-2">
                        {formatDate(post.dateAdded)}
                      </p>
                    )}
                    <h3 className="text-emerald-400 text-lg sm:text-xl font-bold mb-3 leading-tight group-hover:text-emerald-300 transition-colors line-clamp-2">
                      <a
                        href={post.slug.startsWith("http") ? post.slug : `https://medium.com/@manoj03.work/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {post.title}
                      </a>
                    </h3>
                  </div>

                  {post.brief && (
                    <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">
                      {post.brief}
                    </p>
                  )}

                  <a
                    href={post.slug.startsWith("http") ? post.slug : `https://medium.com/@manoj03.work/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base font-medium group/link"
                  >
                    <span>Read more</span>
                    <ExternalLink
                      size={14}
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;

