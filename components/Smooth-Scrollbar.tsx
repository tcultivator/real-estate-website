"use client";

import { useMenuStore } from "@/store/Menu-Store";
import { useEffect, useRef, useState } from "react";
import Scrollbar from "smooth-scrollbar";

export default function SmoothScrollbar({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const setMenuButtonDisplay = useMenuStore((state) => state.setMenuButtonDisplay)

    useEffect(() => {
        if (!scrollRef.current) return;

        // initialize smooth-scrollbar
        const scrollbar = Scrollbar.init(scrollRef.current, {
            damping: 0.07,
            thumbMinSize: 20,
        });

        let lastScrollY = 0;

        // listen to scroll events
        scrollbar.addListener(({ offset }) => {
            const currentScrollY = offset.y;

            if (currentScrollY > lastScrollY) {
                console.log('down')
                setMenuButtonDisplay(false)
            }
            else if (currentScrollY < lastScrollY) {
                console.log('up')
                setMenuButtonDisplay(true)
            };

            lastScrollY = currentScrollY;
        });

        return () => {
            scrollbar.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} className="h-screen w-full overflow-hidden">
            {children}
        </div>
    );
}
