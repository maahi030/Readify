import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen">
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
                {...register("nameRequired", { required: true })}
              />
              <br />
              {errors.nameRequired && (
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
                {...register("emailRequired", { required: true })}
              />
              <br />
              {errors.emailRequired && (
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
                {...register("passwordRequired", { required: true })}
              />
              <br />
              {errors.passwordRequired && (
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
