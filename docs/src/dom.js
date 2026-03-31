export const $ = (id) => { return document.getElementById(id); };
export const listen = (node, event, func) => { node.addEventListener(event, func); };
export const newElem = (tag) => { return document.createElement(tag); };

