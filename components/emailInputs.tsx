"use client";

import { POST } from "./sendEmail";

export default async function EmailInput() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full">
          <h2>Contact me!</h2>
        </div>
        <form
          className="m-10 flex flex col mx-0"
          action={async (formData) => {
            POST(formData);
          }}
        >
          <div className="object-cover rounded-lg ">
            <div className="w-full">
              <input
                className="h-14 w-96 px-4 roudned-lg border border-gray-500"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
            </div>

            <div className="w-full">
              <textarea
                className="h-52 w-96 px-4 roudned-lg border border-gray-500 p-4 resize "
                name="message"
                placeholder="Your message"
              />
            </div>
            <div className="w-full">
              <button
                className=" bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 rounded-lg w-64 h-14 text-lg hover:scale-105 hover:border-blue-500 transition"
                type="submit"
              >
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
