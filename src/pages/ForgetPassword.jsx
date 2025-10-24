import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const prefill = location.state?.email || "";
  const [email, setEmail] = useState(prefill);

  useEffect(() => {
    if (prefill) setEmail(prefill);
  }, [prefill]);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Reset email sent. Opening Gmail...");
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md md:py-30 py-60">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleReset} className="space-y-3">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="input input-bordered w-full" required />
        <button type="submit" className="btn btn-primary">Send Reset Email</button>
      </form>
    </div>
  );
}
