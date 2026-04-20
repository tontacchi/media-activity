export const $ = (id) => { return document.getElementById(id); };
export const listen = (node, event, func) => { node.addEventListener(event, func); };
export const newElem = (tag) => { return document.createElement(tag); };


// Selection
export const $$ = (selector, parent = document) => { return [...parent.querySelectorAll(selector)]; };

// Append & Mount
export function append(parent, ...children) {
	children.forEach((child) => { parent.appendChild(child); });

	return parent;
};
export function mount(parent, child) {
	parent.innerHTML = "";
	parent.appendChild(child);

	return parent
}


// Class & Style utiltiies
export function addClass(element, ...classes) {
	element.classList.add(...classes);
	return element;
}
export function removeClass(element, ...classes) {
	element.classList.remove(...classes);
	return element;
}
export function toggleClass(element, className, force) {
	element.classList.toggle(className, force);
	return element;
}

export function css(element, styles) { Object.assign(element.style, styles); };


// Content helpers
export function text(element, str) {
	element.textContent = str;
	return element;
}
export function html(element, str) {
	element.innerHTML = str;
	return element;
}


// Event Handlers
export function on(element, event, handler) {
	element.addEventListener(event, handler);
	return element;
};
export function off(element, event, handler) {
	element.removeEventListener(event, handler);
	return element;
}
export function once(element, event, handler) {
	const func = (ev) => {
		handler(ev);
		off(element, event, func);
	};

	on(element, event, func);
}


// Data & Attributes
export function attr(element, key, value) {
	if (value === undefined) { return element.getAttribute(key); }
	
	element.setAttribute(key, value);
	return element;
}
export function data(element, key, value) {
	if (value === undefined) { return element.dataset[key]; }
	
	element.dataset[key] = value;
	return element;
}


// Tiny State helpers
export function show(element) { element.style.display = ""; }
export function hide(element) { element.style.display = "none"; }
export function clear(element) { element.innerHTML = ""; }
