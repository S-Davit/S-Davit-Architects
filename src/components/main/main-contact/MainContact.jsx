import MainContactForm from "./main-contact-form/MainContactForm";

import "./MainContact.css";

const MainContact = () => {
  return (
    <section className="main-contact p-section" id="contact">
      <h1 className="section-title">Contact</h1>
      <hr />
      <p>Lets get in touch and talk about your next project.</p>

      <MainContactForm />
    </section>
  );
};

export default MainContact;
