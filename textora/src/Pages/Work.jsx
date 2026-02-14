import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ViewMoreCircle from "../components/Viewmore";
import PortfolioSection from "../components/recentVideos";

function Work() {
  return (
    <div className="work mt-40 px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-lg">
          Home
        </Link>
        <ChevronRight size={20} />
        <p className="text-lg text-purple-600 cursor-pointer">Work</p>
      </div>
      <div className="about-hero flex justify-between items-center mt-10">
        <h1 className="text-6xl w-3/5 font-semibold">All Popular Works</h1>
        <p className="text-lg w-2/5">
          Where ideas come alive across design, tech, lifestyle, creativity &
          connection everyday.
        </p>
      </div>

      <div className="ourWork pt-10">
        <div className="ourwork-cards flex flex-wrap items-start gap-5">
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work1.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UX Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Mobile App
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              AI Flying The Secrets to Intuitive App DesignCreating Seamless
              User Experiences
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work2.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UI Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Website
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              Cozmo Web Design Trends for 2024 Ideas to Elevate Your Online
              Presence.
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work3.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Dashboard
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              The Art of Branding – Designing Visual Identities That Truly Stand
              Out
            </h1>
          </div>
          <div className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
            <div className="ourworkImage overflow-hidden relative group">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ViewMoreCircle size={120} />
              </div>
              <img
                src="/work4.avif"
                className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                alt="work image"
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                UI Design
              </p>
              <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                Dashboard
              </p>
            </div>
            <h1 className="text-xl lg:text-2xl">
              Designing Intuitive Dashboards Data Accessible and Actionable
            </h1>
          </div>
        </div>
      </div>

      <div className="recentVideos mt-30">
        <h1 className="text-6xl font-semibold text-center mb-10">Recent Videos</h1>
        <PortfolioSection />
      </div>
      
    </div>
  );
}

export default Work;
