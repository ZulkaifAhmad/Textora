import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ViewMoreCircle from "../components/Viewmore";

function Blog() {
  return (
    <div className="blog mt-40 px-11">
      <div className="navigation flex gap-2 items-center">
        <Link to={"/"} className="hover:text-purple-600 text-lg">
          Home
        </Link>
        <ChevronRight size={20} />
        <p className="text-lg text-purple-600 cursor-pointer">Blog</p>
      </div>
      <div className="about-hero flex justify-between items-center mt-5">
        <h1 className="text-6xl w-3/5 font-semibold">
          Stories About My Life That Inspire Me
        </h1>
        <p className="text-lg w-2/5">
          Explore diverse topics, inspiring insights, and meaningful stories on
          Blog.
        </p>
      </div>

      <div className="featuredBlog px-5 mt-20 lg:mt-25">
        <div className="design-parts mt-10 lg:mt-15 flex flex-col lg:flex-row gap-10 lg:gap-7">
          <div className="webDesign cursor-pointer flex flex-col gap-4 w-full lg:w-4/6">
            <div className="group relative h-74 lg:h-100 w-full overflow-hidden rounded-3xl bg-red-300">
              <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-110">
                <ViewMoreCircle size={150} />
              </div>

              <img
                src="/appdesign.png"
                className="h-120 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-102 relative z-10"
                alt="App Design"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20 z-20 pointer-events-none" />
            </div>
            <div className="text-webdesign flex flex-col gap-2">
              <p className="web-desing-p-text text-lg font-semibold">
                Web Design
              </p>
              <h1 className="text-xl lg:text-2xl tracking-wide font-semibold">
                The Evolution of Web Design From Static to Dynamic
              </h1>
              <p className="text-base lg:text-lg text-gray-600">
                Web design has evolved from static pages to dynamic, interactive
                experiences. Modern sites adapt to users in real-time.
              </p>
              <div>
                <p className="inline font-medium">By Alicon Atiqs </p>
                <p className="inline ml-5 text-gray-700">Apr 20, 2025</p>
              </div>
            </div>
          </div>

          <div className="right-sidebar w-2/6">
            <div className="blogCards flex flex-col gap-4">
              <div className="blogcard flex gap-2">
                <img src="/process.avif" 
                  className="w-1/3 h-30 rounded-2xl object-cover"
                alt="" />
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-xl font-medium">Design Process: From Concept to Completion</p>
                  <p className="text-base">Feb 7, 2023</p>
                </div>
              </div>
              <div className="blogcard flex gap-2">
                <img src="/perfectFeature.avif" 
                  className="w-1/3 h-30 rounded-2xl object-cover"
                alt="" />
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-xl font-medium">Design Process: From Concept to Completion</p>
                  <p className="text-base">Feb 7, 2023</p>
                </div>
              </div>
              <div className="blogcard flex gap-2">
                <img src="/shirt.avif" 
                  className="w-1/3 h-30 rounded-2xl object-cover"
                alt="" />
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-xl font-medium">Designing the Perfect Feature comparison table</p>
                  <p className="text-base">Feb 7, 2023</p>
                </div>
              </div>
              <div className="blogcard flex gap-2">
                <img src="/behindApp.avif" 
                  className="w-1/3 h-30 rounded-2xl object-cover"
                alt="" />
                <div className="flex flex-col gap-2 justify-center">
                  <p className="text-xl font-medium">Behind the App Design A Day in the Life of a Designer</p>
                  <p className="text-base">Feb 7, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
