import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Spacing } from "./Spacing";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
      file: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
      file: Yup.mixed()
        .nullable()
        .test(
          "fileSize",
          "File size is too large",
          (value) => !value || (value && (value as File).size <= 10485760)
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("Form submitted successfully");
    },
  });

  return (
    <div className="flex flex-col items-center mt-12 p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <Spacing size="sm" />
      <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="w-full p-2 border border-gray-700 rounded bg-transparent focus:outline-none focus:bg-gray-700"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-bold mb-2">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...formik.getFieldProps("subject")}
            className="w-full p-2 border border-gray-700 rounded bg-transparent focus:outline-none focus:bg-gray-700"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.subject}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...formik.getFieldProps("message")}
            className="w-full p-2 border border-gray-700 rounded bg-transparent focus:outline-none focus:bg-gray-700"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.message}
            </div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-bold mb-2">
            Attachment (Max 10MB)
          </label>
          <div className="relative">
            <input
              id="file"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(event) => {
                const file = event.currentTarget.files?.[0];
                formik.setFieldValue("file", file);
              }}
            />
            <div className="w-full p-2 border border-gray-700 rounded bg-transparent text-sm text-gray-400 flex justify-between items-center">
              {(formik.values.file as unknown as File)?.name
                ? (formik.values.file as unknown as File).name
                : "Choose a file..."}
              <button
                type="button"
                className="px-3 py-1 bg-gray-700 text-white rounded"
                onClick={() => document.getElementById("file")?.click()}
              >
                Browse
              </button>
            </div>
          </div>
          {formik.touched.file && formik.errors.file ? (
            <div className="text-red-600 text-sm mt-1">
              {formik.errors.file}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-transparent border border-gray-700 text-white rounded hover:bg-gray-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
