import React from "react";

interface ButtonsProps {
  text: string;
}

const Buttons: React.FC<ButtonsProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Buttons;
