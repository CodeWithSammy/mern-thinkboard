import React from "react";
import { Link } from "react-router";
import { SquarePen, Trash } from 'lucide-react';
import api from "../lib/axios";
import toast from "react-hot-toast";


const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this note?")) {
            try {
                await api.delete(`/notes/${id}`);
                toast.success("Note deleted successfully!");
                // Optionally, you can also trigger a refresh of the notes list here   
                setNotes(prevNotes => prevNotes.filter(n => n._id !== id));     // Update the notes state to remove the deleted note 
            }
             catch (error) {
                console.error("Error deleting note:", error);
            }
        }
    }
    return (
        <Link to={`/notes/${note._id}`} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-base-200 w-full max-w-md mx-auto">
            <div className="card-body p-5">
                {/* Title */}
                <h2 className="card-title text-lg font-bold text-primary line-clamp-1">
                    {note.title}
                </h2>

                {/* Content Preview */}
                <p className="text-sm text-base-content/80 line-clamp-3">
                    {note.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                    {/* Date */}
                    <span className="text-xs text-base-content/60">
                        {new Date(note.createdAt).toLocaleDateString()}
                    </span>

                    {/* Actions */}
                    <div className="flex space-x-3">
                        <button
                            
                            className="btn btn-sm btn-ghost btn-circle hover:bg-primary/10"
                        >
                            <SquarePen className="h-5 w-5 text-primary" />
                        </button>
                        <button
                            onClick={(e) => handleDelete(e, note._id)}
                            className="btn btn-sm btn-ghost btn-circle hover:bg-error/10"
                        >
                            <Trash className="h-5 w-5 text-error" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NoteCard;
