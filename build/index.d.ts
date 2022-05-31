import type { ReactNode } from "react";
interface ReactResponsiveRendererProps {
    query: string;
    children: ReactNode;
}
export declare const ReactResponsiveRenderer: ({ query, children, }: ReactResponsiveRendererProps) => JSX.Element | null;
export {};
