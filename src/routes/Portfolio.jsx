import image from "../assets/images/project.jpg";

export default function Portfolio() {
  return (
    <section className="container my-5">
      <h1>My portfolio</h1>
      <p>
        Here, you&apos;ll find a curated selection of projects that showcase my
        skills, creativity, and dedication to delivering exceptional results.
      </p>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Personal Website Redesign</h5>
              <p className="card-text">
                Description: Redesigned my personal website using React.js and
                modern design principles. Implemented responsive layouts and
                optimized performance for seamless user experience.
              </p>
              <p className="card-text">
                Technologies Used: React.js, HTML, CSS, JavaScript
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Link:{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>{" "}
                /{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">E-commerce Website Development</h5>
              <p className="card-text">
                Description: Developed an e-commerce platform for a local
                business, enabling online sales and inventory management.
                Integrated payment gateways and implemented user authentication
                for secure transactions.
              </p>
              <p className="card-text">
                Technologies Used: React.js, Node.js, Express.js, MongoDB,
                Bootstrap
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Link:{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>{" "}
                /{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Portfolio Photography Website</h5>
              <p className="card-text">
                Description: Created a photography portfolio website for a
                freelance photographer, showcasing their portfolio in a visually
                stunning manner. Implemented image galleries and a contact form
                for client inquiries.
              </p>
              <p className="card-text">
                Technologies Used: HTML, CSS, JavaScript, Bootstrap
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Link:{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>{" "}
                /{" "}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={image} className="card-img-top" alt="Project 4" />
            <div className="card-body">
              <h5 className="card-title">Mobile App Prototype</h5>
              <p className="card-text">
                Description: Designed and prototyped a mobile app concept for a
                social networking platform. Created wireframes and interactive
                prototypes to demonstrate user flows and functionality.
              </p>
              <p className="card-text">Technologies Used: Figma, Adobe XD</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                Link:{" "}
                <a
                  href="https://www.figma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma Prototype
                </a>{" "}
                /{" "}
                <a
                  href="https://www.adobe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adobe XD Prototype
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
