import React from "react";
import TopBackground from "../../components/TopBackground/TopBackground";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <TopBackground title="contact.contactTitle" text="contact.contactText" />
      <ContactForm />
    </div>
  );
}
