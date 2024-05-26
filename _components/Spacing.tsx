import { cn } from "@/lib/utils";

export type SpacingProps = {
    size: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Spacing = ({ size = "md"}: SpacingProps) => { 
    return (
        <div className={cn({
            "h-2 lg:h-4": size === "xs",
            "h-8 lg:h-16": size === "sm",
            "h-12 lg:h-20": size === "md",
            "h-16 lg:h-24": size === "lg",
        })}>
        </div>
    )
}