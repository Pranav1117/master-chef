"use client";

import { useState } from "react";

export default function Error({ reset }) {
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    setLoading(true); // Show loader
    try {
      await reset(); // Call the reset function
    } catch (err) {
      console.error("Error while resetting:", err);
    } finally {
      setLoading(false); // Hide loader after reset completes
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold">Something went wrong!</h1>
      <button
        onClick={handleReset}
        disabled={loading}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
      >
        {loading ? (
          <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full"></div>
        ) : (
          "Try Again"
        )}
      </button>
    </div>
  );
}
