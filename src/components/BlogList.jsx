import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, setBlogs, setEditingBlog }) {
  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <p>No blogs yet. Start writing ✍️</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            setBlogs={setBlogs}
            setEditingBlog={setEditingBlog}
          />
        ))
      )}
    </div>
  );
}

export default BlogList;
