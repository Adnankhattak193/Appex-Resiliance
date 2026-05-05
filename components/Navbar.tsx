import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { NAV_ITEMS } from "../constants";
import Logo2 from "@/Public/images/Logo2.png";
import logo from "@/Public/images/logo3.webp";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar - Clean & Professional */}
      <div
        className={`hidden lg:block bg-white border-b border-gray-100 text-textSecondary py-2.5 transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "h-auto opacity-100"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center space-x-8">
            <span className="flex items-center gap-2 group cursor-pointer hover:text-accent transition-colors">
              <Phone size={13} className="text-accent" />
              <span>+92 347 0276700</span>
            </span>
            <span className="flex items-center gap-2 group cursor-pointer hover:text-accent transition-colors">
              <Mail size={13} className="text-accent" />
              <span>info@apexresilience.org</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 border-r border-gray-200 pr-6">
              <Facebook
                size={14}
                className="hover:text-accent cursor-pointer transition-colors"
              />
              <Twitter
                size={14}
                className="hover:text-accent cursor-pointer transition-colors"
              />
              <Linkedin
                size={14}
                className="hover:text-accent cursor-pointer transition-colors"
              />
              <Instagram
                size={14}
                className="hover:text-accent cursor-pointer transition-colors"
              />
            </div>
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-accent" />
              <span>Mon - Fri: 08:00 - 18:00</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="h-14 flex items-center justify-center transition-transform duration-300 hover:scale-105">
              <img
                src={logo}
                alt="Apex Resilience Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav - Clean Text Style */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isHash = item.href.startsWith("#");
              const hasSubmenu = "submenu" in item && item.submenu;

              if (hasSubmenu) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1.5 text-white group-hover:text-accent text-[13px] font-bold uppercase tracking-widest transition-all duration-300">
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 pt-4 w-52 transition-all duration-300 ${activeDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
                    >
                      <div className="bg-primary/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-sm py-3 px-1 overflow-hidden">
                        {(item.submenu as any[]).map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2.5 text-xs font-bold text-white hover:text-accent hover:bg-white/5 transition-all uppercase tracking-wider"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              if (isHash) {
                const href = pathname === "/" ? item.href : `/${item.href}`;
                return (
                  <a
                    key={item.label}
                    href={href}
                    className="text-white hover:text-accent text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-white hover:text-accent text-[13px] font-bold uppercase tracking-widest transition-all duration-300 relative group ${pathname === item.href ? "text-accent" : ""}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-primary absolute w-full border-t border-white/10 shadow-xl">
            <div className="px-6 py-8 flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => {
                const isHash = item.href.startsWith("#");
                const hasSubmenu = "submenu" in item && item.submenu;
                const href =
                  isHash && pathname !== "/" ? `/${item.href}` : item.href;

                if (hasSubmenu) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === item.label ? null : item.label,
                          )
                        }
                        className="flex items-center justify-between text-gray-300 hover:text-white text-lg font-medium py-2"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-300 ${mobileSubmenu === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === item.label ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                      >
                        <div className="pl-4 flex flex-col space-y-4 border-l border-white/10 ml-1">
                          {(item.submenu as any[]).map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="text-gray-400 hover:text-accent text-base font-medium"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return isHash ? (
                  <a
                    key={item.label}
                    href={href}
                    className="text-gray-300 hover:text-white text-lg font-medium py-2"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-gray-300 hover:text-white text-lg font-medium py-2"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
