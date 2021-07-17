import React from 'react';
import ContactForm from './../../../components/ContactForm';

const Contact = () => {

  return (
    <section className="mt-3">
      <h2 className="font-bold text-xl m-2">Contact</h2>
      <div className="divider m-auto w-64 h-2 mb-3"></div>
      <p>Interested ? Let's get in touch</p>
      <div>
        <button className="border rounded-md px-2 py-1">View resume</button>
        <br />
        <a href="https://www.linkedin.com/in/caroline-lefevre-a2512794/" className="border rounded-md px-2 py-1">View LinkedIn</a>
      </div>
      <ContactForm />
    </section>
  )
};

export default Contact;
