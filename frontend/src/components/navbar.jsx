import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // ใช้ icon เมนู

const Navcomp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // ใช้เพื่อรู้ path ปัจจุบัน

  // ฟังก์ชันเพื่อเช็คว่า path ปัจจุบันตรงกับ link นั้น ๆ หรือไม่
  const isActive = (path) => location.pathname === path;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <header className="bg-white shadow-md">
        <div className="mx-auto px-5 py-3 flex justify-between items-center">
          <Link to="/">
          <img
            src="/tuslogo.png"
            alt="Triam Suwin Logo"
            className="h-20 w-auto"
          />
          </Link>
          <div className="relative lg:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center"
            >
              <Menu className="h-6 w-6" />
            </Button>
            {isOpen && (
              <div className="absolute  right-0 bg-white shadow-md rounded-lg z-10 ">
                <Link
                  to="/"
                  className={`flex px-6 py-4 hover:bg-gray-100 text-lg ${
                    isActive("/") ? "text-pink-500" : ""
                  }`}
                >
                  หน้าหลัก
                </Link>
                <Link
                  to="/cost"
                  className={`flex px-6 py-4 hover:bg-gray-100 text-lg ${
                    isActive("/cost") ? "text-pink-500" : ""
                  }`}
                >
                  ค่าบำรุงการศึกษา
                </Link>
                <Link
                  to="/schedule"
                  className={`flex px-6 py-4 hover:bg-gray-100 text-lg ${
                    isActive("/schedule") ? "text-pink-500" : ""
                  }`}
                >
                  กำหนดการรับสมัคร
                </Link>
                {/* <Link
                  to="/howto"
                  className={`flex px-6 py-4 hover:bg-gray-100 text-lg ${
                    isActive("/howto") ? "text-pink-500" : ""
                  }`}
                >
                  ขั้นตอนการสมัคร
                </Link> */}
                <Link
                  to="/check"
                  className={`flex px-6 py-4 hover:bg-gray-100 text-lg ${
                    isActive("/check") ? "text-pink-500" : ""
                  }`}
                >
                  ตรวจสอบสถานะการสมัคร
                </Link>
                <Link
                  to="/apply"
                  className="flex px-6 py-4 bg-blue-600 text-white text-lg"
                >
                  Apply Now
                </Link>
              </div>
            )}
          </div>

          <nav className="hidden lg:flex space-x-1 ">
            <Button
              className={`font-bold text-md bg-transparent hover:bg-slate-100 ${
                isActive("/") ? "text-pink-500" : "text-black"
              }`}
            >
              <Link to="/">หน้าหลัก</Link>
            </Button>
            <Button
              className={`font-bold text-md bg-transparent hover:bg-slate-100 ${
                isActive("/cost") ? "text-pink-500" : "text-black"
              }`}
            >
              <Link to="/cost">ค่าบำรุงการศึกษา</Link>
            </Button>
            <Button
              className={`font-bold text-md bg-transparent hover:bg-slate-100 ${
                isActive("/schedule") ? "text-pink-500" : "text-black"
              }`}
            >
              <Link to="/schedule">กำหนดการรับสมัคร</Link>
            </Button>
            {/* <Button
              className={`font-bold text-md bg-transparent hover:bg-slate-100 ${
                isActive("/howto") ? "text-pink-500" : "text-black"
              }`}
            >
              <Link to="/howto">ขั้นตอนการสมัคร</Link>
            </Button> */}
            <Button
              className={`font-bold text-md bg-transparent hover:bg-slate-100 ${
                isActive("/check") ? "text-pink-500" : "text-black"
              }`}
            >
              <Link to="/check">ตรวจสอบสถานะการสมัคร</Link>
            </Button>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>
        </div>
      </header>
  );
};

export default Navcomp;
