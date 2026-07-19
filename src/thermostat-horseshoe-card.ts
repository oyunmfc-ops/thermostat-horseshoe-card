import { LitElement, html, css, svg } from "lit";
import { customElement } from "lit/decorators.js";
import { CARD } from "./constants";
import {
  describeArc,
  temperatureToAngle
} from "./geometry";

@customElement("thermostat-horseshoe-card")
export class ThermostatHorseshoeCard extends LitElement {

  static styles = css`
    :host {
      display: block;
    }

    .wrapper {
      width: 100%;
      aspect-ratio: 1;
      max-height: 500px;
    }

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    .background {
      stroke: #d7d7d7;
      stroke-width: 16;
      fill: none;
      stroke-linecap: round;
    }

    .active {
    stroke: #ffd362;
    stroke-width: 16;
    fill: none;
    stroke-linecap: round;
    }

    .value {
      fill: #303030;
      font-size: 52px;
      font-weight: 700;
      font-family: Arial, Helvetica, sans-serif;
    }

    .label {
      fill: #303030;
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
    }

    .card {
      background: rgba(240,240,240,.55);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius: 36px;
      padding: 20px;
    }
  `;

  render() {
    
    const path = describeArc(
      CARD.CENTER_X,
      CARD.CENTER_Y,
      CARD.RADIUS,
      CARD.START_ANGLE,
      CARD.END_ANGLE
    );

    const activePath = describeArc(
      CENTER_X,
      CENTER_Y,
      RADIUS,
      255,
      345
    );

    return html`

      <div class="card">

        <div class="wrapper">

        ${svg`

        <svg viewBox="0 0 500 500">

          <path
            class="background"
            d="${path}"
          />

          <path
            class="active"
            d="${activePath}"
          />
        
          <text
            class="value"
            x="250"
            y="235"
            text-anchor="middle">

            22.6°

          </text>

          <text
            class="label"
            x="250"
            y="275"
            text-anchor="middle">

            Salon

          </text>

        </svg>

        `}

        </div>

      </div>

    `;
  }

}
