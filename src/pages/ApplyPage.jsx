import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap } from 'lucide-react';

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Choose Your Application Type</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <BookOpen className="w-16 h-16 mx-auto text-blue-600 mb-4" />
              <CardTitle className="text-2xl">Middle School Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-600">For students entering grades 6-8. Our middle school program focuses on building a strong academic foundation and developing essential skills.</p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/apply/middle-school">Apply for Middle School</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <GraduationCap className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <CardTitle className="text-2xl">High School Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-gray-600">For students entering grades 9-12. Our high school program prepares students for college and beyond with rigorous academics and diverse extracurricular opportunities.</p>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link to="/apply/high-school">Apply for High School</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="hover:bg-gray-100">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
