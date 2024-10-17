import React, { useState } from "react";
import axios from "axios";

const Checking = () => {
  const [nationalId, setNationalId] = useState(0);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // หยุดการ refresh หน้าเว็บ
    setError("");
    setStatus(null);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/application/status/${nationalId}`
      );
      setStatus(response.data.status);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("ไม่พบข้อมูลการสมัคร");
      } else {
        setError("เกิดข้อผิดพลาดขณะดึงข้อมูล");
      }
    }
  };

  return (
    <div className="container p-6">
      <h1 className="text-4xl font-bold text-center text-pink-500 mb-8 pt-10">
        ตรวจสอบสถานะการสมัคร
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          กรุณาใส่เลขบัตรประชาชน
        </h2>

        <div className="mb-4">
          <input
            type="number"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            placeholder="กรุณาใส่เลขบัตรประชาชน"
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          ตรวจสอบสถานะ
        </button>
      </form>

      {/* แสดงผลลัพธ์ตามสถานะ */}
      {status && (
        <p className="text-center text-pink-500 font-semibold text-2xl mt-4">
          สถานะ: {status}
        </p>
      )}

      {error && (
        <p className="text-center text-red-500 font-semibold mt-4">
          {error}
        </p>
      )}
    </div>
  );
};

export default Checking;
