import { LitElement, html, css } from "lit";

export class ThermostatHorseshoeCard extends LitElement {

  static styles = css`
    :host{
      display:block;
    }

    .card{
      height:420px;
      border-radius:36px;
      background:rgba(240,240,240,.55);
      backdrop-filter:blur(18px);
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:28px;
      color:#303030;
    }
  `;

  render(){
    return html`
      <div class="card">
        Thermostat Horseshoe
      </div>
    `;
  }
}

customElements.define(
  "thermostat-horseshoe-card",
  ThermostatHorseshoeCard
);
