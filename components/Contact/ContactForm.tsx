import axios from "axios";
import React, { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormProps {
  children?: ReactNode;
}

interface Inputs {
  name: string;
  email: string;
  company: string;
  message: string;
  example: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [submitButton, setSubmitButton] = useState<string>("SEND!");
  const [message, setMessage] = useState<string>("");

  const onSubmit = async (data: Inputs) => {
    setSubmitButton("SENDING...");
    const response = await axios.post("/api/contact", {
      data,
    });

    console.log(response);
    if (response.status === 200) {
      setMessage(response.data.message);
    } else {
      setMessage(response.data.error);
    }

    setSubmitButton("SEND!");
    reset(
      { company: "", email: "", message: "", name: "" },
      { keepErrors: false }
    );
  }; // your form submit function which will invoke after successful validation

  const resetForm = () => {
    reset(
      { company: "", email: "", message: "", name: "" },
      { keepErrors: false }
    );
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-80 lg:w-96 p-4 border-2 flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label className="pb-2">Your Name*</label>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            className="dark:bg-secondary-gray-700 bg-secondary-gray-200 w-full p-2"
            {...register("name", {
              required: true,
              maxLength: 30,
              pattern: /^[a-zA-Z ]*$/i,
            })}
          />
          {errors?.name?.type === "required" && <p>Required!</p>}
          {errors?.name?.type === "maxLength" && (
            <p>Name cannot exceed 30 characters</p>
          )}
          {errors?.name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="pb-2">Email*</label>
        <div className="flex items-center gap-4">
          <input
            className="dark:bg-secondary-gray-700 bg-secondary-gray-200 w-full p-2"
            {...register("email", {
              required: true,
              pattern: /(.+)@(.+){2,}\.(.+){2,}/i,
            })}
          />
          {errors?.email?.type === "pattern" && (
            <p>Please enter a valid Email</p>
          )}
          {errors?.email?.type === "required" && <p>Required!</p>}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="pb-2">Company</label>
        <div className="flex items-center gap-4">
          <input
            className="dark:bg-secondary-gray-700 bg-secondary-gray-200 w-full p-2"
            {...register("company", {
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.company?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label className="pb-2">Message*</label>
        <div className="flex items-center gap-4">
          <textarea
            className="dark:bg-secondary-gray-700 bg-secondary-gray-200 w-full p-2"
            {...register("message", { required: true })}
          />
          {errors?.message?.type === "required" && <p>Required!</p>}
        </div>
      </div>
      <div>{message}</div>
      <button type="submit" className="bg-primary-blue-400 p-2">
        {submitButton}
      </button>
      <button className="p-2 border-2" type="reset" onClick={resetForm}>
        Clear!
      </button>
    </form>
  );
};

export default ContactForm;
