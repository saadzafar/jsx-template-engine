/**
 * Adds a child element to a parent element.
 *
 * @param {HTMLElement} parent - The parent DOM element to which the child element will be added.
 * @param {HTMLElement | string} child - The child element or a string representing the text content of the child.
 */
const add = (parent, child) => {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

/**
 * Appends child elements to a parent element, recursively if the child is an array.
 *
 * @param {HTMLElement} parent - The parent DOM element to which child elements will be appended.
 * @param {HTMLElement | HTMLElement[]} child - The child element or an array of child elements to append.
 */
const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
};

/**
 * Create and return a new DOM element based on the provided tag and properties.
 *
 * @param {string|function} tag - The tag name or a function to create the DOM element.
 * @param {Object} props - An object containing properties and attributes for the element.
 * @returns {HTMLElement} The created DOM element.
 */
export const jsx = (tag, props) => {
  const { children, ...rest } = props;
  if (typeof tag === "function") return tag(props, children);
  const element = document.createElement(tag);

  for (const p in rest) {
    if (p.startsWith("on") && p.toLowerCase() in window) {
      element.addEventListener(p.toLowerCase().substring(2), props[p]);
    }
  }

  appendChild(element, children);
  return element;
};

export const jsxs = jsx;
