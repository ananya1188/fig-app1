 // This tells Next.js that this component runs on the client side (in the browser)
  "use client";

  // Import UI components from our component library
  import { Button } from "../../../components/ui/button";
  import { Card, CardContent } from "../../../components/ui/card";
  import { Input } from "../../../components/ui/input";
  import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
  // Import React's useState hook to manage component state
  import { useState } from "react";
import data from "../../data/contact/section2.json";
import Image from "next/image";
const { ContactForm, icon } = data;
  // Main component for the email test page
  export default function ContactSection2() {
    // Create a state variable to track if the form is currently being submitted
    // isSubmitting = current value, setIsSubmitting = function to update it
    const [isSubmitting, setIsSubmitting] = useState(false);

    // This function handles the form submission
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      // Prevent the default form submission behavior (which would reload the page)
      e.preventDefault();
      // Set isSubmitting to true to disable the button and show "Sending..." text
      setIsSubmitting(true);

      // Store a reference to the form element before any async operations
      // This is important because e.currentTarget becomes null after async calls
      const form = e.currentTarget;
      // Create a FormData object from the form to easily extract all field values
      const formData = new FormData(form);
      // Convert FormData to a plain JavaScript object for easier handling
      const body = Object.fromEntries(formData.entries());

      try {
        // Send a POST request to our API route with the form data
        const res = await fetch("/api/contact", {
          method: "POST",  // HTTP method
          headers: { "Content-Type": "application/json" },  // Tell server we're sending JSON
          body: JSON.stringify(body),  // Convert the object to a JSON string
        });

        // Check if the HTTP response was not successful (status code 200-299)
        if (!res.ok) {
          // Throw an error to jump to the catch block
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        // Parse the JSON response from the API
        const result = await res.json();
        // Log the response to the browser console for debugging
        console.log("API Response:", result);

        // Check if the API returned a success status
        if (result.success) {
          // Show a success message to the user
          alert("Email sent successfully!");
          // Clear all form fields after successful submission
          form.reset();
        } else {
          // Show an error message with details from the API
          alert("Failed to send email: " + (result.error || "Unknown error"));
        }
      } catch (error) {
        // This block runs if there was any error (network error, server error, etc.)
        alert("An error occurred while sending the email");
        // Log the error to the console for debugging
        console.error(error);
      } finally {
        // This block always runs, whether there was an error or not
        // Set isSubmitting back to false to re-enable the submit button
        setIsSubmitting(false);
      }
    }

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      {/* Left side */}
      <div className="w-full lg:w-1/2">
        <h6 className="text-sm text-muted-foreground mb-2">Get In Touch</h6>
        <h2 className="text-4xl font-bold leading-tight mb-4">
          Ask anything or request a quote.
        </h2>
        <p className="text-muted-foreground mb-8">
          Get a free, no-obligation quote right away.
        </p>
        <div>
          {icon.map((item, i) => (
            <div key={i} className="flex items-center mb-4">
              <Image src={item.Image} alt={item.alt} width={40} height={30} />
              <p className="ml-4">{item.para}</p>
            </div>
          ))}
        </div>
        <Button>Book Appointment</Button>
      </div>

      {/* Right side */}
      <div className="flex justify-center w-full lg:w-1/2">
        <Card className="w-full max-w-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <FieldGroup className="flex flex-col gap-4">
                {ContactForm.map((field, i) => (
                  <Field key={i}>
                    <FieldLabel>{field.LabelName}</FieldLabel>
                    <Input
                      name={field.name} // must match backend columns
                      placeholder={field.placeholder}
                      required
                    />
                  </Field>
                ))}

                {/* Message */}
                <Field>
                  <FieldLabel>Message</FieldLabel>
                  <textarea
                    name="Message"
                    rows={4}
                    className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                    required
                  />
                </Field>

                <div className="pt-4">
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
