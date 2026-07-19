import { LitElement, html, css, svg } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("thermostat-horseshoe-card")
export class ThermostatHorseshoeCard extends LitElement {

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: rgba(240,240,240,.55);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-radius: 36px;
      overflow: hidden;
      padding: 20px;
    }

    svg {
      width: 100%;
      height: auto;
    }

    .title {
      font-size: 22px;
      fill: #303030;
      font-weight: 600;
    }

    .temp {
      font-size: 56px;
      fill: #303030;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <div class="card">
        ${this.renderGauge()}
      </div>
    `;
  }

  private renderGauge() {

    const cx = 250;
    const cy = 250;
    const radius = 170;

    const start = 135;
    const end = 405;

    const path = this.describeArc(cx, cy, radius, start, end);

    return svg`

    <svg viewBox="0 0 500 500">

      <path
        d="${path}"
        stroke="#d7d7d7"
        stroke-width="18"
        stroke-linecap="round"
        fill="none"/>

      <text
        x="250"
        y="215"
        class="temp"
        text-anchor="middle">

        22.5°

      </text>

      <text
        x="250"
        y="260"
        class="title"
        text-anchor="middle">

        Kombi

      </text>

    </svg>

    `;
  }

  private polar(cx:number,cy:number,r:number,a:number){

      const rad=(a-90)*Math.PI/180;

      return{

          x:cx+r*Math.cos(rad),

          y:cy+r*Math.sin(rad)

      };

  }

  private describeArc(cx:number,cy:number,r:number,start:number,end:number){

      const s=this.polar(cx,cy,r,end);

      const e=this.polar(cx,cy,r,start);

      const large=end-start<=180?0:1;

      return `M ${s.x} ${s.y}
              A ${r} ${r} 0 ${large} 0 ${e.x} ${e.y}`;

  }

}
