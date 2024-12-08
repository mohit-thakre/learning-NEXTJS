"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("/api/allblogs");
    setBlogs(res.data.data);
    console.log(res);
  };
  const deleteBlog = async (id) => {
    const res = await axios.delete("/api/edup/deleteblog", {
      data: { id },
    });
    console.log(res);
  };
  const editBlog = (idd) => {
    router.push({
      pathname: `/admin/editblog/${idd}`,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="my-4 flex items-center justify-center overflow-auto">
        <table className="w-full rounded-xl border border-richblack-800 text-white lg:max-w-maxContent">
          <thead>
            <tr className="flex gap-x-10 rounded-t-md border-b border-b-richblack-800 px-6 py-2">
              <th className="hidden text-left text-sm font-medium uppercase text-richblack-100 lg:block">
                blog
              </th>
              <th className="hidden text-center text-sm font-medium uppercase text-richblack-100 lg:block">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td className="py-10 text-center text-2xl font-medium text-richblack-100">
                  No blog found
                </td>
              </tr>
            ) : (
              blogs &&
              blogs.map((blog) => (
                <tr
                  key={blog._id}
                  className="flex flex-wrap gap-x-10 border-b border-richblack-800 px-6 py-8"
                >
                  <td className="flex flex-1 gap-x-4">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-[148px] w-[220px] rounded-lg object-cover"
                    />
                    <div className="flex flex-col justify-between">
                      <p className="text-lg font-semibold text-richblack-5">
                        {blog.title}
                      </p>
                      <p className="text-xs text-richblack-300">
                        Description: {blog.description?.substr(0, 30)}
                      </p>
                      <p className="text-[12px] text-white">
                        {/* Created: {formatDate(note.createdAt)} */}
                      </p>
                      <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                        {blog.author}
                      </p>
                    </div>
                  </td>
                  <td className="mt-4 flex w-full gap-x-4 lg:mt-0 lg:w-auto">
                    <div className="flex items-center justify-center gap-4">
                      <button
                        className="rounded-xl border-2 border-white px-6 py-3 text-white"
                        onClick={() =>
                          router.push(`/admin/editblog/${blog._id}`)
                        }
                      >
                        edit
                      </button>
                      <button
                        className="rounded-xl border-2 border-white px-6 py-3 text-white"
                        onClick={() => deleteBlog(blog._id)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
