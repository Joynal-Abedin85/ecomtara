
import Image from "next/image";
import { Rocket } from "lucide-react";

import {
  Store,
  UtensilsCrossed,
  Sparkles,
  Shirt,
  ShoppingBag,
  Smartphone,
} from "lucide-react";

const categories = [
  { name: "TechMart", icon: Store },
  { name: "DailyFood", icon: UtensilsCrossed },
  { name: "BeautyCare", icon: Sparkles },
  { name: "FashionHub", icon: Shirt },
  { name: "MegaStore", icon: ShoppingBag },
  { name: "DigitalShop", icon: Smartphone },
];

export default function Footer() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
           
        <h2 className="text-center mt-6 text-lg sm:text-2xl font-semibold text-gray-900">
          যারা আমাদের উপর বিশ্বাস রেখেছেন
        </h2>

       
        <div className="flex flex-wrap mt-4 items-center justify-center gap-6 sm:gap-10 text-gray-700 text-sm sm:text-base font-medium">
      {categories.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="flex items-center gap-2 hover:text-purple-600 transition"
          >
            <Icon className="w-4 h-4 text-black" />
            {item.name}
          </div>
        );
      })}
    </div>

  

        <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white px-6 sm:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">

          <div className="flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Rocket className="w-6 h-6 text-white" />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                আইআই শুরু করুন আপনার ই-কমার্স যাত্রা!
              </h3>
              <p className="text-sm sm:text-base text-white/90 mt-1">
                Ecomtara এর সাথে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-purple-600 font-medium px-5 py-2 rounded-full hover:bg-gray-100 transition">
              ডেমো দেখুন
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-purple-600 transition">
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

