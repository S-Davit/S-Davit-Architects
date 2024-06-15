const MainContactForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" required placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Comment" />
      <button>SEND MASSAGE</button>
    </form>
  );
};

export default MainContactForm;
