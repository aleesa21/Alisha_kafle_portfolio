import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Copyhome() {
  return (
    <section id="home">
      <div className="blob_a"></div>
      <div className="blob_b"></div>
      <div className="blob_c"></div>
      <div className="blob_d"></div>
      <div className="home_main">
        <div className="home_left">
            <p className="greetings">Hi, I'm Alisha Kafle</p>
            <h1>
              Frontend <br></br>Developer
            </h1>
            <p className="tagline">
              Bringing digital visions to life through code and design is what
              excites me most as a future IT professional.
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
    </section>
  );
}
