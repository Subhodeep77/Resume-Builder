import React, { useState } from "react";
import { Lock } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../configs/api.js";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);
    try {
      const { data } = await api.post(
        `/api/users/reset-password/${token}`,
        { password }
      );
      toast.success(data.message);
      navigate("/app?state=login");
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-300/60 rounded-2xl px-8 py-10"
      >
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          Reset Password
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your new password below
        </p>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={14} color="#6B7280" />
          <input
            type="password"
            placeholder="New password"
            className="border-none outline-none ring-0 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Lock size={14} color="#6B7280" />
          <input
            type="password"
            placeholder="Confirm new password"
            className="border-none outline-none ring-0 w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
