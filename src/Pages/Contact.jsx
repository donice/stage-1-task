import React, { useState } from "react";

const Contact = () => {
  const [name, setname] = useState('drdonice')

  return (
    <div className="text-left w-full m-10 md:w-3/5">
      <div className="mb-8">
        <h1 className="font-medium text-4xl mb-2">Contact Me</h1>
        <p className="text-lg">Hi there, contact me to ask about anything you have in mind.</p>
      </div>

      <form action="#">
        <div className="-mx-2 md:flex">
          <div className="w-full px-2 md:w-1/2">
            <label for="firstname" className="block text-gray-700 text-sm mb-2">
              First name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              className="appearance-none border rounded-md w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full px-2 md:w-1/2">
            <label for="lastname" className="block text-gray-700 text-sm  mb-2">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              class="appearance-none border rounded-md w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <label for="email" className="block text-gray-700 text-sm  mb-2">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="yourname@email.com"
          class="appearance-none border rounded-md w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label for="message" className="block text-gray-700 text-sm mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          class="appearance-none border rounded-md w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
        <div class="md:flex md:items-center mb-6">
    <label class="block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox"/>
      <span class="text-sm font-md">
      You agree to providing your data to {name} who may contact you.
      </span>
    </label>
  </div>

  <div class="flex items-center justify-between">
      <button id="btn__submit" class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send Message
      </button>
    </div>
      </form>
    </div>
  );
};

export default Contact;
