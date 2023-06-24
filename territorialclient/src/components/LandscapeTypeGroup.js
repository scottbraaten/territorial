import LandscapeType from "./LandscapeType";

const LandscapeTypeGroup = (props) => {
  const handleClick = (e) => {
    props.onSelect(e, e.target.innerText);
  };
  return (
    <>
      <LandscapeType
        onClick={handleClick}
        type="grass"
      />
      <LandscapeType
        onClick={handleClick}
        type="gravel"
      />
      <LandscapeType
        onClick={handleClick}
        type="foliage"
      />
    </>
  );
};

export default LandscapeTypeGroup;
