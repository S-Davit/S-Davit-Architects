import MainAboutListItem from "./main-about-list-item/MainAboutListItem";

import johnImage from "../../../../assets/images/main-about/John.jpg";
import janeImage from "../../../../assets/images/main-about/Jane.jpg";
import mikeImage from "../../../../assets/images/main-about/Mike.jpg";
import danImage from "../../../../assets/images/main-about/Dan.jpg";

const MainAboutList = () => {
  return (
    <div className="main-about-list">
      <MainAboutListItem
        name={"John Doe"}
        img={johnImage}
        profesion={"CEO & Founder"}
        descripton={
          "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        }
      />
      <MainAboutListItem
        name={"Jane Doe"}
        img={janeImage}
        profesion={"Architect"}
        descripton={
          "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        }
      />
      <MainAboutListItem
        name={"Mike Ross"}
        img={mikeImage}
        profesion={"Architect"}
        descripton={
          "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        }
      />
      <MainAboutListItem
        name={"Dan Star"}
        img={danImage}
        profesion={"Architect"}
        descripton={
          "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
        }
      />
    </div>
  );
};

export default MainAboutList;
