import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

// Utility function to combine class names (you can replace it with clsx or just use string templates)
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function Avatar({ className, children, ...props }) {
    return (
        <AvatarPrimitive.Root
            className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
            {...props}
        >
            {children}
        </AvatarPrimitive.Root>
    );
}

export function AvatarImage({ className, ...props }) {
    return (
        <AvatarPrimitive.Image
            className={cn("aspect-square h-full w-full", className)}
            {...props}
        />
    );
}

export function AvatarFallback({ className, ...props }) {
    return (
        <AvatarPrimitive.Fallback
            className={cn(
                "flex h-full w-full items-center justify-center rounded-full bg-muted",
                className
            )}
            {...props}
        />
    );
}
