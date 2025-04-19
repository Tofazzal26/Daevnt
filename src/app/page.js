import AboutConference from "@/AboutConference/AboutConference";
import Banner from "@/Banner/Banner";
import FutureEvents from "@/FutureEvents/FutureEvents";
import Pricing from "@/Pricing/Pricing";
import RecentBlog from "@/RecentBlog/RecentBlog";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="bg-[#111111]">
        <FutureEvents />
        <AboutConference />
      </div>
      <Pricing />
      <div className="bg-[#111111]">
        <RecentBlog />
      </div>
    </div>
  );
}
