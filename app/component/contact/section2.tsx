"use client";

import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Field, FieldGroup, FieldLabel } from "../../../components/ui/field";
import data from "../../data/contact/section2.json";
import Image from "next/image";
const { ContactForm ,icon} = data;

export default function ContactSection2() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const res = await fetch("/api/Contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div>

        {/* left */}
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
            <p> </p>
            </div>
           
              )) }
            
          </div>

          <Button>
            Book Appointment
          </Button>
        </div>

      {/* right */}
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

      </div>
    </section>
    
  );
}
