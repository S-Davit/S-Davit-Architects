import MainAboutList from "./main-about-list/MainAboutList";

import "./MainAbout.css";
import {TitleItem} from "../../reused/Title";

const MainAbout = () => {
    return (
        <section className="main-about p-section" id="about">
            {/*<h1 className="section-title">About</h1>*/}
            {/*<hr />*/}
            <TitleItem title="About"/>
            <p className="main-about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <MainAboutList/>
        </section>
    );
};

export default MainAbout;
