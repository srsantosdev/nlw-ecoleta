import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Header = styled.header`
  margin: 48px 0 0;
`;

export const Logo = styled.img``;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxInfo = styled.div`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitlePage = styled.h1`
  font-size: 48px;
  font-family: "Ubuntu";
  color: #322153;
`;

export const Description = styled.p`
  font-family: Roboto;
  font-size: 16px;
  margin-top: 16px;
  line-height: 38px;
`;

export const ButtonGroup = styled.div``;

export const IconButton = styled.span``;

export const Button = styled.button``;

export const ContainerIllustration = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Illustration = styled.img`
  width: 800px;
  height: 600px;
`;
