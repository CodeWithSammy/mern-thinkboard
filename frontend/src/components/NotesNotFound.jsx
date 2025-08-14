import React from "react";
import { useNavigate } from "react-router";

const NotesNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-base-content/40 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6M9 8h6m4 12H5a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
      </svg>

      <h2 className="text-2xl font-bold mb-2">No Notes Found</h2>
      <p className="text-base-content/70 mb-6">
        It appears thou hast not yet penned a single thought.  
        Let us set quill to parchment!
      </p>

      <button
        className="btn btn-primary"
        onClick={() => navigate("/create")}
      >
        Create Your First Note
      </button>
    </div>
  );
};

export default NotesNotFound;
