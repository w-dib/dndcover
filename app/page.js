"use client";
import { useState } from "react";
import { nodestoCaps, oraniembaum } from "@/utils/fonts";
import Dragndrop from "@/components/Dragndrop";

export default function Home() {
  const [titleText, setTitleText] = useState("");

  const handleTitleChange = (event) => {
    setTitleText(event.target.value);
  };
  return (
    <main className="w-full flex flex-col gap-10 min-h-screen items-center p-24">
      <div className="w-96 md:w-max">
        <h1
          className={`text-6xl font-bold text-center  ${nodestoCaps.className}`}
        >
          D&D Adventure Cover Generator
        </h1>
        <p
          className={`text-center ${oraniembaum.className} font-bold text-black`}
        >
          Please make sure that your image&apos;s aspect ratio is A4
        </p>
      </div>
      <div className="w-96 md:w-max flex md:flex-row flex-col md:items-start items-center gap-6">
        <div className="relative w-72">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-3 w-max">
            {titleText}
          </div>
          <Dragndrop />
        </div>
        <div className="flex flex-col gap-4 w-72">
          <label htmlFor="title" className="text-lg font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Enter title..."
            value={titleText}
            onChange={handleTitleChange}
          />

          <label htmlFor="subtitle" className="text-lg font-medium">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Enter subtitle..."
          />

          <label htmlFor="description" className="text-lg font-medium">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Enter description..."
          />

          <label htmlFor="author" className="text-lg font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Enter author..."
          />
        </div>
      </div>
    </main>
  );
}
