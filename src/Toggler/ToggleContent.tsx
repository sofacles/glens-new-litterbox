import React, { useState } from "react";
export type ToggleContentProps = {
  content: (arg: () => void) => React.ReactElement,
  toggle: (arg: () => void) => React.ReactElement
}

const ToggleContent = ({ toggle, content }: ToggleContentProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const show = () => {
    setIsShowing(true);
  };
  const hide = () => {
    setIsShowing(false);
  };

  return (
    <>
      {!isShowing && toggle(show)}
      {isShowing && content(hide)}
    </>
  );
};

export default ToggleContent;
