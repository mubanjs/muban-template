/* eslint-disable @typescript-eslint/no-explicit-any */
import htm from 'htm';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vhtml from 'vhtml';

/**
 * Proxy function between html and vhtml to modify the DOM structure
 */
function h(type: any, props: Record<string, any>, ...children: Array<any>) {
  // TODO: add logic for props to mutate them based on possible functions

  return vhtml(type, props, children);
}

// the template tag to render HTML strings in muban templates
export const html = (strings: TemplateStringsArray, ...values: Array<any>): any => {
  try {
    return htm.bind(h)(strings, ...values);
  } catch (e) {
    // throw a custom error message, since the built-in html parse errors are not useful at all
    throw new Error(`Error parsing muban template. Most likely, your html template is malformed.

The template that gave the error is:
${strings.join('${}')}`);
  }
};
