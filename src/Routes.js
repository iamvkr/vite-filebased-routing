import { lazy } from "react";

const PRESERVED = import.meta.glob('./pages/(_app|404).jsx', { eager: true })

const ROUTES = import.meta.glob('./pages/**/[a-z[]*.jsx');

export const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
    const key = file.replace(/\/pages\/|\.jsx$/g, '')
    return { ...preserved, [key]: PRESERVED[file].default }
}, {})

export const routes = Object.keys(ROUTES).map((route) => {
    const path = route
        .replace(/\/pages|index|\.jsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1')
        .substring(1);
    const component = lazy(ROUTES[route]);
    return { path, component }
});