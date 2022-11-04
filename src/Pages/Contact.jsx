import React, { useState, useRef, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_.]{1,23}$/;
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{1,500}$/;

const Contact = () => {
  const name  ="drdonice";

  const userRef = useRef();

  const [user, setUser] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const [errMssg, setErrMssg] = useState("");


  useEffect(() => {
    userRef.current.focus();
  }, []);

  // an effect that tests if the username matches the regex requirements
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidUser(result);
  }, [user]);

  // an effect that tests if the message matches the regex requirements
  useEffect(() => {
    const result = USER_REGEX.test(message);
    setValidMessage(result); //outputting a boolean
  }, [message]);

  // an effect that tests if the email matches the regex requirements
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result); //outputting a boolean
  }, [email]);

  // an effect that clears the error message when either of the dependencies changes
  useEffect(() => {
    setErrMssg("");
  }, [user, email, message]);

  //..........................
  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("")
    setUser("")
    setMessage("")
  };

  // focus:border-2 focus:border-rose-500

  return (
    <div className="text-left w-full m-10 md:w-3/5">
      <div className="mb-8">
        <h1 className="font-bold text-3xl mb-2">Contact Me</h1>
        <p className="text-lg text-gray-700">
          Hi there, contact me to ask about anything you have in mind.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="-mx-2 md:flex">
          <div className="w-full px-2 mb-2 md:w-1/2">
            <label
              htmlFor="firstname"
              className="block text-gray-700 text-sm mb-1"
            >
              First name
            </label>
            <input
              ref={userRef}
              type="text"
              id="first_name"
              placeholder="Enter your first name"
              aria-describedby="fnerror"
              onChange={(e) => setUser(e.target.value)}
              aria-invalid={validUser ? "false" : "true"}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              className="appearance-none text-sm border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-1 focus:border-sky-300"
            />
            <p
              id="fnerror"
              className={
                userFocus && !validUser ? "text-gray-500 text-sm" : 'hidden'
              }
            >
              Please enter your first name
            </p>
          </div>

          <div className="w-full px-2 md:w-1/2 mb-2">
            <label
              htmlFor="lastname"
              className="block text-gray-700 text-sm  mb-1"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              placeholder="Enter your last name"
              aria-describedby="lnerror"
              onChange={(e) => setUser(e.target.value)}
              aria-invalid={validUser ? "false" : "true"}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              class="appearance-none text-sm border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-300"
            />
            <p 
              id="lnerror" 
              className={
                userFocus && !validUser ? "text-gray-500 text-sm" : 'hidden'
              }
            >
              Please enter your last name
            </p>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 text-sm  mb-1">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="yourname@email.com"
            aria-describedby="emlerror"
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={validEmail ? "false" : "true"}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            class="appearance-none text-sm border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-300"
          />
          <p 
            id="emlerror" 
            className={
              emailFocus && !validEmail ? "text-rose-500 text-sm" : 'hidden'
            }
          >
            Please enter a valid email
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            aria-describedby="msgerror"
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={validMessage ? "false" : "true"}
            onFocus={() => setMessageFocus(true)}
            onBlur={() => setMessageFocus(false)}
            class="appearance-none text-sm border rounded-md w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-2 focus:border-rose-500"
          />
          <p 
            id="msgerror" 
            className={
              messageFocus && !validMessage ? "text-rose-500 text-sm" : 'hidden'
            }
          >
            Please enter a message
          </p>
        </div>

        <div class="md:flex md:items-center mb-6">
          <label class="block text-gray-500">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm font-md">
              You agree to providing your data to {name} who may contact you.
            </span>
          </label>
        </div>

        <div class="flex items-center justify-between">
          <button
            id="btn__submit"
            class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:border-sky-300"
            type="button"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
