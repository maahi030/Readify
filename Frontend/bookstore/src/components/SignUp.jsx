import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3000/users/signup", userData)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup success");
          navigate(from, { replace: true });
        }
        localStorage.setItem("User", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(err);
        toast.error("User already exists");
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Toaster />
      <div className="border-[2px] border-gray-200 shadow-md p-5 rounded-md ">
        <div className="">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <div className="flex justify-between">
              <h3 className="font-bold text-lg ">Signup</h3>{" "}
              <Link to="/" className="">
                ✕
              </Link>
            </div>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around gap-7 mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration:200">
                Signup
              </button>
              <p className="mt-1">
                Have an account already?{" "}
                <Link
                  className="underline text-blue-500 cursor-pointer "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </Link>
                <Login />
                {""}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
