import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";

function Contact() {
  function submit() {
    console.log(values);
  }

  let { handleSubmit, values, handleChange, errors, handleBlur, touched } =
    useFormik({
      initialValues: { name: "", age: "", email: "", password: "" },
      onSubmit: submit,
      validate: validation,
    });
  function validation() {
    let errors = {};
    if (values.name == "") {
      errors.name = "Name is Required";
    } else if (!values.name.match(/^[a-zA-Z0-9_\s]+$/)) {
      errors.name = "name doesn't match";
    }
    if (values.age == "") {
      errors.age = "Age is Required";
    } else if (values.age < 5) {
      errors.age = "Age must be Above 5";
    }
    if (values.email == "") {
      errors.email = "email is Required";
    } else if (
      !values.email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
    ) {
      errors.email = "email must be like this 'mailname@domain.com'";
    }
    if (values.password == "") {
      errors.password = "Password is a must";
    } else if (
      !values.password.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      errors.password =
        "Password must contain one number and one special char (6 to 16)";
    }
    console.log(errors);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Title */}
      <h1 className="mt-4 text-4xl font-bold uppercase text-blue-gray">
        conatct section
      </h1>
      {/* lines */}
      <div className="lines flex items-center justify-evenly mt-3">
        <div className="left-line w-20 h-1 bg-blue-gray"></div>
        <FontAwesomeIcon
          className="text-bluebg-blue-gray align-middle mx-3"
          icon={faStar}
        />
        <div className="left-line w-20 h-1 bg-blue-gray"></div>
      </div>
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col  gap-4"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.name && errors.name && (
          <p className="text-red-500">{errors.name}</p>
        )}

        <input
          type="number"
          placeholder="Age"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {touched.age && errors.age && (
          <p className="text-red-500">{errors.age}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          className="bg-cgreen text-white w-1/4 p-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
