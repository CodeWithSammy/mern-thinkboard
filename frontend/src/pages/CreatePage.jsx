import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import toast from "react-hot-toast";
import api from "../lib/axios"; // Import your axios instance


const CreatePage = () => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate input;
    if(!title || !content) {
      toast.error("All fields are required.");
      
      return;
    }


    try {
        await api.post("/notes", {
          title,
          content,
        });
        toast.success("Note created successfully!");
        setTitle("");
        setContent(""); 
    } catch (error) {
        console.error("Error creating note:", error);
        toast.error("Failed to create note. Please try again.");
    }
  };

  return (
    <><Navbar/>
    <div className="min-h-screen mx-auto p-4">
        <Link to="/" className="btn btn-ghost btn-sm mb-4">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
        </Link>
      <h1 className="text-2xl font-bold mb-6 text-center">Create a New Note</h1>

      <form onSubmit={handleSubmit} className="card bg-base-100 shadow-lg p-6 space-y-4">
        
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter note title..."
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
          />
        </div>

        {/* Content */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Content</span>
          </label>
          <textarea
            placeholder="Write your note..."
            className="textarea textarea-bordered h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            
          ></textarea>
        </div>

        {/* Submit Button */}
<div className="form-control mt-4">
  <button
    type="submit"
    className="btn btn-primary"
  >
    Create Note
  </button>
</div>

      </form>
    </div>
    </>
  );
};

export default CreatePage;
