import React from "react";

const QuestionForm = () => {
  return (
    <section className="w-full bg-gray-100 flex items-center justify-center py-8 pt-1 px-4">
      <div className="bg-white mt-20 sm:mt-28 md:mt-40 shadow-lg rounded-2xl w-full max-w-4xl p-6 sm:p-8 md:p-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900">
          Ask a Question
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-amber-700 mx-auto mt-2 mb-8 rounded-full"></div>

        {/* Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Enter Your Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Enter Your Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Your Subject
            </label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Your Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-8 rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuestionForm;
