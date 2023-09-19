const NonState = () => {
  let x = "x";
  return (
    <div>
      Unless you use some way of maintaing state, updating a variable will not
      rerender your component. value: {x}
      <p>
        <input
          type="button"
          value="update x"
          onClick={() => {
            x = "y";
          }}
        />{" "}
      </p>
    </div>
  );
};

export default NonState;
