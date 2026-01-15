
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
export default function Home() {

  return (
    <div className="relative bg-[#202020] text-white">
      <Menu />
      <SmoothScrollbar>
        <div className="w-full h-screen  font-sans  text-white ">
          <TitlePage />
          <ProfileInfoPage />
          <OurServicesPage />

          <PartnersIconsPage />
          <GetItSoldPage />
          <TestimonialsPage />
          <SearchListPage/>
        </div>
      </SmoothScrollbar >
    </div>

  );
}
