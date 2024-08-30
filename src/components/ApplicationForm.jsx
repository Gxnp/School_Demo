import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const ApplicationForm = () => {
  const { schoolType } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    gradeApplyingFor: '',
    profilePicture: null,
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const value = e.target.name === 'profilePicture' ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationId = "APP-" + Math.random().toString(36).substr(2, 9);
    toast({
      title: "Application Submitted",
      description: `Your application has been received. Your application ID is: ${applicationId}`,
    });
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Apply for {schoolType === 'middle-school' ? 'Middle School' : 'High School'}</h2>
          <Button onClick={goBack} className="mb-4 w-full">Go Back</Button>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
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
                    <div>
                      <Label htmlFor="profilePicture">Profile Picture</Label>
                      <Input id="profilePicture" name="profilePicture" type="file" onChange={handleInputChange} accept="image/*" />
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
              </motion.div>
            </AnimatePresence>
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
      </div>
    </div>
  );
};

export default ApplicationForm;
