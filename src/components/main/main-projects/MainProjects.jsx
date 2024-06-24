import MainPojectsList from "./main-projects-list/MainPojectsList";

import "./MainProjects.css";
import {SectionWrapper} from "../../reused/SectionWrapper";
import {TitleItem} from "../../reused/Title";

const MainProjects = () => {
    return (
        <SectionWrapper>
            <TitleItem title="Projects"/>
            <MainPojectsList/>
        </SectionWrapper>
    );
};


export default MainProjects;
