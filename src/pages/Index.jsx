import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our School Application Portal</h1>
        <p className="text-xl text-gray-600 mb-8">Choose your application type:</p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/apply/middle-school">Apply for Middle School</Link>
          </Button>
          <Button asChild>
            <Link to="/apply/high-school">Apply for High School</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
