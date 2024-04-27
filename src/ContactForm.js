import { useForm } from "react-hook-form";
import "./ContactForm.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const ContactForm = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Valid email adress is required.").required("Email is missing"),
    title: yup.string().required("Message title is required"),
    message: yup.string().max(500).required("Message content is missing"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="contact_form_box" onSubmit={handleSubmit(onSubmit)}>
      <div className="contact_form_content_box">
        <h1>Contact me here!</h1>
        <div className="input_field email_box">
          <input
            className="email_box"
            placeholder="Your email..."
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="input_field email_box">
          <input
            className="email_box"
            placeholder="Title..."
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </div>
        <input
          className="message_box"
          placeholder={
            errors.message?.message
              ? errors.message?.message
              : "Hi, I am contacting you to..."
          }
          {...register("message")}
        />
        <input type="submit" value="Send"></input>
      </div>
    </form>
  );
};
