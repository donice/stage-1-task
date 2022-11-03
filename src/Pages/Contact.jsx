import React from "react";

const Contact = () => {
  return (
    <div className="text-left w-full m-10 md:w-3/5">
      <div className="mb-8">
        <h1 className="font-bold text-2xl">Contact Me</h1>
        <p>Hi there, contact me to ask about anything you have in mind.</p>
      </div>

      <form action="#">
        <div className="-mx-2 md:flex">
          <div className="w-full px-2 md:w-1/2">
            <label for="firstname" className="block text-gray-700 text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter your first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="w-full px-2 md:w-1/2">
            <label for="lastname" className="block text-gray-700 text-sm  mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter your last name"
              class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label for="message" className="block text-gray-700 text-sm mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </form>
    </div>
  );
};

export default Contact;
