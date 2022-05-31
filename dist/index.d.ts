import type { ReactNode } from "react";
interface ReactResponsiveRendererProps {
    query: string;
    children: ReactNode;
}
export declare const ResponsiveRenderer: ({ query, children, }: ReactResponsiveRendererProps) => JSX.Element | null;
export {};
