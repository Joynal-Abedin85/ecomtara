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
        <Demo></Demo>
        <Plats></Plats>
        <Pricing></Pricing> 
       
      </main>

      <Footer />
    </>
  );
}