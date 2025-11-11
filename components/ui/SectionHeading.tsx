import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function SectionHeading({ children, className = "" }: Props) {
    return (
        <h3 className={`text-xl font-semibold tracking-tight text-white ${className}`}>
            {children}
        </h3>
    );
}
