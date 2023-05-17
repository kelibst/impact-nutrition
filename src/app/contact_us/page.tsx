import React from "react";
import {
  FaFacebook,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaSnapchatGhost,
} from "react-icons/fa";
const contact_us = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">
      
        Get in touch with Us
      </h1>
      <p className="mt-10 text-xl">
        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        voluptatibus neque possimus tempore sed reiciendis minima itaque
        suscipit distinctio quidem molestias et in consequatur ex iusto
        doloribus illum illo exercitationem deserunt sint harum vitae,
        voluptatum autem. Quod corrupti deserunt excepturi. ipsum dolor sit amet
        consectetur adipisicing elit. Sint incidunt reprehenderit iste dolorum
        optio inventore aliquam deserunt quae doloribus minima.
      </p>

                   {/* Contact forms */}
      <div className=" grid place-items-center " >
      <h3 className="font-bold text-2xl m-10">Reach out to us now</h3>
      <form className="flex flex-col bg-transparent gap-2 w-3/6   ">
        <div className="grid gap-2 xl:grid-cols-2">
          <input
            className="p-1 border-4 rounded bg-inherit"
            type="text"
            placeholder="First name"
          />
          <input
            className="p-1 border-4 rounded bg-inherit"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="p-1 border-4 rounded bg-inherit"
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
        />
        <textarea
          className="p-1 border-4 rounded bg-inherit"
          name=""
          id=""
          rows={4}
          placeholder="Query"
        />
        <button className="bg-colorPrimary w-fit py-2 px-4 text-white/80 font-bold rounded ">
          Send now
        </button>
      </form>
    </div>
      <div className="contact">
        <div className="contact-container">
          <div className="contact-wrapper">
            <a href="">
              <FaTelegramPlane />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaSnapchatGhost />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact_us;
