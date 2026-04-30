"use client";
import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch onChange={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-7.75 w-12.75 bg-white ${isSelected ?
                            "bg-black shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
                    >
                        <Switch.Thumb
                            className={`size-6.75 bg-white shadow-sm ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                        >
                            <Switch.Icon>
                                {isSelected ? (
                                    <Moon className="size-4 text-black" />
                                ) : (
                                    <Sun className="size-4 text-black" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
}