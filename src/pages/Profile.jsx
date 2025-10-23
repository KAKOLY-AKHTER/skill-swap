import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      toast.success("Profile updated");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <div className="mb-4">
        <img src={user?.photoURL || "https://via.placeholder.com/120"} alt="avatar" className="w-28 h-28 rounded-full" />
        <p className="mt-2">{user?.email}</p>
      </div>
      <form onSubmit={handleUpdate} className="space-y-3 border-2 rounded-xl p-5 shadow-2xl">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="input input-bordered w-full" />
        <input value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" className="input input-bordered w-full" />
        <button className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}
