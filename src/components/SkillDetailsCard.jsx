import React from "react";
import { Link } from "react-router";

export default function SkillDetailsCard({ skill }) {
  if (!skill) return <div className="p-6">Skill not found</div>;
  return (
    <div className="space-y-5">
      <img className="w-full h-[350px] object-cover rounded" src={skill.image} alt={skill.skillName} />
      <h2 className="text-2xl font-semibold">{skill.skillName}</h2>
      <p>{skill.description}</p>
      <p className="text-sm text-gray-600">Provider: {skill.providerName} — {skill.providerEmail}</p>
      <Link className="btn btn-secondary" to="/">
        Back to Home
      </Link>
    </div>
  );
}
