import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function formikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Submitted:", values);
          alert(`User Registered: ${values.username}`);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>Username:</label><br />
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label><br />
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label><br />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting} style={{ marginTop: "10px" }}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default formikForm;
