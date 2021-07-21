import React from 'react';
import ContactForm from './../../../components/ContactForm';

const Contact = () => {

  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">CONTACT</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="section-div">
        <p>Interested ? Let's get in touch</p>
        <div>
          <a href="https://www.linkedin.com/in/caroline-lefevre-a2512794/" className="border rounded-md px-2 py-1">Contact me via LinkedIn</a>
        </div>
        <ContactForm />
      </div>
    </section>
  )
};

export default Contact;
