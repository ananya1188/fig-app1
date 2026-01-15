"use client";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Field, FieldGroup, FieldLabel } from "../../components/ui/field";
import data from "../data/section9.json";
import Image from "next/image";
const { ContactForm,icon } = data;

export default function Section9() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const body = Object.fromEntries(formData.entries());

    const req = await fetch("/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await req.json();

    if (result.success) {
      alert("Message sent successfully");
      e.currentTarget.reset();
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <section>
      {/* Top */}
      <div>
        <Image src="/images/Border (7).png" alt="nine" width={40} height={40}></Image>
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
