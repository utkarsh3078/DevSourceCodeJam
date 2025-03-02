import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Blogs({Data}) {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered div
    const [expandedIndexes, setExpandedIndexes] = useState({}); // Track expanded blogs
  
    return ( 
        <div className="p-10 container">
            <p className="text-xl font-semibold mb-5">Hear what people are saying today:</p>
            <div className="flex flex-wrap gap-5 justify-center items-center">
                {Data.map((blog, index) => {
                const isExpanded = expandedIndexes[index];
                const showReadMore = blog.content.length > 116;

                return (
                <div 
                    key={index} 
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="bg-white w-[350px] rounded-lg shadow-lg mb-6 p-6 flex flex-col items-start h-[350px]"
                >
                <img
                  src={blog.profilePic}
                  alt={`${blog.username}'s profile`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-lg text-purple-600" onClick={() =>{console.log(index)}}>{blog.username}</p>
                    <p className="text-sm text-gray-500">{blog.writtenAt}</p>
                  </div>
                  <div className="h-[70%] overflow-hidden">
                    <Link to={`./Blogs/${index}`} className="text-2xl text-gray-700 hover:text-blue-700 cursor-pointer " >
                      {isExpanded ? blog.content : blog.content.slice(0, 116)}
                      {showReadMore && !isExpanded && (
                        <span 
                          onClick={() => setExpandedIndexes(prev => ({ ...prev, [index]: true }))}
                          className="text-blue-500 cursor-pointer ml-2"
                        >
                          ... Read more
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-2">
                  <div className="flex gap-5">
                    <button className="flex gap-1 hover:text-purple-600">Up <FaArrowUp /></button>
                    <button className="flex gap-1 hover:text-purple-600">Down<FaArrowDown /></button>
                  </div>
                  <button 
                    onMouseEnter={() => setHoveredIndex(index)} 
                    className="relative"
                  >
                    ...
                    {hoveredIndex === index && (
                      <p className="absolute top-10 -left-32 text-red-500 bg-slate-800 w-40 rounded-lg p-1 hover:text-blue-500 hover:bg-white">
                        Report!
                      </p>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Blogs;