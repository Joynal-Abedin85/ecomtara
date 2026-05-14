"use client"

import Link from "next/link";
import { HiOutlineShoppingBag, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "হোম",
    "ডেমো",
    "ফিচারসমূহ",
    "মূল্য পরিকল্পনা",
    "লাইফটাইম প্ল্যান",
    "ব্লগ",
    "যোগাযোগ",
  ];

  return (
    <header className="w-full border-b border-[#ece7f5] bg-white sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="h-[80px] lg:h-[86px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] rounded-[12px] bg-[#6C3BFF] flex items-center justify-center shadow-md">
              <HiOutlineShoppingBag className="text-white text-[22px]" />
            </div>

            <h2 className="text-[22px] sm:text-[24px] leading-none font-[700] text-[#111827]">
              Ecomtara
            </h2>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-[42px]">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="/"
                className={`text-[17px] font-[500] transition-all duration-200 hover:text-[#6C3BFF] ${
                  index === 0
                    ? "text-[#6C3BFF]"
                    : "text-[#111827]"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <button className="hidden lg:block w-[146px] h-[54px] rounded-[14px] bg-[#6C3BFF] text-white text-[17px] font-[600] shadow-[0_10px_30px_rgba(108,59,255,0.25)] transition-all duration-300 hover:scale-[1.02]">
            ডেমো দেখুন
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#111827]"
          >
            {isOpen ? (
              <HiOutlineX className="text-[30px]" />
            ) : (
              <HiOutlineMenu className="text-[30px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] border-t border-[#ece7f5]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-5 bg-white flex flex-col gap-5">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-[16px] font-[500] ${
                index === 0
                  ? "text-[#6C3BFF]"
                  : "text-[#111827]"
              }`}
            >
              {item}
            </Link>
          ))}

          <button className="w-full h-[52px] rounded-[14px] bg-[#6C3BFF] text-white text-[16px] font-[600] shadow-[0_10px_30px_rgba(108,59,255,0.25)]">
            ডেমো দেখুন
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;