"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { postRecipe } from "../actions/actions";

const RecipeForm = () => {
  const { data } = useSession();
  const userId = data?.user?.id;
  const [formData, setFormData] = useState({
    heading: "",
    category: "",
    quote: "",
    ingredients: "",
    directions: "",
    image: null,
    imagePreview: null,
    imageName: "",
    objectType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imageName: file?.name,
        objectType: file?.type,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // TODO => understand when to use server actions and api routes
    e.preventDefault();

    // getting predefined url of s3 and unique image name from server to store in s3
    const { data, status } = await axios.post("/api/upload-url", formData);

    // storign image in S3
    if (status === 200) {
      try {
        await axios.put(data.url, formData.image, {
          headers: { "Content-Type": formData.objectType },
        });
      } catch (error) {
        console.log(error);
      }
    }

    // storing recipe in db
    try {
      const { image, ...formDataWithoutImage } = formData;
      const res = await postRecipe({
        ...formDataWithoutImage,
        objectKey: data.objectKey,
        user: userId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add a Recipe</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <input
          type="text"
          id="heading"
          placeholder="Recipe Title"
          value={formData.heading}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Recipe Description */}
        <textarea
          id="quote"
          placeholder="Quote"
          value={formData.quote}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          id="directions"
          placeholder="Directions"
          value={formData.directions}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-purple-500"
          required
        />
        <textarea
          id="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-purple-500"
          required
        />
        {/* Categories */}
        <input
          type="text"
          id="category"
          placeholder="Categories"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Image Upload */}
        <div className="border p-4 rounded-md bg-gray-200 text-center">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div className="bg-purple-500 text-white px-4 py-2 rounded-md inline-block">
              Upload Image
            </div>
          </label>
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="mt-3 w-32 h-32 object-cover rounded-md mx-auto"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
