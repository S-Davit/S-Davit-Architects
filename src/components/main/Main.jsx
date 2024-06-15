import MainImage from "./main-image/MainImage";
import MainProjects from "./main-projects/MainProjects";
import MainAbout from "./main-about/MainAbout";
import MainContact from "./main-contact/MainContact";
import MainMap from "./main-map/MainMap";

import "./Main.css";

const Main = () => {
  return (
    <main>
      <MainImage />
      <MainProjects />
      <MainAbout />
      <MainContact />
      <MainMap />
    </main>
  );
};

export default Main;
