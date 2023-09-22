import react from "react";
import { styled } from "styled-components";

interface iButton {
  text?: string;
  bg?: string;
  col?: string;
  fs?: string;
}

const ButtonProps: react.FC<iButton> = ({ text, bg, col, fs }) => {
  return (
    <div>
      <Button bg={bg!} fs={fs!} col={col!}>
        {text}
      </Button>
    </div>
  );
};

export default ButtonProps;

const Button = styled.button<{
  text?: string;
  bg?: string;
  col?: string;
  fs?: string;
}>`
  padding: 15px 100px;
  background-color: ${({ bg }) => bg};
  color: ${({ col }) => col};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ fs }) => fs};
  cursor: pointer;
`;
