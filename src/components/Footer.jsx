import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-black border-t mt-8 text-white">
      <div className="container mx-auto p-6 text-sm flex flex-col max-w-10/12 md:flex-row justify-between">


  
          <div className=" md:mb-0 mb-7">
            <h3 className="font-semibold mb-2 text-lg">Privacy & policy</h3>
            <ul className="space-y-1  list-inside text-gray-300 text-sm list-none">
              <li><a href="/data-policy" className="hover:underline">Data Collection & Usage</a></li>
              <li><a href="/accessibility" className="hover:underline">Accessibility Statement</a></li>
              <li><a href="/faq" className="hover:underline">Student FAQ</a></li>
              <li><a href="/contact" className="hover:underline">Contact Support</a></li>
            </ul>
          </div>


          <div className="md:mb-0 mb-7">
      <h3 className="font-semibold mb-2 text-lg">Contact Info</h3>
      <ul className="space-y-1 list-none text-gray-300">
        <li>Email: <a href="mailto:support@skillswap.com" className="hover:underline">support@skillswap.com</a></li>
        <li>Phone: <a href="tel:+8801234567890" className="hover:underline">+880 1234 567890</a></li>
        <li>Location: Khilgaon, Dhaka, Bangladesh</li>
      </ul>
    </div>

        
        <div className=" gap-3 mt-2 text-xl space-y-3">
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com"><FaFacebook className="text-blue-600" /></a>
            <h1 className="text-sm">Facebook</h1>


          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com"><FaInstagram className="text-pink-600" /></a>
            <h1 className="text-sm">Instagram</h1>


          </div>
          <div className="flex items-center gap-2" >
            <a href="https://www.linkedin.com"><FaLinkedin className="text-gray-600" /></a>
            <h1 className="text-sm">Linkedin</h1>


          </div>

        </div>
      </div>

      <div className="text-center  p-5"> <p>© {new Date().getFullYear()} SkillSwap</p>
      </div>

    </footer>
  );
}
