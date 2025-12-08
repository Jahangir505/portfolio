"use client";

import { useTheme } from "next-themes";
import { GitHubCalendar } from "react-github-calendar";

export function GithubActivity() {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-4xl mx-auto p-6 glass rounded-xl border border-white/10">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-bold">
          <span className="gradient-text">GitHub Activity</span>
        </h3>
        <span className="text-muted-foreground text-sm">(jahangir505)</span>
      </div>
      
      <div className="flex justify-center overflow-x-auto pb-2">
        <GitHubCalendar
          username="jahangir505"
          colorScheme={theme === "dark" ? "dark" : "light"}
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          style={{
            color: theme === "dark" ? "#e5e7eb" : "#1f2937",
          }}
        />
      </div>
    </div>
  );
}
