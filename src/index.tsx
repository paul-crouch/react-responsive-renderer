import type { ReactNode } from "react";
import { useCallback } from "react";
import { useState, useEffect, useRef, Fragment } from "react";

interface ReactResponsiveRendererProps {
  query: string;
  children: ReactNode;
}

export const ResponsiveRenderer = ({
  query,
  children,
}: ReactResponsiveRendererProps) => {
  const [canRender, setCanRender] = useState(false);
  const queryList = useRef<MediaQueryList | null>(null);

  let updateState = useCallback(() => {
    if (queryList.current && queryList.current.matches !== canRender) {
      setCanRender(queryList.current.matches);
    }
  }, [canRender]);

  useEffect(() => {
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
    updateState();
    queryList.current.addEventListener("change", updateState);

    return tearDown;
  }, [query, updateState]);

  return canRender ? <Fragment>{children}</Fragment> : null;
};
