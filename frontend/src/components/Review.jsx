import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { Star } from "lucide-react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch reviews
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Submit review
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !message || rating === 0) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("reviews").insert([
      { username, rating, message },
    ]);

    if (!error) {
      setUsername("");
      setMessage("");
      setRating(0);
      fetchReviews();
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-gray-600">
            Share your experience with Gaurav Tours & Travels
          </p>
        </motion.div>

        {/* Review Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded-xl px-4 py-2"
            />

            {/* Star Rating */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className={`w-6 h-6 cursor-pointer transition ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <textarea
              placeholder="Write your review..."
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded-xl px-4 py-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Submit Review"}
            </button>

          </form>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <h4 className="font-semibold text-lg mb-2">
                {review.username}
              </h4>

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm">
                "{review.message}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
