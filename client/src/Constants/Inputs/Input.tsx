import React from "react";
import "./Input.css";
interface Props {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  children?:
    | JSX.Element
    | React.ReactChild[]
    | React.ReactChild
    | React.ReactElement;
  btnStyle?: React.CSSProperties;
}

const Input: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  onClick,
  children,
  btnStyle,
}: Props): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="InputWrapper"
    >
      <div className="InputHolder">
        <input
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className="Input"
        />
        <button
          onClick={() => onClick()}
          className="SubmissionButton"
          style={{ ...btnStyle }}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Input;
