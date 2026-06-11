import "../css/project.css";
export default function Project() {
  return (
    <section id="project">
      <div className="project_blob"></div>
      <div className="project_title">Featured Projects</div>
      <div className="project_cards">
        <div className="project_card">
          <div className="proj_img">
            <img src="portfolio_project.png" alt="portfolio_image"></img>
          </div>
          <div className="proj_info">
            <div className="proj_title">Portfolio Website</div>
            <div className="proj_desc">
              Built this from scratch using React, JavaScript, and CSS — a space
              to showcase my projects and track my growth as a developer
            </div>
            {/* <div className="proj_tools_btns"></div> */}
            <a href="https://alishakafle.com.np/" target="_blank" rel="noopener noreferrer">
            <button className="view_live_btn">View Live</button>
            </a>
          </div>
        </div>

        <div className="project_card">
          <div className="proj_img">
            <img src="mini_mart.png" alt="website_image"></img>
          </div>
          <div className="proj_info">
            <div className="proj_title">Mini Mart</div>
            <div className="proj_desc">
              Built with vanilla HTML, CSS, JavaScript & React — demonstrating
              FakeStoreAPI integration, localStorage persistence, SPA
              navigation, and full responsive design. 
            </div>
            {/* <div className="proj_tools_btns"></div> */}
            <a href="https://ecom-react-project-woad.vercel.app/" target="_blank">
            <button className="view_live_btn">ongoing</button>
            </a>
          </div>
        </div>



        <div className="project_card">
          <div className="proj_img">
            <img src="tailwind.png" alt="website_image"></img>
          </div>
          <div className="proj_info">
            <div className="proj_title">Shop.co</div>
            <div className="proj_desc">
              A  e-commerce landing page featuring a hero section, 
      brand showcase, product listings, dress style categories, customer 
      reviews, and newsletter signup — built with HTML & Tailwind CSS.
            </div>
            {/* <div className="proj_tools_btns"></div> */}
            <a href="https://aleesa21.github.io/Tailwind-website/" target="_blank">
            <button className="view_live_btn">View Live</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
