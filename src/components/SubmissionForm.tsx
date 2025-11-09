import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface FormData {
  name: string;
  age: string;
  email: string;
}

export const SubmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    age: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");

    // Validate required fields
    if (!formData.name || !formData.age || !formData.email) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Validate email format
    if (!validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Convert age to number for validation
      const ageNum = parseInt(formData.age, 10);
      if (isNaN(ageNum) || ageNum < 1 || ageNum > 150) {
        setErrorMessage("Please enter a valid age between 1 and 150.");
        setIsLoading(false);
        return;
      }

      // Use environment variable or fallback to localhost for development
      // For production, set VITE_API_URL in your environment variables
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/submit-data";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          age: ageNum,
          email: formData.email.trim(),
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Use server error message if available
        const errorMsg = responseData.message || "Failed to submit data. Please try again.";
        setErrorMessage(`Error: ${errorMsg}`);
        return;
      }

      setSuccessMessage("Submission Successful! Thank you.");
      setFormData({ name: "", age: "", email: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Error: Failed to submit data. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          AI Vibe Coder Entry Form
        </h1>

        {successMessage && (
          <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg text-success animate-in fade-in duration-300">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-lg text-destructive animate-in fade-in duration-300">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="text-foreground font-medium">
              Age
            </Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              placeholder="Enter your age"
              min="1"
              max="150"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="transition-all duration-200 focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 shadow-md hover:shadow-lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Entry"
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};
