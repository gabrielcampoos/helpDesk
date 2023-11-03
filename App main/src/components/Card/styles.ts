import styled from "styled-components";

const CardStyled = styled.div`
  height: min-content;
  width: 40%;
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  border-radius: ${(props) => props.theme.borderRadius.md};
  margin-bottom: 20px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-itens: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 80%;
  }

  /* &:hover {
	} */

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
