"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddBlog = () => {
  const { idd } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    author_img: "",
    image: "",
    id: idd,
  });

  const alldata = { ...formData, idd };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(formData, "asdfasf");
    e.preventDefault();

    const response = await axios.put("/api/edup/editblog", alldata);

    console.log(response, "res", formData);
  };

  return (
    <div className=" w-[500px] mx-auto bg-black text-white p-6 rounded-lg border-2 border-gray-600 my-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-3 py-2 text-black rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Author Image URL</label>
          <input
            type="text"
            name="author_img"
            value={formData.author_img}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded-md"
            required
          />
        </div>

        {/* Blog Image */}
        <div className="mb-4">
          <label className="block mb-2">Blog Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
