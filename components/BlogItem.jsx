"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogItem = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/allblogs");
      console.log(res);
      setBlogPosts(res.data.data);
    })();
  }, []);

  return blogPosts.map((item) => (
    <div className="p-4 max-w-xl mx-auto bg-black text-white rounded-lg border-2 border-gray-600">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${item._id}`} className="hover:text-blue-400">
          {item.title}
        </Link>
      </h2>

      <p className="text-gray-400 mb-4">
        {item?.description?.substring(0, 100)}...
      </p>

      <div className="flex items-center mt-2 mb-4">
        <img
          src={item.author_img}
          alt={item.author}
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="text-sm text-gray-400">
          By <span className="font-semibold">{item.author}</span> on {item.date}
        </span>
      </div>

      <Link href={`/blogs/${item._id}`}>see more</Link>
    </div>
  ));
};

export default BlogItem;
