import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Our School</h1>
        <nav>
          <Button asChild variant="outline" className="text-white border-white hover:bg-blue-700">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our School</h2>
          <p className="text-xl text-gray-600 mb-8">Empowering minds, shaping futures</p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Academic Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our school is committed to providing top-notch education and fostering academic growth.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Extracurricular Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer a wide range of clubs and activities to enrich students' experiences.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>State-of-the-Art Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our campus features modern classrooms, labs, and sports facilities.</p>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Our School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
