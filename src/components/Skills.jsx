import "../css/skills.css";
export default function Skills() {
  return (
    <section id="skills">
      <div className="skill_blob_b"></div>
      <div className="skill_blob_a"></div>
      <div className="my_skills">My Skills</div>
      {/* <p>Here's what I've been working with</p> */}
      <div className="skills_card_container">
        <div className="skills_card">
          <div className="skill_field">Frontend</div>
          <div className="skill_list">
            <div className="skill_name">HTML & CSS</div>
            <div className="skill_bar">
              <div className="skill_fill sp85"></div>
            </div>
            <div className="skill_pct">85%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">JavaScript</div>
            <div className="skill_bar">
              <div className="skill_fill sp70"></div>
            </div>
            <div className="skill_pct">70%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">React</div>
            <div className="skill_bar">
              <div className="skill_fill sp65"></div>
            </div>
            <div className="skill_pct">65%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">Tailwind Css</div>
            <div className="skill_bar">
              <div className="skill_fill sp60"></div>
            </div>
            <div className="skill_pct">60%</div>
          </div>
        </div>

        <div className="skills_card">
          <div className="skill_field">Currently Learning</div>
          <div className="skill_list">
            <div className="skill_name">Node Js</div>
            <div className="skill_bar">
              <div className="skill_fill sp30"></div>
            </div>
            <div className="skill_pct">30%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">PostgreSQL</div>
            <div className="skill_bar">
              <div className="skill_fill sp25"></div>
            </div>
            <div className="skill_pct">25%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">Express Js</div>
            <div className="skill_bar">
              <div className="skill_fill sp35"></div>
            </div>
            <div className="skill_pct">35%</div>
          </div>
        </div>

        <div className="skills_card">
          <div className="skill_field">Tools & Setup</div>
          <div className="skill_list">
            <div className="skill_name">Git & GitHub</div>
            <div className="skill_bar">
              <div className="skill_fill sp60"></div>
            </div>
            <div className="skill_pct">60%</div>
          </div>

          <div className="skill_list">
            <div className="skill_name">VS Code</div>
            <div className="skill_bar">
              <div className="skill_fill sp85"></div>
            </div>
            <div className="skill_pct">85%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
