import Image from "next/image"

const Banner = () => {
  return (
     <section className="pt-[40px] lg:pt-[70px] pb-[50px] bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 min-h-[46px] px-4 sm:px-5 py-2 rounded-full bg-[#F3EEFF] border border-[#E6DFFF]">
              <span className="text-[18px]">🚀</span>

              <p className="text-[13px] sm:text-[15px] font-[600] text-[#6C3BFF]">
                আপনার নিজের ব্র্যান্ড, আপনার নিজের ই-কমার্স
              </p>
            </div>

            {/* Heading */}
            <h1 className="mt-6 lg:mt-8 text-[34px] sm:text-[46px] lg:text-[62px] leading-[48px] sm:leading-[60px] lg:leading-[78px] font-[800] tracking-[-1px] text-[#111827]">
              আপনার ই-কমার্স ব্যবসার জন্য সম্পূর্ণ{" "}
              <span className="text-[#6C3BFF]">
                SaaS সমাধান
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 lg:mt-7 text-[16px] sm:text-[17px] lg:text-[18px] leading-[30px] lg:leading-[34px] text-[#6B7280] max-w-[640px]">
              Ecomtara একটি শক্তিশালী ও সহজেই ব্যবহারযোগ্য
              ই-কমার্স SaaS প্ল্যাটফর্ম। ওয়েবসাইট,
              CRM, ইনভেন্টরি অটোমেশনসহ সবকিছু এক
              জায়গায় — আপনার ব্যবসাকে দিন নতুন উচ্চতা।
            </p>

            {/* Buttons */}
            <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              
              <button className="w-full sm:w-[190px] h-[58px] lg:h-[62px] rounded-[16px] bg-[#6C3BFF] text-white text-[17px] lg:text-[18px] font-[600] shadow-[0_14px_30px_rgba(108,59,255,0.25)] transition-all duration-300 hover:scale-[1.02]">
                ডেমো দেখুন
              </button>

              <button className="w-full sm:w-[230px] h-[58px] lg:h-[62px] rounded-[16px] border border-[#CDBDFF] bg-white text-[#6C3BFF] text-[17px] lg:text-[18px] font-[600] transition-all duration-300 hover:bg-[#F8F5FF]">
                মূল্য পরিকল্পনা দেখুন
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 lg:mt-10 flex items-center gap-4 flex-wrap">
              
              {[
                "সহজ সেটআপ",
                "কোন কোডিং নয়",
                "২৪/৭ সাপোর্ট",
                "নিরাপদ পেমেন্ট",
              ].map((item, index) => (
                <div
                  key={index}
                  className="h-[46px] px-4 sm:px-5 rounded-full border border-[#ECE7F5] flex items-center gap-2 bg-white"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#F3EEFF] flex items-center justify-center text-[#6C3BFF] text-[11px] sm:text-[12px]">
                    ✓
                  </div>

                  <span className="text-[14px] sm:text-[15px] font-[500] text-[#4B5563]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-[700px] h-[260px] sm:h-[420px] lg:h-[520px]">
              
              {/* Main Dashboard Image */}
              <Image
                src="https://i.postimg.cc/nhjPxFJq/download-(3).png"
                alt="dashboard"
                fill
                priority
                className="object-contain"
              />

              {/* Mobile Image */}
              <div className="absolute left-[-10px] sm:left-[-30px] lg:left-[-70px] bottom-[-10px] lg:bottom-[-20px] w-[120px] sm:w-[180px] lg:w-[260px] h-[220px] sm:h-[340px] lg:h-[520px]">
                <Image
                  src="https://i.postimg.cc/pVsGnhV5/download-(4).png"
                  alt="mobile"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner