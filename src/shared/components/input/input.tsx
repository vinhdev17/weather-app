import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

import "./input.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  readonly className?: string;
}

export const Input: FC<IInput> = (props) => {
  const {
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    placeholder,
    className,
  } = props;

  const [inputData, setinputData] = useState<string>("");

  const onChangeInputData = (e: ChangeEvent<HTMLInputElement>) => {
    setinputData(e.target.value);
  };

  return (
    <input
      //TODO: better than if we're using clsx package
      className={`input ${className ? className : ""}`}
      type="text"
      value={value ?? inputData}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange ?? onChangeInputData}
      onKeyDown={onKeyDown}
    />
  );
};
