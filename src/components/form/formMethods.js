import * as yup from "yup";

//a schema to determine the shape of the data entered/required
export const schema = yup.object().shape({
  username: yup
    .string()
    .required("This field is required")
    .min(5, "min 5 character")
    .max(15, "max 15 characters")
    .matches(
      /^[a-z]+\d*[a-z]+$/i,
      "Username must consist of 5 to 15 characters, only letters and numbers are allowed, username must not start or end with a number."
    ),
  email: yup.string().required("This field is required").email("Invalid email"),
  password: yup.string().min(8, "At least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
});

//posting data
export async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: data,
  });
  return response.json();
}
