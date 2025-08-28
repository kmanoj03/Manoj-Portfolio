import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* <p className="text-gray-400 text-sm flex items-center justify-center">
          Designed & Built with <Heart className="w-4 h-4 text-red-500 mx-1" />{" "}
          by Manoj Konda
        </p> */}
        <p className="text-gray-500 text-xs mt-2">
          © 2025 Manoj Konda. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
