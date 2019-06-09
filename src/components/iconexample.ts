import { css, customElement, html, LitElement, unsafeCSS } from 'lit-element'

const componentCSS = require('./iconexample.component.scss')

@customElement('icon-example')
export class TableComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`

  render() {
    return html`
    <div>
      <pre>content: "\f141";</pre> in <pre>./iconexample.component.scss</pre> ist folgendes Icon:
      <span class="icon-should-be-here"></span>
    </div>`
  }
}
