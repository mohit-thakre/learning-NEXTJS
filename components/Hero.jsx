import React from "react";

const Hero = () => {
  return (
    <div className=" w-full flex justify-center items-center flex-col h-[60vh]">
      <h1 className=" w-[60%] font-bold text-4xl shadow-2xl text-center pb-8">
        Latest Blogs
      </h1>
      <h4 className="  w-[60%] text-md text-center py-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
        assumenda iur e molestiae est error tenetur dicta deserunt? Veniam
        praesentium amet similique molestiae at sunt, harum cumque corrupti
      </h4>
      <form>
        <div className=" my-8 gap-1 flex justify-center items-center  text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" enter email"
            className=" border bg-transparent text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-md"
          />
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-md">
            <span>subscribe</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
