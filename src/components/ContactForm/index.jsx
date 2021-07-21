import React from 'react';

const ContactForm = () => {

  return (
    <form>
      <div className="block my-1">
        <input type="text" placeholder="Subject" className="w-3/5"/>
      </div>
      <div className="block my-1">
        <input type="textarea" placeholder="Say hello !" className="w-3/5"/>
      </div>
      <button type="submit" className="sendBtn">Send</button>
    </form>
  )
};

export default ContactForm;
