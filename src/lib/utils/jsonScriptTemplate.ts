/* eslint-disable @typescript-eslint/no-explicit-any */
import { html } from '../mtl';

/**
 * Helper function to render JSON script tags with a JS data structure
 * Useful to render properties for components that contain a bit more data
 * than is practical for using data-attributes
 *
 * TODO: add this as part of the future helper function to render component containers
 *
 * @param content
 */
export function jsonScriptTemplate(content: Array<any> | Record<string, any>): string {
  return html`<script
    type="application/json"
    dangerouslySetInnerHTML=${{
      // eslint-disable-next-line @typescript-eslint/naming-convention
      __html: JSON.stringify(content),
    }}
  ></script>`;
}
