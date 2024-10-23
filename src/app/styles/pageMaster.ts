import styled from "styled-components";

import rings from "../../../public/assets/aneis.jpg";
import { AiOutlineLogin } from "react-icons/ai";

export const Section = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #e0e0e0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1200px;
  padding: 0 10px;
  width: 100%;
`;

export const Content = styled.section`
  align-items: flex-start;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.08);
  display: flex;
  height: 800px;
  transition: all 0.3s;
`;

export const Left = styled.div`
  background: url(${rings.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 50%;
  max-width: 780px;
`;

export const Right = styled.div`
  display: flex;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding: 80px;
`;

export const ContainerForm = styled.div`
  position: relative;
  height: 100%;
  width: 420px;
`;

export const HeadContainer = styled.div`
  margin: 16px 0 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  content: "";
  position: relative;
  color: #4b4b4b;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 49px;
  letter-spacing: -0.05rem;
  margin: 16px 0;
`;

export const LineHead = styled.div`
  content: "";
  height: 4px;
  width: 100px;
  border-radius: 2px;
  background-color: #6489fa;
  text-align: center;
`;

export const HeadText = styled.p`
  color: #716b84;
  font-size: 0.75rem;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ $inputColor?: string }>`
  border: 2px solid rgba(0, 0, 0, 0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  border-radius: 2px;
  padding: 0.5rem 1rem;
  font-size: 14px;
  margin-bottom: 22px;
  transition: 0.3s;
  border: 1px solid #b6b8b6;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    border: 1px solid #6489fa;
    border-radius: 5px;
    background-color: #fff;
  }
`;

export const ForgotPass = styled.a`
  color: #999;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-decoration: underline;
  align-self: flex-end;
  padding: 14px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #6489fa;
  color: white;
  border: none;
  padding: 20px 0;
  margin: 10px 0 14px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;

  &:hover {
    color: white;
    background-color: #6469fa;
    transition: all 0.3s ease-in-out;
  }
`;

export const SignContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-sizing: border-box;
  flex-flow: column;
  justify-content: center;
  padding: 24px;
  text-align: center;
  transition: all 0.2s ease-in-out;
`;

export const SignupText = styled.p`
  color: #4b4b4b;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 19.5px;
  margin-bottom: 6px;
  text-decoration: none;
`;

export const SignUp = styled.a`
  color: #6489fa;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  -webkit-text-decoration-line: underline;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Door = styled(AiOutlineLogin)`
  color: purple;
  transform: scale(3);
  margin: 5%;
  background-color: gray;
`;
