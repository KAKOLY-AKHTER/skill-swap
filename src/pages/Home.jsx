
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import { FaCalendarAlt, FaChalkboardTeacher } from "react-icons/fa";
import { FaSearch, FaSignInAlt, FaCalendarCheck } from "react-icons/fa";
import { FaStar, FaUserTie } from "react-icons/fa";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";

export default function Home() {
  const skills = useLoaderData()
  const popular = skills.slice(0, 15);
  return (
    <div className="container mx-auto mt-10  max-w-screen-xl px-4 md:py-20 py-40">

      <section className="mb-6 flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-lg shadow-md">
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h2 className="font-bold"><span className="font-bold text-4xl md:text-7xl text-secondary">Learn & </span><br />
            <span className="font-bold text-4xl md:text-7xl text-cyan-400">Share Skills</span></h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full max-w-md"
          >
            <SwiperSlide>
              <p className="text-sm md:text-base  text-blue-400 font-bold">
                Join local workshops and grow together with passionate learners and mentors.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-sm md:text-base text-secondary font-bold">
                Discover new talents, share your skills, and build lasting connections.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-sm md:text-base text-green-500 font-bold">
                Learn coding, music, yoga, and more—from real people near you.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-sm md:text-base text-fuchsia-600 font-bold">
                Empower your community by teaching what you love and learning what you need.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-sm md:text-base text-blue-400 font-bold">
                SkillSwap is where curiosity meets collaboration—start your journey today.
              </p>
            </SwiperSlide>

          </Swiper>


        </div>
        <div className="w-full md:w-1/2 mx-auto rounded-3xl overflow-hidden mb-4">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="rounded-3xl"
          >
            {[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAwtbySqpTwCqoHGi1VJWExp0CDchgjhtTDQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA3ftV9SlAb4hnIJotqRTOvo-qaVviHXjJQ&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hGmpUYbXTE55kXiKA6MrVouw28YkuZb39w&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO_UCom91fofVCWrYXgawUErLERYmItunfpURjWsdGzG85suyk5MSk8t7IiSmg6WaVK8&usqp=CAU",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} className="w-full  object-cover" alt={`Slide ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        {/* <div className="carousel w-full md:w-1/2 rounded-3xl">
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
        </div> */}
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
        <h2 className="text-xl font-bold text-secondary mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FaSearch />, title: "Browse Skills", desc: "Explore local skill listings by category." },
            { icon: <FaSignInAlt />, title: "Login to View", desc: "Sign in to access full skill info." },
            { icon: <FaCalendarCheck />, title: "Book Session", desc: "Submit your name and email to book." },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-cyan-300 rounded-lg p-4 shadow-md hover:shadow-xl transition">
              <div className="text-3xl text-secondary mb-2">{item.icon}</div>
              <h3 className="text-lg font-bold text-cyan-600">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="mt-8" data-aos="fade-up">
        <h2 className="text-xl font-bold text-secondary mb-4">Top Rated Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Alex Martin", skill: "Guitar", rating: 4.8 },
            { name: "Rafi Khan", skill: "Web Dev", rating: 4.9 },
            { name: "Maya Roy", skill: "Yoga", rating: 4.7 },
          ].map((p, i) => (
            <div key={i} className="bg-white border border-cyan-300 rounded-lg p-4 shadow-md hover:shadow-xl transition">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <FaUserTie />
                <h3 className="text-lg font-bold">{p.name}</h3>
              </div>
              <p className="text-sm text-gray-600">Skill: {p.skill}</p>
              <p className="text-sm text-yellow-500 flex items-center gap-1">
                <FaStar /> {p.rating}
              </p>
            </div>
          ))}
        </div>
      </section>




      <section className="mt-8" data-aos="fade-up">
        <h2 className="text-xl font-bold text-secondary mb-4">Upcoming Local Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Guitar Workshop", date: "Oct 27", host: "Alex Martin" },
            { title: "HTML Basics", date: "Nov 3", host: "Rafi Khan" },
          ].map((w, i) => (
            <div key={i} className="bg-white border border-cyan-300 rounded-lg p-4 shadow-md hover:shadow-xl transition">
              <h3 className="text-lg font-bold text-cyan-600 mb-1">{w.title}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaCalendarAlt /> {w.date}
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <FaChalkboardTeacher /> {w.host}
              </p>
            </div>
          ))}
        </div>
      </section>


     <section className="mt-12 px-4 md:px-8 lg:px-16" data-aos="fade-up">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
    What Learners Say
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Tanvir Hasan",
        feedback: "SkillSwap helped me find a local coding mentor. Now I’m building my own portfolio!",
        image: "https://i.pravatar.cc/150?img=12",
      },
      {
        name: "Rima Akter",
        feedback: "I joined a yoga session nearby and it changed my daily routine. Highly recommended!",
        image: "https://i.pravatar.cc/150?img=47",
      },
      {
        name: "Shuvo Roy",
        feedback: "I taught guitar to 3 students through SkillSwap. It’s a great way to share your passion.",
        image: "https://i.pravatar.cc/150?img=33",
      },
      {
    name: "Imran Hossain",
    feedback: "Thanks to SkillSwap, I found a local art teacher who helped me prepare for my portfolio submission.",
    image: "https://i.pravatar.cc/150?img=56"
  },
  {
    name: " Farzana Nahar",
    feedback: "I joined a public speaking group through SkillSwap and gained confidence in front of audiences.",
    image: "https://i.pravatar.cc/150?img=21"
  },{
  name: "Jaman Jahan",
  feedback: "Through SkillSwap, I found a baking mentor who helped me start my own home-based cake business!",
  image: "https://i.pravatar.cc/150?img=65"
}



    ].map((user, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-md p-6 border border-cyan-200 hover:shadow-lg transition duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
          />
          <h3 className="text-lg font-semibold text-secondary">{user.name}</h3>
        </div>
        <p className="text-gray-600 text-sm italic leading-relaxed">
          “{user.feedback}”
        </p>
      </div>
    ))}
  </div>
</section>




    </div>
  );
}
