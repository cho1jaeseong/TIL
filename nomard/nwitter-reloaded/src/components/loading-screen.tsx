import styled from "styled-components"


const Wrapper = styled.div`
    /* height:100vh; */
    display:flex;
    justify-content:center;
    align-items:center;
`


const Loader  = styled.div`
    width: 25px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #1d9bf0;
    --_m: 
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: l3 1s infinite linear;
  @keyframes l3 {to{transform: rotate(1turn)}}
`



const Text = styled.span`font-size:24px;`


export default function LoadingScreen(){
    return (
        <Wrapper>
            <Loader/>
        </Wrapper>

    )
}