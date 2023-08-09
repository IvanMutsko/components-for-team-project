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
} from "./LogInForm.styled";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
});

const LogInForm = () => {
  const onSubmitForm = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Container>
      <Title>Log In</Title>

      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmitForm}
      >
        {({ isValid }) => (
          <FormElement autoComplete="off">
            <Subtitle htmlFor="email">Email</Subtitle>
            <Input
              type="email"
              name="email"
              placeholder="nadiia@gmail.com"
              id="login_email"
            />
            <ErrorText name="email" component="p" />

            <Subtitle htmlFor="password">Password</Subtitle>
            <Input
              type="password"
              name="password"
              placeholder="******"
              id="login_password"
            />

            <ErrorText name="password" component="p" />

            <Button type="submit" disabled={!isValid}>
              Log in
            </Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
};

export default LogInForm;
