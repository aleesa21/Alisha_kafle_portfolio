import "../css/contact.css";
import { HiOutlineMail } from "react-icons/hi";
export default function Contact() {
  return (
    <section id="contact">
      <div className="contact_blob_a"></div>
      <div className="contact_blob_b"></div>
      <div className="contact_items">
        <div className="contact_items_info">
          Looking forward to working with you
        </div>
        <div className="contact_items_desc">
          I'm always looking for opportunities to put my skills to use and grow
          through real work. If you have a project in mind, I'd love to be a
          part of it.
        </div>
        <a href="mailto:kaflealisha702@gmail.com" >
        <button className="send_email_btn">
          <HiOutlineMail />
          <span>Send Email</span>
        </button>
        </a>
      </div>
    </section>
  );
}
