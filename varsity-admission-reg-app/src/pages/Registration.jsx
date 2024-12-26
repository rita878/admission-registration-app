import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sideImg from "../assets/Studying-pana.svg";
import { Eye, EyeClosed } from "lucide-react";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const auth = useAuth();
  const createUser = auth?.createUser;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

const onSubmit = async (data) => {
  try {
    if (createUser) {
      const result = await createUser(data.email, data.password);
      console.log("Create User Result:", result); // Log result from createUser

      if (result?.user) {
        const newUser = {
          fullName: data.fullName,
          collegeName: data.collegeName,
          email: data.email,
          password: data.password,
        };

        console.log("New User Data:", newUser); 
    toast.success("Registration successful!");
          reset();
          navigate(from);

        
        const response = await fetch(
          "https://admission-form-server-seven.vercel.app/api/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        );

        console.log("Response Status:", response.status); 

        if (response.ok) {
          toast.success("Registration successful!");
          reset();
          navigate(from);
        } else {
          const error = await response.json();
          toast.error(`Registration failed: ${error.message}`);
        }
      }
    }
  } catch (err) {
    console.error(err);
    toast.error("Failed to register. Please try again.");
  }
};


  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white">
      {/* Side Image */}
      <div className="w-full md:w-[40%] flex justify-center">
        <img
          src={sideImg}
          alt="Studying illustration"
          className="w-[80%] h-auto object-cover"
        />
      </div>

      {/* Form */}
      <div className="max-w-md w-full md:w-[60%] mx-auto p-6 md:my-5 bg-gray-200 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="w-full px-4 py-2 border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              autoComplete="off"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* College Name */}
          <div>
            <label className="block text-gray-700">College Name</label>
            <input
              type="text"
              {...register("collegeName", {
                required: "College Name is required",
              })}
              className="w-full px-4 py-2 border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your college name"
              autoComplete="off"
            />
            {errors.collegeName && (
              <p className="text-red-500 text-sm">
                {errors.collegeName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-2 border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              autoComplete="off"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-2 border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Retype Password */}
          <div>
            <label className="block text-gray-700">Retype Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full px-4 py-2 border bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Retype your password"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 text-gray-600 focus:outline-none"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
