"use client";

import {
  ShoppingCart,
  Boxes,
  Users,
  Truck,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "ই-কমার্স ওয়েবসাইট",
    description: "প্রফেশনাল ও সম্পূর্ণ রেসপন্সিভ ই-কমার্স ওয়েবসাইট",
    bg: "bg-[#EEF2FF]",
    color: "text-[#4F46E5]",
  },
  {
    icon: Boxes,
    title: "ইনভেন্টরি ম্যানেজমেন্ট",
    description: "স্টক, প্রোডাক্ট, ক্যাটাগরি সহজে পরিচালনা করুন",
    bg: "bg-[#F3EEFF]",
    color: "text-[#7C3AED]",
  },
  {
    icon: Users,
    title: "CRM সিস্টেম",
    description: "কাস্টমার, অর্ডার ও যোগাযোগ ব্যবস্থাপনা",
    bg: "bg-[#FFF4E8]",
    color: "text-[#EA580C]",
  },
  {
    icon: Truck,
    title: "কুরিয়ার অটোমেশন",
    description: "স্বয়ংক্রিয় শিপিং ও ট্র্যাকিং ব্যবস্থা",
    bg: "bg-[#ECFDF3]",
    color: "text-[#16A34A]",
  },
  {
    icon: ShieldCheck,
    title: "ফ্রড চেকিং",
    description: "অর্ডার ফ্রড ডিটেকশন ও ঝুঁকি নিয়ন্ত্রণ",
    bg: "bg-[#F3EEFF]",
    color: "text-[#6D28D9]",
  },
  {
    icon: WalletCards,
    title: "ল্যান্ডিং পেইজ",
    description: "প্রচারণার জন্য আধুনিক ল্যান্ডিং পেইজ",
    bg: "bg-[#F3EEFF]",
    color: "text-[#7C3AED]",
  },
];

const Plats = () => {
  return (
    <section className="pb-[60px] sm:pb-[80px] lg:pb-[90px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[54px] leading-tight font-[800] text-[#111827]">
            সবকিছু এক প্ল্যাটফর্মে
          </h2>

          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] lg:text-[18px] text-[#6B7280]">
            আপনার ই-কমার্স ব্যবসা পরিচালনার জন্য প্রয়োজনীয় সকল ফিচার
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-[50px] lg:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 sm:gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[22px] sm:rounded-[24px] border border-[#ECE7F5] bg-white px-5 sm:px-6 py-6 sm:py-8 text-center hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-[70px] sm:w-[78px] h-[70px] sm:h-[78px] rounded-[18px] sm:rounded-[22px] mx-auto flex items-center justify-center ${item.bg}`}
                >
                  <Icon
                    className={`${item.color}`}
                    size={34}
                    strokeWidth={2.2}
                  />
                </div>

                {/* Title */}
                <h3 className="mt-5 sm:mt-7 text-[15px] sm:text-[16px] font-[700] text-[#111827]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 sm:mt-3 text-[12px] sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Plats;