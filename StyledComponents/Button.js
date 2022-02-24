import styled from "styled-components";

export const Button = styled.button`
     font-weight: 600;
     border-radius: 5px;
     font-size: clamp(20px, calc(1vh + 1vw), calc(1vh + 1vw));
     padding: 10px;
     border: 4px solid;
     cursor: pointer;
     transition: ease-out 500ms;
     position: relative;
     color: var(--white);
     background-color: var(--blue);
     border-radius: 10px;
     z-index: 1;
     &:before{
          content: "";
          position: absolute;
          background-color: var(--white);
          border-radius: inherit;
          width: 0;
          height: 100%;
          left: 0;
          bottom: 0;
          z-index: -1;
          transition: 0.3s ease;
        }
        &:hover{
          color: var(--blue);
             &:before{
                  width: 100%
             }
        }
`