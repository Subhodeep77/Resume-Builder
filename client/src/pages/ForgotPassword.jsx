import React, { useState } from "react";
import { Mail } from "lucide-react";
import api from "../configs/api.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/api/users/forgot-password", { email });
      toast.success(data.message);
      setEmail("");
      navigate("/check-email");
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
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your registered email to receive a reset link
        </p>

        <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full pl-6 gap-2">
          <Mail size={14} color="#6B7280" />
          <input
            type="email"
            placeholder="Email address"
            className="border-none outline-none ring-0 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
