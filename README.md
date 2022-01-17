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
import { html } from "@muban/template";

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

### Exports

* `html` – the tagged template string, the core of this library.
* `unsafeHTML` – to render any "HTML content" coming from an API (that you trust) – doesn't work 
  with html entities or the `<` content character.
* `jsonScriptTemplate` – a helper function that renders a JSON script tag for an object that can 
  be used instead of a lot of different data attributes, or to use objects as props.
* `ComponentTemplate` – a `type` for a Muban Template Function.
* `ComponentTemplateResult` – a `type` for the Template result (to be consumed by other code).
* `TemplateMap` – a helper type to extract the "props type" out of a template function as part of 
  a Record of templates, and formats them to be used in a name/props data structure.

## About special characters

By default, the template compiler will escape any special characters into html entities when 
rendered, so they display as such on the screen;

```js
html`<span>"</span>`;
```
is rendered as
```html
<span>&quot;</span>
```

**However**, this doesn't work for the `<` character, since it will mess up the template parser.

Besides that, it's common practise to user html entities in your content;

```js
html`<span>&quot;</span>`;
```
unfortunately this is double encoded now;
```html
<span>&amp;quot;</span>
```

To work around this, we can use the `dangerouslySetInnerHTML` escape hatch;

```js
html`<span dangerouslySetInnerHTML=${{ __html: '&quot;' }}></span>`;
```
which properly renders as
```html
<span>&quot;</span>
```

Use this to render any html content that you trust (e.g. coming from CMS with sanitized output).
