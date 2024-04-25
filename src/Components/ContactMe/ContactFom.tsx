"use client";
import { useState } from "react";
import MessageTextArea from "./MessageTextArea";
import SubmitButton from "./SubmitButton";
export default function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <>
      <form className=" ">
        <div className="text-3xl mb-4 text-purple-800">Send Me Email</div>
        <MessageTextArea message={message} setMessage={setMessage} />
        <SubmitButton message={message} />
      </form>
    </>
  );
}
