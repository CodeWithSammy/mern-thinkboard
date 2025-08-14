import Navbar from '../components/Navbar'
import RateLimitCard from '../components/RateLimitCard'
import { useState, useEffect } from 'react';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [rateLimitData, setRateLimitData] = useState(null);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get('/notes');
                setNotes(res.data.notes || res.data); // Adjust depending on backend response

                if (res.data.rateLimit) {
                    setRateLimitData(res.data.rateLimit);
                }
                setIsRateLimited(false);

            } catch (error) {
                console.error("Error fetching notes:", error);

                if (error.response?.status === 429) {
                    setIsRateLimited(true);
                    if (error.response.data?.rateLimit) {
                        setRateLimitData(error.response.data.rateLimit);
                    }
                    toast.error("you have exceeded the api ratelimit.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []);

    return (
        <div className='min-h-screen'>
            <Navbar />

            {isRateLimited && rateLimitData && (
                <RateLimitCard
                    used={rateLimitData.used}
                    limit={rateLimitData.limit}
                    resetTime={rateLimitData.resetTime}
                />
            )}

            <div className="container mx-auto p-4">
                {loading ? (
                    <div className="text-center">
                        <p>Loading notes...</p>
                    </div>
                ) : isRateLimited ? null : notes.length === 0 ? (
                    <NotesNotFound />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {notes.map(note => (
                            <NoteCard key={note._id} note={note} setNotes={setNotes} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
