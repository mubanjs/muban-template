/* eslint-disable @typescript-eslint/no-explicit-any */
import htm from 'htm';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import vhtml from 'vhtml';

/**
 * Function to turn falsy boolean prop values to the string 'false'
 */
function cleanFalsyBooleans(props: Record<string, any>): Record<string, any> {
  const stringifiedProps = { ...props };

  Object.entries(stringifiedProps).forEach(([key, value]) => {
    if(value === false) {
      stringifiedProps[key] = 'false';
    }
  })

  return stringifiedProps;
}

/**
 * Proxy function between html and vhtml to modify the DOM structure
 */
function h(type: any, props: Record<string, any>, ...children: Array<any>) {
  // If more prop modifier functions like cleanFalsyBooleans are added we could pipe them here
  const mutatedProps = cleanFalsyBooleans(props);
  return vhtml(type, mutatedProps, children);
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
