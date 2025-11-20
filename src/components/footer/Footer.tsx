import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Divider } from "primereact/divider";
import { useState } from "react";
import "./Footer.scss";

function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  return (
    <footer className="footer">
      <div className="container">
        <Divider />
        <div className="footer__content">
          <div className="footer__info">
            <h3>Get In Touch</h3>
            <p>
              Want to collaborate with me? That's great! Send me an email and I
              will get back to you as soon as possible!
            </p>
          </div>
          <div className="footer-contact">
            <Button
              label="Say Hello"
              className="footer__contact-btn"
              onClick={handleContactClick}
            />
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © 2025 by Andrew St. Jean. Created with Vite, React, and PrimeReact
          </p>
        </div>
      </div>

      <Dialog
        header="Contact Me"
        visible={showContactForm}
        style={{ width: "90vw", maxWidth: "500px" }}
        onHide={() => setShowContactForm(false)}
      >
        <form
          action="https://formkeep.com/f/91ef74c7c911"
          acceptCharset="UTF-8"
          method="POST"
        >
          <input type="hidden" name="utf8" value="✓" />

          <div className="field mb-4">
            <label htmlFor="contact-name" className="block mb-2">
              Name
            </label>
            <InputText
              id="contact-name"
              name="name"
              className="w-full"
              required
            />
          </div>

          <div className="field mb-4">
            <label htmlFor="contact-email" className="block mb-2">
              Email Address
            </label>
            <InputText
              id="contact-email"
              name="email"
              type="email"
              className="w-full"
              required
            />
          </div>

          <div className="field mb-4">
            <label htmlFor="contact-message" className="block mb-2">
              Message
            </label>
            <InputTextarea
              id="contact-message"
              name="message"
              rows={5}
              className="w-full"
              required
            />
          </div>

          <Button type="submit" label="Send Message" className="w-full" />
        </form>
      </Dialog>
    </footer>
  );
}

export default Footer;
