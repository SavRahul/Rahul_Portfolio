import React from 'react'
import { AiFillPhone,AiTwotoneMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="mt-16">
          <p className="text-4xl font-bold border-b-4 p-2 border-gray-500 inline">Contact </p>
          {/* <p className="py-6">Submit the form below to get in touch with me</p> */}
        </div>
        {/* <div className="flex justify-center item-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Enter Your Name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="email" placeholder="Enter Your email" className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" rows="10" placeholder="Enter Your Message" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none">
            </textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 text-center py-8 px-10 sm:px-0">
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center justify-center">
          <div className="text-4xl">
              <AiFillPhone />
            </div>
            <h1 className="font-bold text-xl mb-5">Phone</h1>
            <h2>+91- 7735016446</h2> 
            <h2>+91- 7608836864</h2>
          </div>
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500 flex flex-col items-center justify-center">
            <div className="text-4xl">
              <AiTwotoneMail/>
            </div>
            <h1 className="font-bold text-xl mb-5">Email</h1>
            <h2>savsanirahul1@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
