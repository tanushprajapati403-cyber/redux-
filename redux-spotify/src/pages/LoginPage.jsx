import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUser } from "../features/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  let navigate = useNavigate();
  let {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });  

  let dispatch = useDispatch()

  let {registerdUser} = useSelector((store)=>store.auth)

  const onsubmit = (data) => {
    dispatch(loginUser(data));
    reset();
    if(registerdUser && registerdUser.email === data.email){
      navigate('/Home');
    };
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-3">
      <div className="w-full max-w-sm text-white py-2">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center justify-center border-gray-500 border rounded-full p-3">
            <i className="ri-spotify-fill text-green-500 text-6xl leading-none"></i>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-8">Welcome back</h1>

        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email",
                },
              })}
              type="email"
              className="cursor-pointer w-full bg-black border border-gray-600 rounded p-3 text-white focus:outline-none focus:border-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            disabled={!isValid}
            type="submit"
            className={`w-full text-black font-semibold py-3 rounded-full transition cursor-pointer ${isValid ? " bg-green-500 hover:bg-green-600" : " bg-gray-500 hover:bg-gray-600"}`}
          >
            Continue
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="px-4 text-sm">or</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="space-y-3">
          {[
            "Continue with phone number",
            "Continue with Google",
            "Continue with Facebook",
            "Continue with Apple",
          ].map((text) => (
            <button
              key={text}
              className=" cursor-pointer w-full border border-gray-600 rounded-full py-3 hover:border-white transition-colors flex items-center justify-center font-bold"
            >
              {text}
            </button>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-sm">
            Don't have an account?{" "}
            <a
              onClick={() => navigate("/register")}
              href="#"
              className="font-bold hover:text-[#1ed760] hover:underline cursor-pointer"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
