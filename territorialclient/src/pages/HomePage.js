import LandscapeTypeGroup from "../components/LandscapeTypeGroup";

import Image from "../ui/Image";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

import dirt from "../assets/images/dirt.jpg";
import foliage from "../assets/images/foliage.jpg";
import grass from "../assets/images/grass.jpg";
import gravel from "../assets/images/gravel.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [imgSrc, setImgSrc] = useState(dirt);

  const handleSelect = (e, arg) => {
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

  return (
    <div>
      <Image src={imgSrc} />
      <Link to={`/submit${isAuth ? null : "/login"}`}>
        <Button>Order now!</Button>
      </Link>
      <LandscapeTypeGroup onSelect={handleSelect} />
    </div>
  );
};

export default HomePage;
