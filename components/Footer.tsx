import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B223B] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="mb-4 md:mb-0">
          <span className="font-semibold text-white tracking-wide">APEXRESILIENCE INTERNATIONAL</span>
        </div>
        <div className="flex gap-8">
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Legal Imprint</a>
        </div>
      </div>
    </footer>
  );
};