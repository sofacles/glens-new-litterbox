import React from "react";

export type HideProps = {
  hide: () => void;
}
const MyCustomComponent = (props: HideProps) => {
  return (
    <div>
      MyCustomComponent
      <button
        onClick={(e) => {
          e.preventDefault();
          props.hide();
        }}
      >
        hide
      </button>
    </div>
  );
};

export default MyCustomComponent;
