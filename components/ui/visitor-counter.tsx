"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const SESSION_KEY = "visitor-counted";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Count each browser session once; later page loads only read the total.
    const loadCount = async () => {
      let alreadyCounted = false;
      try {
        alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";
      } catch {
        // Storage blocked (private mode etc.) - fall through and count.
      }

      try {
        const response = await fetch("/api/visitors", {
          method: alreadyCounted ? "GET" : "POST",
        });
        if (!response.ok) throw new Error(`Status ${response.status}`);

        const data = await response.json();
        setCount(data.count);
        if (!alreadyCounted) {
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {}
        }
      } catch (error) {
        console.error("Error loading visitor count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCount();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Eye className="w-4 h-4" aria-hidden="true" />
        <span>Loading...</span>
      </div>
    );
  }

  // Hide the counter rather than showing a misleading "0".
  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 text-sm text-muted-foreground"
    >
      <Eye className="w-4 h-4" aria-hidden="true" />
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
