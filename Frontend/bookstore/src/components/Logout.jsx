import React from "react";
import { useAuth } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("Logout failed");
      setTimeout(() => {}, 2000);
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-700 duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
