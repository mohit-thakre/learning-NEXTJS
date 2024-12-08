import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className=" flex gap-2 w-full min-h-screen mx-4">
        <div>
          <Sidebar />
        </div>
        <div className="rounded-md  flex w-full  border border-neutral-200">
          {" "}
          {children}
        </div>
      </div>
    </>
  );
}
