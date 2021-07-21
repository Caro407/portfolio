import React from 'react';

const ContactForm = () => {

  return (
    <form>
      <div className="block my-1">
        <input type="text" placeholder="Subject" className="w-3/5 px-2 rounded-sm"/>
      </div>
      <div className="block my-1 h-1/4">
        <textarea type="textarea" placeholder="Say hello !" cols="50" rows="4" className="w-3/5 px-2 rounded-sm h-full"></textarea>
      </div>
      <button type="submit" className="sendBtn">Send</button>
    </form>
  )
};

export default ContactForm;
