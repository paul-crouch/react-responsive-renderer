import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect, useRef, Fragment } from "react";
export var ResponsiveRenderer = function (_a) {
    var query = _a.query, children = _a.children;
    var _b = useState(false), canRender = _b[0], setCanRender = _b[1];
    var queryList = useRef(null);
    useEffect(function () {
        var updateState = function () {
            if (queryList.current.matches !== canRender) {
                setCanRender(queryList.current.matches);
            }
        };
        var tearDown = function () {
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
        queryList.current.addEventListener("change", updateState);
        return tearDown;
    }, [canRender, query]);
    return canRender ? _jsx(Fragment, { children: children }) : null;
};
