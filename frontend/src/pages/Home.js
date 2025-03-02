import { GiCrystalWand } from "react-icons/gi";
import { Link, Route, Routes } from "react-router-dom";
import Blogs from "./Blogs";
import BlogPage from "./BlogPage";

function Home({ Authented, setAuthented }) {

  const Data = [
    {
      username: "JohnDoe",
      writtenAt: "2025-02-01 10:00 AM",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      content:
        "This is a blog post about the importance of web development. Learn how to start coding and build amazing projects!",
    },
    {
      username: "JaneSmith",
      writtenAt: "2025-01-30 05:30 PM",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      content:
        "Blogging is an essential skill for modern developers. In this post, I'll share tips and strategies for writing great blog posts! It is crucial to understand how to structure your blog, write engaging content, and connect with the audience through meaningful storytelling.",
    },
    {
      username: "CodeMaster",
      writtenAt: "2025-01-29 08:15 AM",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      content:
        "ReactJS is a powerful library for building user interfaces. Here's a deep dive into its core features and how to get started.",
    },
  ];

  return (
    <div>
      <nav className="text-center flex w-full h-[10%] bg-violet-700 text-white justify-between px-10 py-2">
        <Link className="text-white my-auto text-5xl" to="/">
          <GiCrystalWand className="hover:text-pink-400 duration-500 cursor-pointer" />
        </Link>
      </nav>
      <Routes>

        <Route path="/" element={<Blogs Data={Data} />}></Route>
        <Route path="/Blogs/:id" element={<BlogPage Data={Data} />} ></Route>
      </Routes>
    </div>
  );
}

export default Home;
