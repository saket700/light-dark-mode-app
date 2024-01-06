import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();



  const getSystemThemeIcon = () => {
    const systemThemeIcon = window.matchMedia("(prefers-color-scheme: dark)")
      .matches ? (
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
    );
    return systemThemeIcon;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {theme === "light" ? (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          ) : theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all" />
          ) : (
            getSystemThemeIcon()
          )}
          <span className="sr-only">{theme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuGroup>
        <DropdownMenuContent align="center" className="w-56">
          

          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuGroup>
    </DropdownMenu>
  );
};
