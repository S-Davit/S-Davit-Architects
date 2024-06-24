import MainProjectsListItem from "./main-projects-list-item/MainProjectsListItem";

import house1 from "../../../../assets/images/main-projects/house1.jpg";
import house2 from "../../../../assets/images/main-projects/house2.jpg";
import house3 from "../../../../assets/images/main-projects/house3.jpg";
import house4 from "../../../../assets/images/main-projects/house4.jpg";
import {Fragment} from "react";

const MainPojectsList = () => {
    const t1 = "Summer House";
    const t2 = "Brick House";
    const t3 = "Renovated";
    const t4 = "Barn House";

    const data = [
        {
            id: 1,
            title: "Summer House",
            image: house1
        },
        {
            id: 2,
            title: "Brick House",
            image: house2
        },
        {
            id: 3,
            title: "Renovated",
            image: house3
        },
        {
            id: 4,
            title: "Barn House",
            image: house4
        },
    ]

    return (
        <div className="main-projects-list">
            {/*<MainProjectsListItem title={t1} image={house1} dot />*/}
            {/*<MainProjectsListItem title={t2} image={house2} />*/}
            {/*<MainProjectsListItem title={t3} image={house3} />*/}
            {/*<MainProjectsListItem title={t4} image={house4} dot />*/}
            {/*<MainProjectsListItem title={t2} image={house2} />*/}
            {/*<MainProjectsListItem title={t1} image={house1} />*/}
            {/*<MainProjectsListItem title={t4} image={house4} />*/}
            {/*<MainProjectsListItem title={t3} image={house3} />*/}
            {
                data.map((item) => (
                    <Fragment key={item.id}>
                        <MainProjectsListItem title={item.title} image={item.image}/>
                    </Fragment>
                ))
            }
        </div>
    );
};

export default MainPojectsList;
