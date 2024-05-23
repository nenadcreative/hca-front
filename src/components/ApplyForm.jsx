import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ApplyForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const {
        Name,
        Email,
        Phone,
        ProgramOfInterest,
        Message,
        BestTimeToContact,
        Refferal,
      } = data;
      const formData = {
        name: Name,
        email: Email,
        phone: Phone,
        programOfInterest: ProgramOfInterest,
        bestTimeToContact: BestTimeToContact,
        refferal: Refferal,
        message: Message,
      };
      const formName = "Apply Form";

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
      className="flex flex-col p-10 items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        <div>
          <label className="mb-2" htmlFor="Name">
            Full Name <span className="text-[#ff3333]">*</span>
          </label>
          <input
            placeholder="Placeholder"
            className="border border-dark-3 rounded-lg w-full px-3 py-2 focus-visible:border-brand-blue focus-visible:border outline-none focus-visible:placeholder:text-dark-2 mb-4"
            {...register("Name", { required: true })}
          />
          {errors.Name && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>
        <div>
          <label className="mb-2" htmlFor="Email">
            Email
          </label>
          <input
            placeholder="Placeholder"
            className="border border-dark-3 rounded-lg w-full px-3 py-2 outline-none focus-visible:border-brand-blue focus-visible:placeholder:text-dark-2 mb-4"
            {...register("Email", { required: true })}
          />
          {errors.Email && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {" "}
          <label className="mb-2" htmlFor="Phone">
            Phone
          </label>
          <input
            placeholder="Placeholder"
            className="border border-dark-3 rounded-lg w-full outline-none px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
            {...register("Phone", { required: true })}
          />
          {errors.Phone && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>{" "}
        <div>
          <label className="mb-2" htmlFor="ProgramOfInterest">
            Program Of Interest <span className="text-[#ff3333]">*</span>
          </label>
          <select
            placeholder="Pick a Program"
            className="border border-dark-3 rounded-lg w-full outline-none px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
            {...register("ProgramOfInterest", { required: true })}
          >
            <option value="default">Pick a Program</option>
            <option value="ASN">Associate in Science Degree in Nursing</option>
            <option value="PN">Practical Nursing Diploma Program</option>
            <option value="RN-BSN">Nursing Bachelor’s Degree (RN-BSN)</option>
          </select>
          {errors.ProgramOfInterest && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-2" htmlFor="BestTimeToContact">
            Best time to contact <span className="text-[#ff3333]">*</span>
          </label>
          <select
            placeholder="Pick a Program"
            className="border border-dark-3 rounded-lg w-full outline-none px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
            {...register("BestTimeToContact", { required: true })}
          >
            <option value="default">Select One</option>
            <option value="weekdays-morning">Weekdays Morning</option>
            <option value="weekdays-afternoon">Weekdays Afternoon</option>
            <option value="weekdays-evening">Weekdays Evening</option>
            <option value="weekends-morning">Weekends Morning</option>
            <option value="weekends-afternoon">Weekends Afternoon</option>
            <option value="weekends-evening">Weekends Evening</option>
          </select>
          {errors.BestTimeToContact && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>

        <div>
          <label className="mb-2" htmlFor="Refferal">
            Refferal Source <span className="text-[#ff3333]">*</span>
          </label>
          <select
            placeholder="Pick a Program"
            className="border border-dark-3 rounded-lg w-full outline-none px-3 py-2 focus-visible:border-brand-blue focus-visible:border focus-visible:placeholder:text-dark-2 mb-4"
            {...register("Refferal", { required: true })}
          >
            <option value="default">Select One</option>
            <option value="florida-board-of-nursing">
              Florida Board of Nursing
            </option>
            <option value="international-search">International Search</option>
            <option value="google">Google</option>
            <option value="headlthcare-facility">Healthcare Facility</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="linked-in">LinkedIn</option>
            <option value="student-referral">Student Referral</option>
            <option value="walk-in">Walk In</option>
            <option value="event">Event</option>
            <option value="career-source">Career Source</option>
          </select>
          {errors.Refferal && (
            <span className=" bg-[#ff3333] p-px">This field is required</span>
          )}
        </div>
      </div>

      <label className="mb-2" htmlFor="Message">
        Comments or Questions
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

export default ApplyForm;
