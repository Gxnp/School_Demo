import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Users, Building } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Our School</h1>
          <nav>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-16">
        <section className="mb-16 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">Welcome to Our School</h2>
          <p className="text-xl text-gray-600 mb-8">Empowering minds, shaping futures</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link to="/apply">Start Your Journey</Link>
          </Button>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
              <CardTitle>Academic Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our school is committed to providing top-notch education and fostering academic growth.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Book className="w-12 h-12 text-green-600 mb-4" />
              <CardTitle>Innovative Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer a cutting-edge curriculum that prepares students for the challenges of the future.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Users className="w-12 h-12 text-yellow-600 mb-4" />
              <CardTitle>Supportive Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join a warm and inclusive community that supports every student's growth and well-being.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Building className="w-12 h-12 text-purple-600 mb-4" />
              <CardTitle>Modern Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our campus features state-of-the-art classrooms, labs, and sports facilities for a complete learning experience.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Our School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
