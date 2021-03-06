import React from 'react';

const ContactForm = () => {

  return (
    <form action="mailto:lefevre_caroline@outlook.fr" method="GET" >
      <div className="block my-1">
        <input type="text" name="subject" placeholder="Subject" className="w-4/5 px-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-500"/>
      </div>
      <div className="block my-1 h-1/4">
        <textarea name="body" placeholder="Say hello !" cols="50" rows="4" className="w-4/5 px-2 rounded-sm h-full focus:outline-none focus:ring-1 focus:ring-gray-500"></textarea>
      </div>
      <button type="submit" className="sendBtn">Email me</button>
    </form>
  )
};

export default ContactForm;
