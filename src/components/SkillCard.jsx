import React from "react";
import { Link } from "react-router";

export default function SkillCard({ skill }) {
  return (
    <div className=" outline-4 outline-cyan-300 rounded-lg p-4 shadow-2xl text-blue-600" data-aos="fade-up">
      <img src={skill.image} alt={skill.skillName} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{skill.skillName}</h3>
      <p className="text-sm">By {skill.providerName}</p>
      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="font-bold">${skill.price}</span>
          <span className="ml-2 text-yellow-600">⭐ {skill.rating}</span>
        </div>
        <Link to={`/skills/${skill.skillId}`} className="btn bg-cyan-200 text-secondary font-bold">
          View Details
        </Link>
      </div>
    </div>
  );
}
