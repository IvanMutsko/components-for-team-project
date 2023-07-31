import { useForm } from "react-hook-form";
import { Form } from "./RegisterForm.styled";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  // === Import your func for submit ===
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  // ===================================

  const validationRules = {
    userName: {
      required: "Name is required",
      minLength: { value: 2, message: "Minimum 2 characters" },
    },
    userEmail: {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email (example@xmpl.com)",
      },
    },
    password: {
      required: "Password is required",
      minLength: { value: 6, message: "Minimum 6 symbols" },
    },
    confirm_password: {
      required: "Confirm password",
      validate: (value) => {
        if (watch("password") !== value) {
          return "Your passwords do not match";
        }
      },
    },
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {/* =======Name======= */}
      <label>
        Name:
        <input
          placeholder="Name"
          {...register("userName", { ...validationRules.userName })}
        />
      </label>
      {errors?.userName && <span>{errors?.userName?.message || "Error"}</span>}
      {/* =======Email======= */}
      <label>
        Email:
        <input
          placeholder="Email"
          type="email"
          {...register("userEmail", { ...validationRules.userEmail })}
        />
      </label>
      {errors?.userEmail && (
        <span>{errors?.userEmail?.message || "Error"}</span>
      )}
      {/* =======Password======= */}
      <label>
        Password:
        <input
          placeholder="Password"
          type="password"
          {...register("password", { ...validationRules.password })}
        />
      </label>
      {errors?.password && <span>{errors?.password?.message || "Error"}</span>}
      {/* =======Confirm password======= */}
      <label>
        Confirm password:
        <input
          placeholder="Confirm password"
          type="password"
          {...register("confirm_password", {
            ...validationRules.confirm_password,
          })}
        />
      </label>
      {errors?.confirm_password && (
        <span>{errors?.confirm_password?.message || "Error"}</span>
      )}

      <button type="submit" disabled={!isValid}>
        Register
      </button>
    </Form>
  );
};
