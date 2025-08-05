import React, { useState, useEffect } from "react";

function AddBlogForm({ blogs, setBlogs, editingBlog, setEditingBlog }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setAuthor(editingBlog.author);
      setContent(editingBlog.content);
    }
  }, [editingBlog]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingBlog) {
      const updatedBlogs = blogs.map((blog) =>
        blog.id === editingBlog.id
          ? { ...blog, title, author, content }
          : blog
      );
      setBlogs(updatedBlogs);
      setEditingBlog(null);
    } else {
      const newBlog = {
        id: Date.now(),
        title,
        author,
        content,
      };
      setBlogs([...blogs, newBlog]);
    }

    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editingBlog ? "Update" : "Add"} Blog</button>
    </form>
  );
}

export default AddBlogForm;
