import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ApplicationForm = () => {
  const { schoolType } = useParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    gradeApplyingFor: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful submission
    toast({
      title: "Application Submitted",
      description: "Your application has been received. Your application ID is: APP-" + Math.random().toString(36).substr(2, 9),
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Apply for {schoolType === 'middle-school' ? 'Middle School' : 'High School'}</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="previousSchool">Previous School</Label>
              <Input id="previousSchool" name="previousSchool" value={formData.previousSchool} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor="gradeApplyingFor">Grade Applying For</Label>
              <Input id="gradeApplyingFor" name="gradeApplyingFor" value={formData.gradeApplyingFor} onChange={handleInputChange} required />
            </div>
          </div>
        )}
        <div className="mt-6 flex justify-between">
          {step > 1 && <Button type="button" onClick={handlePrevStep}>Previous</Button>}
          {step < 2 ? (
            <Button type="button" onClick={handleNextStep}>Next</Button>
          ) : (
            <Button type="submit">Submit Application</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;