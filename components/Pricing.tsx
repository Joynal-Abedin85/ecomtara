import Image from "next/image";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <section className="pb-[60px] lg:pb-[90px] bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[40px] lg:text-[54px] font-[800] text-[#111827]">
            SaaS মূল্য পরিকল্পনা
          </h2>

          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] lg:text-[18px] text-[#6B7280]">
            আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন
          </p>
        </div>

        {/* GRID (FIXED FOR XL SINGLE ROW) */}
        <div className="
          mt-10 sm:mt-[50px] lg:mt-[60px]
          grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6
        ">

          {/* CARD 1 */}
          <div className="flex flex-col justify-between rounded-[22px] border border-[#DDD6FE] bg-white p-6 lg:p-8 h-full">

            <div>
              <h3 className="text-[20px] lg:text-[26px] font-[700] text-[#6C3BFF]">
                মাসিক প্ল্যান
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <h2 className="text-[20px] lg:text-[32px] font-[800] text-[#6C3BFF]">
                  ৳2,999
                </h2>
                <span className="text-[#6B7280] mb-1">/মাস</span>
              </div>

              <div className="mt-6 space-y-4">
                {["১,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "২৪/৭ সাপোর্ট"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-[#16A34A]" />
                    <p className="text-[#374151]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 w-full h-[56px] rounded-[14px] bg-[#6C3BFF] text-white font-[600]">
              এখন শুরু করুন
            </button>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col justify-between relative rounded-[22px] border border-[#FED7AA] bg-white p-6 lg:p-8 h-full">

            <div>
              <div className="absolute top-2 right-4 px-3 py-1 rounded-full bg-[#F97316] text-white text-[12px]">
                জনপ্রিয়
              </div>

              <h3 className="text-[20px] lg:text-[26px] font-[700] text-[#F97316]">
                ৬ মাসের প্ল্যান
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <h2 className="text-[20px] lg:text-[32px] font-[800] text-[#F97316]">
                  ৳14,999
                </h2>
                <span className="text-[#6B7280] mb-1">/৬ মাস</span>
              </div>

              <div className="mt-6 space-y-4">
                {["৫,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো এক্সেস", "প্রায়োরিটি সাপোর্ট"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-[#16A34A]" />
                    <p className="text-[#374151]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 w-full h-[56px] rounded-[14px] bg-[#F97316] text-white font-[600]">
              এখন শুরু করুন
            </button>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col justify-between relative rounded-[22px] border border-[#BBF7D0] bg-white p-6 lg:p-8 h-full">

            <div>
              <div className="absolute top-2 right-4 px-3 py-1 rounded-full bg-[#4CAF50] text-white text-[12px]">
                সাশ্রয়ী
              </div>

              <h3 className="text-[20px] lg:text-[26px] font-[700] text-[#16A34A]">
                বার্ষিক প্ল্যান
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <h2 className="text-[20px] lg:text-[32px] font-[800] text-[#16A34A]">
                  ৳26,999
                </h2>
                <span className="text-[#6B7280] mb-1">/বছর</span>
              </div>

              <div className="mt-6 space-y-4">
                {["১০,০০০ অর্ডার/মাস", "সকল ফিচার", "সকল ডেমো", "সাপোর্ট", "২ মাস ফ্রি"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={18} className="text-[#16A34A]" />
                    <p className="text-[#374151]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-8 w-full h-[56px] rounded-[14px] bg-[#16A34A] text-white font-[600]">
              এখন শুরু করুন
            </button>
          </div>

          {/* 🔥 LIFETIME CARD (WIDE + BIG FEATURED CARD) */}
          <div className="
            xl:col-span-2
            flex flex-col justify-between
            rounded-[24px]
            border border-[#DDD6FE]
            bg-[#FCFAFF]
            p-6 lg:p-8
            h-full
          ">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* TEXT */}
              <div className="flex-1">

                <h2 className="text-[24px] lg:text-[34px] font-[800] text-[#6C3BFF]">
                  লাইফটাইম প্ল্যান
                </h2>

                <p className="mt-3 text-[#6B7280]">
                  আপনার নিজের সার্ভার হোস্টিং
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "কোন অর্ডার লিমিট নেই",
                    "আপনার নিজের ডোমেইন",
                    "আপনার নিজের সার্ভার",
                    "এককালীন পেমেন্ট",
                    "সম্পূর্ণ সোর্স কোড",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={18} className="text-[#16A34A]" />
                      <p className="text-[#374151]">{item}</p>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full lg:w-[320px] h-[58px] rounded-[14px] bg-[#6C3BFF] text-white font-[600]">
                  যোগাযোগ করুন
                </button>
              </div>

              {/* IMAGE RIGHT */}
              <div className="relative w-[180px] sm:w-[220px] lg:w-[260px] h-[180px] sm:h-[220px] lg:h-[260px]">
                <Image
                  src="https://i.postimg.cc/0Njbt4RD/Pngtree-web-server-vector-icon-5462090.png"
                  alt="server"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;