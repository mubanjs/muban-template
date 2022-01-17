import { html } from './mtl';
import { unsafeHTML } from "./utils/unsafeHtml";

describe('html', () => {
  it('should render a basic block of html', () => {
    expect(html`<div data-test="${'bar'}">foo</div>`).toEqual(`<div data-test="bar">foo</div>`);
  });

  it('should throw a descriptive parse error', () => {
    expect(() => html`<div data-test="${'bar'}"<span>foo</span></div>`).toThrowError(
      'Error parsing muban template. Most likely, your html template is malformed',
    );
  });

  describe('when dealing with special characters', () => {
    it('should escape special characters (except "<" )', () => {
      expect(html`<span>&>"'</span>`).toEqual('<span>&amp;&gt;&quot;&apos;</span>')
    });
    it('should escape special characters (except "<" )', () => {
      const content = `&>"'`;
      expect(html`<span>${content}</span>`).toEqual('<span>&amp;&gt;&quot;&apos;</span>')
    });
    it('should double escape html entities', () => {
      expect(html`<span>&amp;&lt;&gt;&quot;&apos;</span>`).toEqual('<span>&amp;amp;&amp;lt;&amp;gt;&amp;quot;&amp;apos;</span>')
    });
    it('should render special characters correctly using unsafeHTML (except "<") ', () => {
      expect(html`<span>${unsafeHTML(`&>"'`)}</span>`).toEqual('<span>&amp;&gt;&quot;&apos;</span>')
    });
    it('should render html entities correctly using dangerouslySetInnerHTML', () => {
      expect(html`<span dangerouslySetInnerHTML=${{ __html: '&amp;&lt;&gt;&quot;&apos;' }}></span>`).toEqual('<span>&amp;&lt;&gt;&quot;&apos;</span>')
    });
  })
});
