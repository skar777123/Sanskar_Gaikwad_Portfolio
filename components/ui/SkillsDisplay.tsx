import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    image: string;
    progress: string;
    category: string; // Assuming there is a category property to distinguish skills
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center mt-10 space-y-2 sm:space-y-0 sm:space-x-2 flex-wrap">
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("")}
        >
          All
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("frontend")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          Frontend
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("backend")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          Backend
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("microservices")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          Microservices
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("database")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          Database
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("devops")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          DevOps
        </button>
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm sm:text-base hover:bg-slate-600 mb-2 sm:mb-0"
          onMouseOver={() => setSelectedCategory("ai/ml")}
          onMouseLeave={() => setSelectedCategory("")}
        >
          AI & ML
        </button>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
          className
        )}
      >
        {filteredItems.map((item, idx) => (
          <div
            key={item?.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex flex-row justify-between">
                <CardTitle>{item.title}</CardTitle>
                {item.image && (
                  <img
                    className="w-16 h-16 group-hover:scale-125 group-hover:z-60 relative transition duration-500 rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                )}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
