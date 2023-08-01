import { useForm } from "react-hook-form";
import { Form } from "./RegisterForm.styled";
import { validationRules } from "../validationRules";
import { InputField } from "../InputField/InputField";

export const RegisterForm = ({ option, title, buttonName }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {option === "register" && (
          <InputField
            label="Name:"
            placeholder="Name"
            type="text"
            name="userName"
            rules={validationRules.userName}
            formContext={{ register, formState: { errors } }}
          />
        )}
        <InputField
          label="Email:"
          placeholder="Email"
          type="email"
          name="userEmail"
          rules={validationRules.userEmail}
          formContext={{ register, formState: { errors } }}
        />

        <InputField
          label="Password:"
          placeholder="Password"
          type="password"
          name="password"
          rules={validationRules.password}
          formContext={{ register, formState: { errors } }}
        />

        <button type="submit" disabled={!isValid}>
          {buttonName}
        </button>
      </Form>
    </>
  );
};
