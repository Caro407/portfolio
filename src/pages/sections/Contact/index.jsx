import React from 'react';
import ContactForm from './../../../components/ContactForm';

const Contact = () => {

  return (
    <section className="mt-3">
      <h2 className="font-bold text-3xl m-1">CONTACT</h2>
      <div className="divider m-auto w-64 h-1 mb-3"></div>
      <div className="section-div">
        <p className="font-bold">If you want more information or get in touch about a professional project, please feel free to contact me !</p>
        <div className="my-2">
          <a href="https://www.linkedin.com/in/caroline-lefevre-a2512794/" className="border rounded-md px-2 py-1 hover:underline">Contact me via LinkedIn</a>
          <p className="block">or send me an email :</p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
};

export default Contact;
