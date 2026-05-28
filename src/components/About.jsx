import "../css/about.css";
export default function About() {
  return (
    <section id="about">
      <div className="about_blob"></div>
      <div className="about_main">
        <div className="about_left">
          <div className="about_img_container">
            <img className="about_image" src="image.png" alt="alisha_pic"></img>
          </div>
        </div>
        <div className="about_right">
          <div>
          <div className="aboutme_text">About Me</div>
          <p>
            I'm Alisha Kafle, a BIM student who started learning web development
            because I wanted to build something real — something mine. I'm a
            beginner and I won't pretend otherwise.
          </p>
          <p>
            Some days it clicks, some days it doesn't. But I cook, clean, open
            my laptop, and get back to it anyway — because I need this, and that
            need keeps me honest.
          </p>
          <p>
            I love the moment an idea becomes an actual working thing on screen.
            That's what got me here and that's what keeps me going. I don't have
            years of experience to offer — just dedication, a genuine hunger to
            grow, and someone who won't quit.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
