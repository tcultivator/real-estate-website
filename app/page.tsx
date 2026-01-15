
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import SmoothScrollbar from "@/components/Smooth-Scrollbar";

import TitlePage from "@/components/home/TitlePage";
import ProfileInfoPage from "@/components/home/ProfileInfoPage";
import OurServicesPage from "@/components/home/OurServicesPage";
import GetItSoldPage from "@/components/home/GetItSoldPage";
import PartnersIconsPage from "@/components/home/PartnersIconsPage";
import TestimonialsPage from "@/components/home/TestimonialsPage";
import SearchListPage from "@/components/home/SearchListPage";
import GallerPage from "@/components/home/GalleryPage";
import ContactPage from "@/components/home/ContactPage";
import FooterPage from "@/components/home/FooterPage";
export default function Home() {

  return (
    <div className="relative h-[100dvh] md:h-screen bg-[#202020] text-white flex">
      <Menu />
      <SmoothScrollbar>
        <div className="w-full h-[100dvh] md:h-screen  font-sans  text-white ">
          <TitlePage />
          <ProfileInfoPage />
          <OurServicesPage />

          <PartnersIconsPage />
          <GetItSoldPage />
          <TestimonialsPage />
          <SearchListPage />
          <GallerPage />
          <ContactPage />
          <FooterPage />
        </div>
      </SmoothScrollbar >
    </div>

  );
}
