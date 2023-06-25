import LandscapeTypeGroup from "../components/LandscapeTypeGroup";

import Image from "../ui/Image";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

import dirt from "../assets/images/dirt.jpg";
import foliage from "../assets/images/foliage.jpg";
import grass from "../assets/images/grass.jpg";
import gravel from "../assets/images/gravel.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { landtypeActions } from "../store";

const HomePage = () => {
  const [imgSrc, setImgSrc] = useState(dirt);
  const landtype = useSelector((state) => state.landtype.landtype);
  const dispatch = useDispatch();

  const handleSelect = (e, arg) => {
    dispatch(landtypeActions.change(arg));
    switch (arg) {
      case "foliage":
        arg = foliage;
        break;
      case "grass":
        arg = grass;
        break;
      case "gravel":
        arg = gravel;
        break;
      default:
        arg = dirt;
    }
    setImgSrc(arg);
  };

  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    switch (landtype) {
      case "foliage":
        setImgSrc(foliage);
        break;
      case "grass":
        setImgSrc(grass);
        break;
      case "gravel":
        setImgSrc(gravel);
        break;
      default:
        setImgSrc(dirt);
    }
  }, [landtype]);

  return (
    <div>
      <Image src={imgSrc} />
      <Link to={`/submit${isAuth ? "" : "/login"}`}>
        <Button>Order now!</Button>
      </Link>
      <LandscapeTypeGroup onSelect={handleSelect} />
    </div>
  );
};

export default HomePage;
