import { html } from './mtl';

describe('createClassListPropertySource', () => {
  it('should render a basic block of html', () => {
    expect(html`<div data-test="${'bar'}">foo</div>`).toEqual(`<div data-test="bar">foo</div>`);
  });

  it('should throw a descriptive parse error', () => {
    expect(() => html`<div data-test="${'bar'}"<span>foo</span></div>`).toThrowError(
      'Error parsing muban template. Most likely, your html template is malformed',
    );
  });
});
