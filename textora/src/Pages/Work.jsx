import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ViewMoreCircle from "../components/Viewmore";
import PortfolioSection from "../components/recentVideos";
import { work } from "../components/Articles";
import { useNavigate } from "react-router-dom";

function Work() {
  let navigate = useNavigate()
  return (
    <div className="work mt-24 md:mt-40 px-6 md:px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-base md:text-lg">
          Home
        </Link>
        <ChevronRight size={18} />
        <p className="text-base md:text-lg text-purple-600 cursor-pointer">
          Work
        </p>
      </div>

      <div className="about-hero flex flex-col md:flex-row justify-between items-start md:items-center mt-8 md:mt-10 gap-6">
        <h1 className="text-4xl md:text-6xl w-full md:w-3/5 font-semibold">
          All Popular Works
        </h1>
        <p className="text-base md:text-lg w-full md:w-2/5 text-gray-600">
          Where ideas come alive across design, tech, lifestyle, creativity &
          connection everyday.
        </p>
      </div>

      <div className="ourWork pt-6 md:pt-10">
         <div className="ourwork-cards flex flex-wrap items-start gap-5">
          {work.map((work, index) => (
            <div onClick={()=> navigate(`/work/${work.slug}`)} className="ourwork-card cursor-pointer flex flex-col gap-3 mt-10 w-full md:w-[calc(50%-10px)]">
              <div className="ourworkImage overflow-hidden relative group">
                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ViewMoreCircle size={120} />
                </div>
                <img
                  src={work.image}
                  className="w-full rounded-3xl group-hover:scale-102 relative z-10 h-64 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
                  alt={work.title}
                />
              </div>
              <div className="flex gap-3 items-center">
                <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                  {work.tagOne}
                </p>
                <p className="p-3 text-sm lg:text-lg rounded-4xl border border-purple-400 w-fit">
                  {work.tagTwo}
                </p>
              </div>
              <h1 className="text-xl lg:text-2xl">{work.title}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="recentVideos mt-20 md:mt-30">
        <h1 className="text-3xl md:text-6xl font-semibold text-center mb-8 md:mb-16">
          Recent Videos
        </h1>
        <PortfolioSection />
      </div>
    </div>
  );
}

export default Work;
