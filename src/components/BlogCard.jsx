import React from "react";

function BlogCard({ blog, setBlogs, setEditingBlog }) {
  const handleDelete = () => {
    setBlogs((prevBlogs) => prevBlogs.filter((b) => b.id !== blog.id));
  };

  const handleEdit = () => {
    setEditingBlog(blog);
    window.scrollTo(0, 0); // Optional scroll to top
  };

  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p><strong>✍️ {blog.author}</strong></p>
      <p>{blog.content}</p>
      <button onClick={handleEdit}>✏️ Edit</button>
      <button onClick={handleDelete}>🗑️ Delete</button>
    </div>
  );
}

export default BlogCard;
