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

// the template tag to render HTML strings in muban templats
export const html = htm.bind(h);
