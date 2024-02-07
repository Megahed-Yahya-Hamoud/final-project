import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters")
    .max(30, "Username must be at most 30 characters"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

//Regex

export default RegisterSchema;
