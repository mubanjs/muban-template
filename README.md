# muban-template

Please check the [full documentation](https://mubanjs.github.io/muban/guide/template.html).

This library makes use of:
* [htm](https://github.com/developit/htm) that provides a jsx-like syntax as tagged template 
  string and convert it to JSX/Hyperscript to render it with `vhtml`.
* [vhtml](https://github.com/developit/vhtml) that renders parsed JSX/Hypertext to a string.
* [eslint-plugin-lit](https://www.npmjs.com/package/eslint-plugin-lit) and 
  [eslint-plugin-lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) for linting 
  support.

The main purpose of this library is to use together with `@muban/muban` while developing
components before it's integrated on the server to be previewed in storybook, or when rendering
static pages.

## Getting started

### Installing

Add `@muban/template` to your project:
```sh
yarn add @muban/template
```

### Simple template



Create our template:
```ts
import { html } from "@muban/muban-template";

type MyComponentProps = {
  welcomeText: string;
};

function myComponentTemplate({ welcomeText }: MyComponentProps, ref?: string) {
  return html`
    <div data-component="my-component" data-ref=${ref}>
      ${welcomeText}
    </div>
  `;
}
```
