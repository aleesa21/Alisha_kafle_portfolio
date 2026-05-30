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
            <button className="view_live_btn">View Live</button>
          </div>
        </div>

        <div className="project_card">
          <div className="proj_img">
            <img src="mini_mart.png" alt="website_image"></img>
          </div>
          <div className="proj_info">
            <div className="proj_title">Mini Mart</div>
            <div className="proj_desc">
              Built with vanilla HTML, CSS & JavaScript — demonstrating
              FakeStoreAPI integration, localStorage persistence, SPA
              navigation, and full responsive design. A perfect learning
              reference for React developers.
            </div>
            {/* <div className="proj_tools_btns"></div> */}
            <button className="view_live_btn">View Live</button>
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
            <button className="view_live_btn">View Live</button>
          </div>
        </div>
      </div>
    </section>
  );
}
