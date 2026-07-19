import { LitElement, html, css, svg } from "lit";
import { customElement } from "lit/decorators.js";

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

    const path = this.describeArc(
      250,
      250,
      170,
      225,
      495
    );

    const activePath = this.describeArc(
    250,
    250,
    170,
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

  private polar(
    cx:number,
    cy:number,
    r:number,
    angle:number
  ){

    const rad=(angle-90)*Math.PI/180;

    return{

      x:cx+r*Math.cos(rad),

      y:cy+r*Math.sin(rad)

    };

  }

  private describeArc(
    cx:number,
    cy:number,
    r:number,
    start:number,
    end:number
  ){

    const startPoint=this.polar(cx,cy,r,end);

    const endPoint=this.polar(cx,cy,r,start);

    const largeArc=(end-start)<=180?0:1;

    return `
      M ${startPoint.x} ${startPoint.y}
      A ${r} ${r} 0 ${largeArc} 0 ${endPoint.x} ${endPoint.y}
    `;

  }

}
