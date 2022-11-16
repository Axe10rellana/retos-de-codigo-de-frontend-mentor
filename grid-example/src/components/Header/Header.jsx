//react
import { useState } from "react";

//componentes
import { SlideController, Article } from "../";

//assets
import {
  DesktopImgHero1,
  DesktopImgHero2,
  DesktopImgHero3,
} from "../../assets";

const objArticles = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    image: DesktopImgHero1,
  },
  {
    id: 2,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    image: DesktopImgHero2,
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: DesktopImgHero3,
  },
];

const Header = () => {
  //variables
  const [index, setIndex] = useState(0);

  //funciones
  const handlePrev = () =>
    index === 0 ? setIndex(objArticles.length - 1) : setIndex(index - 1);

  const handleNext = () =>
    index === objArticles.length - 1 ? setIndex(0) : setIndex(index + 1);

  return (
    <header className="grid grid-cols-3 grid-rows-[10fr_1.5fr_10fr] lg:grid-cols-7 lg:grid-rows-[10fr_1.5fr]">
      <Article hero={objArticles[index]} />
      <SlideController handlePrev={handlePrev} handleNext={handleNext} />
    </header>
  );
};

export default Header;
