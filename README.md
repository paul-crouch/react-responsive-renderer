# react-responsive-renderer

A React component that renders its children based on media query matches.

## Installation

```
npm i react-responsive-renderer
```

or

```
yarn add react-responsive-renderer
```

## Implementation

Uses the `Window.matchmedia` api that takes a media query and returns a `MediaQueryList` object representing the parsed result. [read more](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

This module is written in Typescript.

## Usage

Wrap your React component(s) in the ReactResponsiveRenderer and supply a valid media query via the `query` prop.

The child component(s) will only render when the media query is satisfied. The ResponsiveRenderer will react to changes in viewport dimensions.

```javascript
    import { ResponsiveRenderer } from "react-responsive-renderer";

    <ResponsiveRenderer query="only screen and (max-width: 480px)">
        <PhoneOnlyComponent />
    </ResponsiveRenderer>

    <ResponsiveRenderer query="only screen and (min-width: 480px)">
        <TabletComponent />
    </ResponsiveRenderer>
```
