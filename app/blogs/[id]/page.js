"use client";
import Nav from "@/components/Nav";
import axios from "axios";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchdata = async (id) => {
    const res = await axios.post("/api/edup/findbyid", { id });
    setData(res.data.data);
  };

  useEffect(() => {
    if (id) {
      fetchdata(id);
    }
  }, [id]);

  if (!data) {
    return <h1>No data found</h1>;
  }

  return (
    <div>
      <Nav />
      <button className="border text-2xl my-6 mx-4 font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>{data.title}</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
      </button>
      <div className="p-4 max-w-3xl mx-auto bg-black text-white rounded-lg border-2 border-gray-600">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h2 className="text-2xl font-semibold mb-2">
          <Link href={`/blog/${data.slug}`} className="hover:text-blue-400">
            {data.title}
          </Link>
        </h2>

        <p className="text-gray-400 mb-4">{data.description}</p>

        <div className="flex items-center mt-2 mb-4">
          <img
            src={data.author_img}
            alt={data.author}
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-sm text-gray-400">
            By <span className="font-semibold">{data.author}</span> on{" "}
            {data.date}
          </span>
        </div>

        <Link
          href={`/blog/${data.slug}`}
          className="text-blue-400 hover:underline mt-4 inline-block"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Page;
