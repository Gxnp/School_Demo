import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

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
    navigate('/');
  };

  const goBack = () => {
    navigate('/apply');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Apply for {schoolType === 'middle-school' ? 'Middle School' : 'High School'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={goBack} variant="outline" className="mb-6 w-full">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Application Types
          </Button>
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {step === 1 && (
                  <>
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="profilePicture">Profile Picture</Label>
                      <Input id="profilePicture" name="profilePicture" type="file" onChange={handleInputChange} accept="image/*" className="mt-1" />
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="previousSchool">Previous School</Label>
                      <Input id="previousSchool" name="previousSchool" value={formData.previousSchool} onChange={handleInputChange} required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="gradeApplyingFor">Grade Applying For</Label>
                      <Input id="gradeApplyingFor" name="gradeApplyingFor" value={formData.gradeApplyingFor} onChange={handleInputChange} required className="mt-1" />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <Button type="button" onClick={handlePrevStep} variant="outline">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              {step < 2 ? (
                <Button type="button" onClick={handleNextStep} className="ml-auto">
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit" className="ml-auto bg-green-600 hover:bg-green-700">
                  Submit Application <Send className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
