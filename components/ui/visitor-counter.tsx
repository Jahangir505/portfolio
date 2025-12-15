"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Track visitor on mount
    const trackVisitor = async () => {
      try {
        // Increment visitor count
        const response = await fetch("/api/visitors", {
          method: "POST",
        });
        
        if (response.ok) {
          const data = await response.json();
          setCount(data.count);
        }
      } catch (error) {
        console.error("Error tracking visitor:", error);
        // Fallback: just get the count without incrementing
        try {
          const response = await fetch("/api/visitors");
          if (response.ok) {
            const data = await response.json();
            setCount(data.count);
          }
        } catch (fallbackError) {
          console.error("Error fetching visitor count:", fallbackError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    trackVisitor();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Eye className="w-4 h-4" />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Eye className="w-4 h-4" />
      <span>
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-semibold text-foreground"
        >
          {count.toLocaleString()}
        </motion.span>
        {" "}visitor{count !== 1 ? "s" : ""}
      </span>
    </motion.div>
  );
}
