import React, { ReactElement } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface Props {}

export default function Contact({}: Props): ReactElement {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:radojicapopovic@icloud.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact Me
      </h3>
      <div className=" flex flex-col pt-10 space-y-10">
        <h4 className="text-3xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline ">Lets Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <span className="text-2xl">+381601553004</span>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <span className="text-2xl">radojicapopovic@icloud.com</span>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <span className="text-2xl">Serbia</span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit max-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            ></input>
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            ></input>
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          ></input>
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>

          <button
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
