import { html } from '../mtl';
import type { ComponentTemplateResult } from '../mtl.types';

/**
 * Helper function to render unsafe HTML in the DOM
 * @param data
 */
export function unsafeHTML(data: string): ComponentTemplateResult {
  // fake calling the tagged template string function as if it was coming from
  // an actual usage of a template string to allow parsing HTML tags into
  // a "parsed" array of children without losing HTML formatting
  const item = [data] as Array<string> & { raw: Array<string> };
  item['raw'] = [data];

  return html(item as TemplateStringsArray);
}
