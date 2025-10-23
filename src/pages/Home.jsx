
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";

export default function Home() {
  const skills = useLoaderData()
  const popular = skills.slice(0, 15);
  return (
    <div className="container mx-auto mt-10  max-w-screen-xl px-4 md:py-20 py-40">

      <section className="mb-6 flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md">
         <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
           <h2 className="text-3xl md:text-4xl font-bold"><span className="font-bold text-7xl text-secondary">Learn & </span><br />
           <span className="font-bold text-7xl text-cyan-400">Share Skills</span></h2>
        <p className="text-sm md:text-base text-blue-400 font-bold">Join local workshops and grow together</p>

  </div>



        <div className="carousel w-full md:w-1/2 rounded-3xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwtbySqpTwCqoHGi1VJWExp0CDchgjhtTDQ&s"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA3ftV9SlAb4hnIJotqRTOvo-qaVviHXjJQ&s"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hGmpUYbXTE55kXiKA6MrVouw28YkuZb39w&s"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO_UCom91fofVCWrYXgawUErLERYmItunfpURjWsdGzG85suyk5MSk8t7IiSmg6WaVK8&usqp=CAU"
              className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-4 text-secondary">Popular Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((s) => (
            <SkillCard key={s.skillId} skill={s}></SkillCard>
          ))}
        </div>
      </section>

      <section className="mt-8" data-aos="fade-up">
        <h2 className="text-xl font-bold text-secondary">How It Works</h2>
        <ol className="list-decimal ml-6">
          <li>Browse skills</li>
          <li>Login to view details</li>
          <li>Book a session</li>
        </ol>
      </section>

      <section className="mt-8 text-bold" data-aos="fade-up">
        <h2 className="text-xl font-bold text-secondary">Top Rated Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-secondary font-semibold">
          <div className=" p-4 rounded outline-4 outline-cyan-400 shadow-2xl ">Alex Martin — Guitar — ⭐ 4.8</div>
          <div className=" p-4 rounded  outline-4 outline-cyan-400 shadow-2xl">Rafi Khan — Web Dev — ⭐ 4.9</div>
          <div className="p-4 rounded  outline-4 outline-cyan-400 shadow-2xl">Maya Roy — Yoga — ⭐ 4.7</div>
        </div>
      </section>

      <section className="mt-8" data-aos="fade-up">
        <h2 className="text-xl font-bold text-secondary">Upcoming Local Workshops</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-secondary font-semibold">
          <div className=" p-4 rounded outline-4 outline-cyan-400 shadow-2xl">Guitar Workshop — Oct 27 — Alex Martin</div>
          <div className=" p-4 rounded outline-4 outline-cyan-400 shadow-2xl">HTML Basics — Nov 3 — Rafi Khan</div>
        </div>
      </section>
    </div>
  );
}
