import {
  HiOutlineShoppingBag,
  HiOutlineViewGrid,
  HiOutlineShieldCheck,
  HiOutlineSupport,
} from "react-icons/hi";

const progressItems = [
  {
    number: "50+",
    title: "সফল স্টোর",
    color: "text-[#6C3BFF]",
    bg: "bg-[#F3EEFF]",
    icon: (
      <HiOutlineShoppingBag className="text-[#6C3BFF] text-[28px]" />
    ),
  },
  {
    number: "10+",
    title: "প্রস্তুত ডেমো",
    color: "text-[#6C3BFF]",
    bg: "bg-[#F3EEFF]",
    icon: (
      <HiOutlineViewGrid className="text-[#6C3BFF] text-[28px]" />
    ),
  },
  {
    number: "100%",
    title: "সিকিউর সিস্টেম",
    color: "text-[#6C3BFF]",
    bg: "bg-[#FFF7E8]",
    icon: (
      <HiOutlineShieldCheck className="text-[#F59E0B] text-[28px]" />
    ),
  },
  {
    number: "24/7",
    title: "সাপোর্ট সার্ভিস",
    color: "text-[#6C3BFF]",
    bg: "bg-[#ECFDF3]",
    icon: (
      <HiOutlineSupport className="text-[#16A34A] text-[28px]" />
    ),
  },
];

const Progress = () => {
  return (
    <section className="pb-[60px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        <div className="border border-[#ECE7F5] rounded-[24px] min-h-[150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-6 sm:px-10 lg:px-14 py-8">
          
          {progressItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5"
            >
              
              {/* Icon Circle */}
              <div
                className={`w-[62px] h-[62px] rounded-full ${item.bg} flex items-center justify-center shrink-0`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className={`text-[32px] sm:text-[38px] leading-none font-[800] ${item.color}`}>
                  {item.number}
                </h3>

                <p className="mt-2 text-[15px] sm:text-[17px] text-[#6B7280]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Progress;