/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { Name, Email, Phone, Message } = data;
      const formData = {
        name: Name,
        email: Email,
        phone: Phone,
        message: Message,
      };
      const formName = "Contact Form";

      const response = await axios.post(
        "https://hca-cms-wuxg2.ondigitalocean.app/api/ezforms/submit",
        { formData, formName }
      );

      // Handle success response
      alert("Form submitted successfully");
      console.log("Form submitted successfully", response);
      // Reset form after successful submission
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="flex flex-col items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="mb-2" htmlFor="Name">
        Name <span className="text-red-500">*</span>
      </label>

      <input
        placeholder="Your Name"
        className="border border-dark-3 rounded-lg w-full px-3 py-2 focus-visible:border-brand-blue focus-visible:border outline-none focus-visible:placeholder:text-dark-2 mb-4"
        {...register("Name", { required: true })}
      />
      {errors.Name && (
        <span className=" bg-[#ff3333] p-px">This field is required</span>
      )}
      <label className="mb-2" htmlFor="Email">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        placeholder="Your Email"
        className="border border-dark-3 rounded-lg w-full px-3 py-2 outline-none focus-visible:border-brand-blue focus-visible:placeholder:text-dark-2 mb-4"
        {...register("Email", { required: true })}
      />
      {errors.Email && (
        <span className=" bg-[#ff3333] p-px">This field is required</span>
      )}

      <label className="mb-2" htmlFor="Phone">
        Phone <span className="text-red-500">*</span>
      </label>

      <input
        placeholder="Your Phone"
        className="border border-dark-3 rounded-lg w-full outline-none px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
        {...register("Phone", { required: true })}
      />
      {errors.Phone && (
        <span className=" bg-[#ff3333] p-px">This field is required</span>
      )}
      <label className="mb-2" htmlFor="Message">
        Message <span className="text-red-500">*</span>
      </label>

      <textarea
        placeholder="Type your message..."
        className="border border-dark-3 rounded-lg outline-none w-full min-h-24 px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
        {...register("Message", { required: false })}
      />
      {errors.Message && (
        <span className=" bg-[#ff3333] p-px">This field is required</span>
      )}

      <div className="flex flex-row items-center gap-3">
        <input type="checkbox" {...register("Terms", { required: true })} />
        <label className=" text-body-md" htmlFor="Terms">
          I authorize Hope College of Arts & Sciences to contact me via phone or
          email.
        </label>
      </div>
      {errors.Terms && (
        <span className=" bg-[#ff3333] p-px">This field is required</span>
      )}

      <input
        className="bg-brand-blue cursor-pointer hover:bg-brand-blue2 text-white px-8 py-4 rounded-lg min-w-[200px] inline-flex justify-center font-semibold text-body-md mt-6  "
        type="submit"
      />
    </form>
  );
};

export default MyForm;
