# react-responsive-renderer

A React component that renders its children based on media query matches.

## Implementation

Uses the `Window.matchmedia` api that takes a media query and returns a `MediaQueryList` object representing the parsed result. [read more](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)

## Usage

Wrap you React component(s) in the ReactResponsiveRenderer and supply a valid media query via the `query` prop.

```javascript
    import { ResponsiveRenderer } from "react-responsive-renderer";
    ...
    <ResponsiveRenderer query="only screen and (max-width: 480px)">
        <PhoneOnlyComponent />
    </ResponsiveRenderer>

    <ResponsiveRenderer query="only screen and (min-width: 480px)">
        <TabletComponent />
    </ResponsiveRenderer>
```
