/** @jsx h */
import { FunctionComponent, h } from "preact"
import './Button.less';

interface ButtonProps {
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ onClick }) => {

  return (
    <button className={`buttonPrimary`} onClick={ onClick }>
      SomeText
    </button>
  )
};

export default Button;