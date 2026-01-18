import React from "react";
import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-300/60 rounded-2xl px-8 py-10 text-center">
        <div className="flex justify-center mb-4">
          <MailCheck size={40} className="text-indigo-500" />
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Check your email
        </h1>

        <p className="text-sm text-gray-500 mt-3">
          If an account exists with the email you entered, we’ve sent a password
          reset link. Please check your inbox and spam folder.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block w-full h-11 leading-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Didn’t receive the email? Try again after a few minutes.
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
