import React from "react";
import project1 from '../../Assets/images/project1.png';
import project2 from '../../Assets/images/project2.png';
import project3 from '../../Assets/images/project3.png';
function Projects() {
  return (
    <div className="project-section">
      <h2 id="myProjects">My Projects.</h2>
      <h3>Wikipedia Site of Hayao Miyazaki's Movies</h3>
      <img
        className="project-picture"
        src={project1}
        alt="project-1"
      />
      <p>
        The purpose of the website is to create a wiki site for Miyazaki Hayao's
        animated films, with pages including main character introductions, scene
        galleries, soundtracks, wall paper, etc. If the viewer clicked in this
        site, they should be able to find the detailed information about the
        films.
      </p>
      <h3 id="projectHeading2">Webpage of Perfumes</h3>
      <img
        className="project-picture"
        src={project2}
        alt="project-2"
      />

      <p>
        I designed the layout and create the homepage of this perfume site.
        Basically the purpose is to practise the Bootstrap grid and columns
        function. Completed in Fall 2022.
      </p>
      <h3 id="projectHeading3">Tindog</h3>

      <img
        className="project-picture"
        src={project3}
        alt="project-3"
      />

      <p>
        A practice about HTML, CSS and JavaScript. Attempted to use all kinds of
        diaplay in the CSS, tried some hover function in the JS.
      </p>
    </div>
  );
}

export default Projects;
