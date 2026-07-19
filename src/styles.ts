import { css } from "lit";

export const cardStyles = css`

:host{
display:block;
}

.card{

background:rgba(240,240,240,.55);

backdrop-filter:blur(18px);

-webkit-backdrop-filter:blur(18px);

border-radius:36px;

padding:20px;

overflow:hidden;

}

svg{

width:100%;

height:100%;

display:block;

}

`;
