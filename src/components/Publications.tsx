import { ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Application of YOLOv10 in Detection of Brain Tumour from MRI",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-8639-1_23",
      venue: "Advances in Data Science and Management (ICDSM 2024)",
      publisher: "Springer LNNS Vol. 1477",
      role: "Co-Author",
    },
  ];

  return (
    <section id="publications" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">
            Publications
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">
            Research contributions and published work
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-800/80 rounded-lg p-6 sm:p-8 hover:from-slate-700 hover:to-slate-700/80 transition-all duration-300 border border-slate-700/50 hover:border-emerald-400/30 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-emerald-400/10 p-3 rounded-lg group-hover:bg-emerald-400/20 transition-colors flex-shrink-0">
                    <BookOpen className="text-emerald-400 w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-emerald-400 text-lg sm:text-xl lg:text-2xl font-bold leading-tight group-hover:text-emerald-300 transition-colors">
                        {publication.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-300 text-sm sm:text-base">
                        <span className="text-gray-400 font-medium">Venue:</span>{" "}
                        <span className="text-white">{publication.venue}</span>
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base">
                        <span className="text-gray-400 font-medium">Publisher:</span>{" "}
                        <span className="text-white">{publication.publisher}</span>
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-400 font-medium text-sm sm:text-base">Role:</span>
                        <span className="bg-emerald-400/20 text-emerald-400 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-emerald-400/30">
                          {publication.role}
                        </span>
                      </div>
                    </div>

                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm sm:text-base font-medium group/link"
                    >
                      <span>View Publication</span>
                      <ExternalLink 
                        size={16} 
                        className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {publications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No publications available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;

