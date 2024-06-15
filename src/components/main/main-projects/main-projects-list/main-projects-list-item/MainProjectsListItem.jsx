const MainProjectsListItem = ({ title, image, dot }) => {
  return (
    <div className="main-projects-list-item">
      <img src={image} alt="house" />
      <div className="main-projects-list-item-title">
        {title}
        {/* {dot ? "." : ""} */}
        {dot && "."}
      </div>
    </div>
  );
};

export default MainProjectsListItem;
