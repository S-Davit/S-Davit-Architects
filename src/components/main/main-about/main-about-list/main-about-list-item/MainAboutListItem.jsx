const MainAboutListItem = ({ name, img, profesion, descripton }) => {
  return (
    <div className="main-about-list-item">
      <div className="main-about-list-item-image">
        <img src={img} alt="" />
      </div>
      <div className="main-about-list-item-description">
        <h2>{name}</h2>
        <span>{profesion}</span>
        <p>{descripton}</p>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default MainAboutListItem;
