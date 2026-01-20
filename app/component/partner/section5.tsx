 // This tells Next.js that this component runs on the client side (in the browser)
  "use client";

  // Import UI components from our component library
  import { Button } from "../../../components/ui/button";
  import { Card, CardContent } from "../../../components/ui/card";
  import { Input } from "../../../components/ui/input";
  import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
  // Import React's useState hook to manage component state
  import { useState } from "react";
import data from "../../data/partner/section5.json";
import Image from "next/image";
const { ContactForm, icon } = data;
  // Main component for the email test page
  export default function PartnerSection5() {
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
        const res = await fetch("/api/partner", {
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
    <section>
      {/* Top */}
      <div>
        <h6>09</h6>
      </div>

      <h6>Contact Us</h6>

      <h2>
        Need info or a quote? Call or fill out the form.
      </h2>

      <div className="flex justify-center">
        <Card className="w-120">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit}>
              <FieldGroup className="flex flex-wrap gap-6">

                <Field>
                  {ContactForm.map((form, i) => (
                    <div key={i}>
                      <FieldLabel>{form.LabelName}</FieldLabel>
                      <Input name={form.name} placeholder={form.placeholder}
                      />
                    </div>
                  ))}
                </Field>

                {/* Message */}
                <Field className="w-full">
                  <FieldLabel>Message</FieldLabel>
                  <textarea  name="message"  rows={4}  className="w-full border p-2"  placeholder="Your message" />
                </Field>

                {/* Button */}
                <div className="w-full mt-4">
                  <Button type="submit">Send Message</Button>
                </div>

              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
      <div>
                      {icon.map((item, i) => (
                        <div key={i} className="flex items-center mb-4">
                          <Image src={item.Image} alt={item.alt} width={40} height={30} />
                          <p className="ml-4">{item.para}</p>
                    <p> </p>
                    </div>
                   
                      )) }
                    
                  </div>
    </section>
  );
}
