import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFire } from "react-icons/fa";

const PAGE_SIZE = 4;

const books = [
  {
    title: "Bhagavad Gita",
    author: "Vyasa",
    description:
      "A timeless spiritual dialogue on duty, devotion, and inner peace.",
    img: "/books/gita.png",
  },
  {
    title: "Heartfulness Way",
    author: "Kamlesh D. Patel (Daaji)",
    description:
      "A heart-based approach to meditation and conscious living.",
    img: "/books/heart.png",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "A practical guide to building good habits through small consistent actions.",
    img: "/books/Atomic.png",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description:
      "A powerful story of friendship, guilt, and redemption.",
    img: "/books/Kite.png",
  },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    description:
      "A moving tale of resilience and silent strength of women.",
    img: "/books/suns.png",
  },
  {
    title: "Malgudi Days",
    author: "R. K. Narayan",
    description:
      "Simple stories reflecting everyday Indian life with warmth and humor.",
    img: "/books/Malgudi.png",
  },
];

export default function BookJourney() {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(books.length / PAGE_SIZE);

  const visibleBooks = books.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section 
  id="book-journey"
  className="py-24 px-8 overflow-hidden bg-black text-white"
>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-purple-400 text-center"
      >
        My Reading Journey 📚
      </motion.h2>

      {/* BOOKS VIEW */}
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleBooks.map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTROLS */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-6 py-3 rounded-full border border-purple-400 text-purple-400 disabled:opacity-40"
        >
          ◀
        </button>

        <button
          onClick={() =>
            setPage((p) => Math.min(p + 1, totalPages - 1))
          }
          disabled={page === totalPages - 1}
          className="px-6 py-3 rounded-full border border-purple-400 text-purple-400 disabled:opacity-40"
        >
          ▶
        </button>
      </div>

      {/* 🌟 QUOTE — SAME EFFECT AS CONSISTENCY */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="mt-14 flex justify-center"
>
  <div
    className="
      px-6 py-3 rounded-full
      bg-purple-900/20 backdrop-blur
      border border-purple-500/30
      text-purple-200 text-sm md:text-base
      flex items-center gap-2
    "
  >
    <FaFire className="text-purple-400" />
    <span>
      Books taught me <strong>discipline, empathy, patience</strong> — lessons I live by every day.
    </span>
  </div>
</motion.div>

    </section>
  );
}

const BookCard = ({ book }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="
      relative group
      bg-purple-900/20
      border border-purple-500/20
      rounded-xl
      p-6
      h-72
      cursor-pointer
      overflow-hidden
    "
  >
    {/* TEXT */}
    <div className="group-hover:opacity-0 transition duration-300">
      <h3 className="text-xl font-semibold text-purple-300">
        {book.title}
      </h3>

      <p className="text-sm text-purple-400 mt-1">
        by {book.author}
      </p>

      <p className="text-gray-400 mt-3 text-sm">
        {book.description}
      </p>
    </div>

    {/* IMAGE ON HOVER */}
    <img
      src={book.img}
      alt={book.title}
      className="
        absolute inset-0
        w-full h-full object-cover
        opacity-0 group-hover:opacity-100
        transition duration-300
      "
    />
  </motion.div>
);
