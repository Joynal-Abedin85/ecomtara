import Banner from "@/components/Banner";
import Demo from "@/components/Demo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Plats from "@/components/Plats";
import Pricing from "@/components/Pricing";
import Progress from "@/components/Progress";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />
        <Progress></Progress>
        
        <Plats></Plats>
        <Demo></Demo>
        <Pricing></Pricing> 
       
      </main>

      <Footer />
    </>
  );
}