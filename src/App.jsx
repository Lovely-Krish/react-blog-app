import React, { useState, useEffect } from "react";
import AddBlogForm from "./components/AddBlogForm";
import BlogList from "./components/BlogList";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem("myBlogs");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    localStorage.setItem("myBlogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="container">
      <h1>📝 My Blog App</h1>
      <AddBlogForm
        blogs={blogs}
        setBlogs={setBlogs}
        editingBlog={editingBlog}
        setEditingBlog={setEditingBlog}
      />
      <BlogList
        blogs={blogs}
        setBlogs={setBlogs}
        setEditingBlog={setEditingBlog}
      />
    </div>
  );
}

export default App;
