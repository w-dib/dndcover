"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="flex flex-col items-center">
      <div
        {...getRootProps()}
        className={`w-72 h-96 border-2 border-dashed rounded-lg ${
          isDragActive ? "border-green-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Uploaded Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="my-44 mx-6 text-center text-gray-400">
            {isDragActive
              ? "Drop the image here"
              : "Drag and drop an image here, or click to select"}
          </p>
        )}
      </div>
      {selectedImage && (
        <button
          onClick={clearImage}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
