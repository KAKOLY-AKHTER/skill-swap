import React from "react";
import { useLoaderData } from "react-router";
import SkillCard from "../components/SkillCard";
import { Link } from "react-router-dom";

export default function AllSkill() {
  const skills = useLoaderData();

  if (!skills || skills.length === 0) {
    return (
      <div className="text-center md:py-60 py-70 ">
        <h2 className="text-2xl font-bold text-red-500">404 - No Skills Found</h2>
        <Link to="/" className="btn btn-secondary mt-4">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:py-30 py-40 ">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-secondary">All Skills(<span className="text-cyan-400">{skills.length}</span>)</h2>
        <Link to="/" className="btn btn-outline bg-cyan-200 text-blue-800">Go to Home</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.skillId} skill={skill} />
        ))}
      </div>
    </div>
  );
}
