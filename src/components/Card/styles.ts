import styled from "styled-components";

const CardStyled = styled.div`
  height: min-content;
  width: 30%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: 20px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-itens: center;

  @media (max-width: 800px) {
    width: 80%;
  }

  /* &:hover {
	} */

  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  @media (max-width: 800px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 500px) {
    width: 80%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  @media (max-width: 390px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export default CardStyled;
