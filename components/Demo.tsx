import Image from "next/image";
import {
  ShoppingCart,
  UtensilsCrossed,
  Sparkles,
  ShoppingBag,
} from "lucide-react";

const demos = [
  {
    title: "Electronics Demo",
    url: "electro.shopxet.com",
    image: "https://i.postimg.cc/gcS2nDfM/Screenshot-2026-05-14-125446.png",
    icon: ShoppingCart,
    color: "text-[#2563EB]",
    bg: "bg-[#EEF2FF]",
  },
  {
    title: "Food Demo",
    url: "food.shopxet.com",
    image: "https://i.postimg.cc/gcS2nDfM/Screenshot-2026-05-14-125446.png",
    icon: UtensilsCrossed,
    color: "text-[#DC2626]",
    bg: "bg-[#FEF2F2]",
  },
  {
    title: "Cosmetics Demo",
    url: "cosmetics.shopxet.com",
    image: "https://i.postimg.cc/gcS2nDfM/Screenshot-2026-05-14-125446.png",
    icon: Sparkles,
    color: "text-[#EC4899]",
    bg: "bg-[#FDF2F8]",
  },
  {
    title: "Fashion Demo",
    url: "fashion.shopxet.com",
    image: "https://i.postimg.cc/gcS2nDfM/Screenshot-2026-05-14-125446.png",
    icon: ShoppingBag,
    color: "text-[#7C3AED]",
    bg: "bg-[#F3EEFF]",
  },
];

const Demo = () => {
  return (
    <section className="pb-[60px] lg:pb-[90px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[54px] leading-tight font-[800] text-[#111827]">
            আমাদের লাইভ ডেমো
          </h2>

          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] lg:text-[18px] text-[#6B7280]">
            বিভিন্ন ক্যাটাগরির প্রস্তুত ডেমো দেখুন
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-[50px] lg:mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">

          {demos.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[22px] sm:rounded-[24px] overflow-hidden border border-[#ECE7F5] bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[245px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-4 sm:px-5 lg:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4">
                  
                  {/* Icon */}
                  <div
                    className={`w-[46px] sm:w-[50px] lg:w-[52px] h-[46px] sm:h-[50px] lg:h-[52px] rounded-[14px] sm:rounded-[16px] flex items-center justify-center ${item.bg}`}
                  >
                    <Icon className={item.color} size={22} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[700] text-[#111827] truncate">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[12px] sm:text-[14px] lg:text-[16px] text-[#2563EB] truncate">
                      {item.url}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Demo;