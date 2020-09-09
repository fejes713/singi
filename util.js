export function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

export const isEvent = (key) => key.startsWith("on-");
export const isProperty = (key) => key !== "children" && !isEvent(key);
export const isNew = (prev, next) => (key) => prev[key] !== next[key];
export const isGone = (prev, next) => (key) => !(key in next);
