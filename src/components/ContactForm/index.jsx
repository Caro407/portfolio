import React from 'react';

const ContactForm = () => {

  return (
    <form>
      <label>Subject</label>
      <input type="text"/>
      <label>Text</label>
      <input type="textarea"/>
      <button type="submit" className="border rounded-sm">Send</button>
    </form>
  )
};

export default ContactForm;
