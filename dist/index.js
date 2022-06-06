"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsiveRenderer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("react");
var ResponsiveRenderer = function (_a) {
    var query = _a.query, children = _a.children;
    var _b = (0, react_2.useState)(false), canRender = _b[0], setCanRender = _b[1];
    var queryList = (0, react_2.useRef)(null);
    var updateState = (0, react_1.useCallback)(function () {
        if (queryList.current && queryList.current.matches !== canRender) {
            setCanRender(queryList.current.matches);
        }
    }, [canRender]);
    (0, react_2.useEffect)(function () {
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
    return canRender ? (0, jsx_runtime_1.jsx)(react_2.Fragment, { children: children }) : null;
};
exports.ResponsiveRenderer = ResponsiveRenderer;
