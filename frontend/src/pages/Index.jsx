import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Users, Camera } from "lucide-react";
import Foot from "@/components/footer";

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            TUSW Admission
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            ระบบการรับสมัครนักเรียนโรงเรียนเตรียมอุดมศึกษา สุวินทวงศ์
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Link to="/apply">Start Your Journey</Link>
          </Button>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="https://www.tusw.ac.th/" target="_blank" rel="otherpage">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-pink-500 mb-4 font-normal" />
                <CardTitle>
                  เว็ปไซต์โรงเรียนเตรียมอุดมศึกษา สุวินทวงศ์
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our school is committed to providing top-notch education and
                  fostering academic growth.
                </p>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://heyzine.com/flip-book/0f6fc72a57.html"
            target="_blank"
            rel="otherpage"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Book className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>คู่มือนักเรียนและผู้ปกครอง</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We offer a cutting-edge curriculum that prepares students for
                  the challenges of the future.
                </p>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100057578224732"
            target="_blank"
            rel="otherpage"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-700 mb-4" />
                <CardTitle>เพจโรงเรียนเตรียมอุดมศึกษา สุวินทวงศ์</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Join a warm and inclusive community that supports every
                  student's growth and well-being.
                </p>
              </CardContent>
            </Card>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100068910052250"
            target="_blank"
            rel="otherpage"
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Camera className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>
                  งานโสตทัศนศึกษา โรงเรียนเตรียมอุดมศึกษา สุวินทวงศ์{" "}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our campus features state-of-the-art classrooms, labs, and
                  sports facilities for a complete learning experience.
                </p>
              </CardContent>
            </Card>
          </a>
        </div>
      </main>

      <div className="mt-4 pb-10">
        <div className="overflow-hidden rounded-lg  flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7749.544352500672!2d100.861638!3d13.792603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6ee9379d593b%3A0x1403e35d6afce1bf!2z4LmC4Lij4LiH4LmA4Lij4Li14Lii4LiZ4LmA4LiV4Lij4Li14Lii4Lih4Lit4Li44LiU4Lih4Lio4Li24LiB4Lip4LiyIOC4quC4uOC4p-C4tOC4meC4l-C4p-C4h-C4qOC5jA!5e0!3m2!1sth!2sus!4v1727163541499!5m2!1sth!2sus"
            width="70%"
            height="450"
            style={{ border: 0, borderRadius: 20 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default Index;
