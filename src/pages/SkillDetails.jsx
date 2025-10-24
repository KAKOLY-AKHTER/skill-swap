import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import toast from "react-hot-toast";

export default function SkillDetails() {
  const { id } = useParams();
  const skills = useLoaderData();
  const skill = skills.find((s) => String(s.skillId) === String(id));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    setName("");
    setEmail("");
  };

  if (!skill) return <div className="p-6">Skill not found</div>;

  return (
    <div className="container mx-auto max-w-10/12 md:py-30 py-60">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="text-blue-500">
          <img src={skill.image} alt={skill.skillName} className="w-full h-64 object-cover rounded" />
          <h2 className="text-2xl font-bold mt-3 text-black">{skill.skillName}</h2>
          <p className="mt-2">{skill.description}</p>
          <p className="mt-2">Provider: {skill.providerName} ({skill.providerEmail})</p>
          
        </div>
        <div>
          <h3 className="text-xl font-semibold ">Book Session</h3>
          <form onSubmit={handleSubmit} className="mt-3 space-y-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="input input-bordered w-full" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="input input-bordered w-full" required />
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
