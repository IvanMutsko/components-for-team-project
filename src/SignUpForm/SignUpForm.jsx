import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Title,
  FormElement,
  Subtitle,
  Input,
  ErrorText,
  Button,
} from "./SignUpForm.styled";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .matches(
      /^[a-zA-Z0-9_]*$/,
      "Only letters, underscores and numbers are allowed"
    )
    .required(),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpForm = () => {
  const onSubmitForm = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Container>
      <Title>Sign Up</Title>

      <Formik
        validationSchema={schema}
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={onSubmitForm}
      >
        {({ isValid }) => (
          <FormElement autoComplete="off">
            <Subtitle htmlFor="name">Name</Subtitle>
            <Input
              type="name"
              name="name"
              placeholder="Enter your name"
              id="signup_name"
            />
            <ErrorText name="name" component="p" />

            <Subtitle htmlFor="email">Email</Subtitle>
            <Input
              type="email"
              name="email"
              placeholder="Enter email"
              id="signup_email"
            />
            <ErrorText name="email" component="p" />

            <Subtitle htmlFor="password">Password</Subtitle>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              id="signup_password"
            />

            <ErrorText name="password" component="p" />

            <Button type="submit" disabled={!isValid}>
              Sign Up
            </Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
};

export default SignUpForm;
