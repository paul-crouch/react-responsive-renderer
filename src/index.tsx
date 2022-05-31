import type { ReactNode } from "react";
import { useState, useEffect, useRef, Fragment } from "react";

interface ReactResponsiveRendererProps {
  query: string;
  children: ReactNode;
}

export const ReactResponsiveRenderer = ({
  query,
  children,
}: ReactResponsiveRendererProps) => {
  const [canRender, setCanRender] = useState(false);
  const queryList = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    let updateState = () => {
      if (queryList.current!.matches !== canRender) {
        setCanRender(queryList.current!.matches);
      }
    };

    let tearDown = () => {
      if (queryList.current) {
        queryList.current.removeEventListener("change", updateState);
        queryList.current = null;
      }
    };

    if (!query) {
      throw new Error("ReactResponsiveRenderer: prop `query` is a required.");
    }

    tearDown();
    queryList.current = global.matchMedia(query);
    queryList.current!.addEventListener("change", updateState);

    return tearDown;
  }, [canRender, query]);

  return canRender ? <Fragment>{children}</Fragment> : null;
};
