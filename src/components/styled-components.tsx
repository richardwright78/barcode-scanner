import styled from "styled-components";

const CenterDiv = styled.div<{ background?: string; zIndex?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: -webkit-fill-available;
  width: 100%;
  margin-bottom: 3rem;
  margin-top: 3.5rem;
  ${({ background }) => background && `background: ${background};`}
  z-index: ${({ zIndex }) => zIndex};
  position: fixed;
`;

export { CenterDiv };
