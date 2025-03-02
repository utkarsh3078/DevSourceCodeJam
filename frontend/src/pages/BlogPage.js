import { useParams } from "react-router-dom";


function BlogPage({Data}) {
    let { id } = useParams();
    const blog = Data[parseInt(id)];
  
    if (!blog) {
      return <p>Blog not found!</p>;
    }
  
    return (
      <div className="p-10 container">
        <h2 className="text-2xl font-bold">{blog.username}'s Blog</h2>
        <p className="text-sm text-gray-500">{blog.writtenAt}</p>
        <img src={blog.profilePic} alt="Profile" className="w-20 h-20 rounded-full my-2" />
        <p className="text-lg">{blog.content}</p>
      </div>
    );
}

export default BlogPage;