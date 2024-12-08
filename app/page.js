import BlogItem from "@/components/BlogItem";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className=" w-full min-h-screen">
      <Nav />
      <Hero />
      <BlogItem />
      <Footer />
    </div>
  );
}
