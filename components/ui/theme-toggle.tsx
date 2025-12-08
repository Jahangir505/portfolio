"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-lg glass opacity-50 cursor-not-allowed">
        <Sun className="h-5 w-5 text-muted-foreground" />
      </button>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg glass hover:bg-white/10 transition-colors relative group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={{ opacity: 0, rotate: -90, scale: 0 }}
          animate={{ 
            opacity: theme === "dark" ? 1 : 0, 
            rotate: theme === "dark" ? 0 : 90,
            scale: theme === "dark" ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5 text-[oklch(0.8_0.18_195)]" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, rotate: 90, scale: 0 }}
          animate={{ 
            opacity: theme === "light" ? 1 : 0, 
            rotate: theme === "light" ? 0 : -90,
            scale: theme === "light" ? 1 : 0 
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5 text-orange-500" />
        </motion.div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-lg bg-[oklch(0.8_0.18_195)] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
    </motion.button>
  );
}
