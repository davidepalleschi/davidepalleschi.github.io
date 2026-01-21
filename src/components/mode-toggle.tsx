"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <div className="flex items-center gap-1 border rounded-full p-1 bg-background/50 backdrop-blur-sm">
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground"><Sun className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground"><Monitor className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full text-muted-foreground"><Moon className="h-4 w-4" /></Button>
        </div>
    )
  }

  return (
    <div className="flex items-center gap-1 border rounded-full p-1 bg-background/50 backdrop-blur-sm">
      <Button
        variant="ghost"
        size="icon"
        className={`h-7 w-7 rounded-full ${theme === "light" ? "bg-secondary text-primary" : "text-muted-foreground"}`}
        onClick={() => setTheme("light")}
        title="Light Mode"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Light Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-7 w-7 rounded-full ${theme === "system" ? "bg-secondary text-primary" : "text-muted-foreground"}`}
        onClick={() => setTheme("system")}
        title="System Mode"
      >
        <Monitor className="h-4 w-4" />
        <span className="sr-only">System Mode</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={`h-7 w-7 rounded-full ${theme === "dark" ? "bg-secondary text-primary" : "text-muted-foreground"}`}
        onClick={() => setTheme("dark")}
        title="Dark Mode"
      >
        <Moon className="h-4 w-4" />
        <span className="sr-only">Dark Mode</span>
      </Button>
    </div>
  );
}
