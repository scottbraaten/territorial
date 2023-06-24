const LandscapeType = (props) => {
  return (
    <div onClick={props.onClick}>
      <p>{props.type}</p>
    </div>
  );
};

export default LandscapeType;
