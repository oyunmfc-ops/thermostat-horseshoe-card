import { LitElement, html, css, svg } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("thermostat-horseshoe-card")
export class ThermostatHorseshoeCard extends LitElement {

  static styles = css`

    :host{
      display:block;
    }

    ha-card{

      background:rgba(240,240,240,.55);

      backdrop-filter:blur(18px);

      border-radius:36px;

      overflow:hidden;

    }

    svg{

      width:100%;

      height:420px;

    }

    .temp{

      font-size:54px;

      font-weight:700;

      fill:#303030;

    }

  `;

  render(){

    return html`

    <ha-card>

      ${this.renderGauge()}

    </ha-card>

    `;

  }

  renderGauge(){

      const cx=250;

      const cy=250;

      const r=170;

      const start=135;

      const end=405;

      const d=this.arc(cx,cy,r,start,end);

      return svg`

      <svg viewBox="0 0 500 500">

        <path

          d=${d}

          stroke="#d0d0d0"

          stroke-width="20"

          fill="none"

          stroke-linecap="round"

        />

        <text

          class="temp"

          x="250"

          y="250"

          text-anchor="middle"

        >

        22.6°

        </text>

      </svg>

      `;

  }

  arc(cx:number,cy:number,r:number,start:number,end:number){

      const s=this.point(cx,cy,r,end);

      const e=this.point(cx,cy,r,start);

      const large=end-start<=180?0:1;

      return `

      M ${s.x} ${s.y}

      A ${r} ${r} 0 ${large} 0 ${e.x} ${e.y}

      `;

  }

  point(cx:number,cy:number,r:number,a:number){

      const rad=(a-90)*Math.PI/180;

      return{

        x:cx+r*Math.cos(rad),

        y:cy+r*Math.sin(rad)

      }

  }

}
