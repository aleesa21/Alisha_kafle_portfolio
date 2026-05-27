import "../css/home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Home() {
  return (
    <section id="home">
      <div className="blob_a"></div>
      <div className="blob_b"></div>
      <div className="blob_c"></div>
      <div className="blob_d"></div>
      <div className="home_main">
        <div className="home_left">
          <div>
            <p className="greetings">Hi, I'm Alisha Kafle</p>
            <h1>
              Frontend <br></br>Developer
            </h1>
            <p className="tagline">
              Fresh out of college, full of frontend, ready to prove it
            </p>
            <div className="home_left_btns">
              <button className="view_my_work_btn">View My Work</button>
              <button className="get_in_touch-btn">Get In Touch</button>
            </div>
            <div className="social_icons">
              <a
                href="https://www.linkedin.com/in/alisha-kafle/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/aleesa21" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="home_right">
          <div className="home_img_container">
            <img className="alisha_img"src="akbest.png" alt="alisha"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
