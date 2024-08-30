import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Choose Your Application Type</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Middle School Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">For students entering grades 6-8. Our middle school program focuses on building a strong academic foundation and developing essential skills.</p>
              <Button asChild className="w-full">
                <Link to="/apply/middle-school">Apply for Middle School</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>High School Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">For students entering grades 9-12. Our high school program prepares students for college and beyond with rigorous academics and diverse extracurricular opportunities.</p>
              <Button asChild className="w-full">
                <Link to="/apply/high-school">Apply for High School</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;