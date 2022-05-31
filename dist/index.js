import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useState, useEffect, useRef, Fragment } from "react";
export var ResponsiveRenderer = function (_a) {
    var query = _a.query, children = _a.children;
    var _b = useState(false), canRender = _b[0], setCanRender = _b[1];
    var queryList = useRef(null);
    var updateState = useCallback(function () {
        var _a;
        if (((_a = queryList.current) === null || _a === void 0 ? void 0 : _a.matches) !== canRender) {
            setCanRender(queryList.current.matches);
        }
    }, [canRender]);
    useEffect(function () {
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
        updateState();
        queryList.current.addEventListener("change", updateState);
        return tearDown;
    }, [query, updateState]);
    return canRender ? _jsx(Fragment, { children: children }) : null;
};
