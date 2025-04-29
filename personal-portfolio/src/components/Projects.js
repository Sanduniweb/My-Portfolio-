import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/4.png";
import projImg5 from "../assets/img/5.png";
import projImg6 from "../assets/img/6.png";
import projImg7 from "../assets/img/7.png";
import projImg8 from "../assets/img/8.png";
import projImg9 from "../assets/img/9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Separate project arrays for each tab
  const uiuxProjects = [
    {
      title: "Tour Mate",
      description: "UI/UX Design",
      imgUrl: projImg1,
      link: "https://www.behance.net/gallery/222852683/Tourmate-Car-Rental-App-UIUX-Case-Study"
    },
    {
      title: "Elder-Care App",
      description: "UI/UX Design",
      imgUrl: projImg2,
      link: "https://www.behance.net/gallery/214585937/ElderEase-Elder-Care-App-with-Intuitive-UIUX-Design"
    },
    {
      title: "Chat App",
      description: "UI/UX Design",
      imgUrl: projImg3,
      link: "https://www.behance.net/gallery/222852683/Tourmate-Car-Rental-App-UIUX-Case-Study"
    },
  ];

  const graphicDesignProjects = [
    {
      title: "Graphic Design 1",
      description: "Poster Design",
      imgUrl: projImg4,
      link: "https://www.behance.net/gallery/222852683/Tourmate-Car-Rental-App-UIUX-Case-Study"
    },
    {
      title: "Graphic Design 2",
      description: "Flyer Design",
      imgUrl: projImg5,
      link: "https://www.behance.net/gallery/207023847/Instagram-Social-Media-Grid-Post"
    },
    {
      title: "Graphic Design 3",
      description: "Flyer Design",
      imgUrl: projImg6,
      link: "https://www.behance.net/gallery/210039199/Apple-Campaign"
    },
  ];

  const logoDesignProjects = [
    {
      title: "Logo Design 1",
      description: "Brand Logo",
      imgUrl: projImg7,
      link: "https://www.behance.net/gallery/191784443/Minimalist-Marks-Showcase"
    },
    {
      title: "Logo Design 2",
      description: "Business Logo",
      imgUrl: projImg8,
      link: "https://www.behance.net/gallery/204667835/Vibrant-Comic-T-Shirt-Designs"
    },
    {
      title: "Logo Design 3",
      description: "Business Logo",
      imgUrl: projImg9,
      link: "https://www.behance.net/gallery/204670599/Tech-Themed-Artwork-for-T-Shirts"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">UI/UX Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Logo Design</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                      {/* UI/UX Design Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {uiuxProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Graphic Design Tab */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {graphicDesignProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Logo Design Tab */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {logoDesignProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
}
