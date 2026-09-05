export function blank(argument) {
  return Object.hasOwn(argument, "blank");
}

export function definition(argument) {
  return Object.hasOwn(argument, "definition");
}

export function reference(argument) {
  return Object.hasOwn(argument, "reference");
}

export function use(argument) {
  return Object.hasOwn(argument, "use");
}

export function component(argument) {
  return Object.hasOwn(argument, "component");
}

export function link(argument) {
  return (
    Object.hasOwn(argument, "link") &&
    (argument.link.indexOf("https://") === 0 || argument.link.indexOf("http://") === 0)
  );
}

export function child(argument) {
  return Object.hasOwn(argument, "form");
}

export function form(argument) {
  return Object.hasOwn(argument, "content");
}

export function text(argument) {
  return typeof argument === "string";
}
