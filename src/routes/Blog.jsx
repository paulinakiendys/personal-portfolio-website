import image from "../assets/images/blog.jpg";

export default function Blog() {
  return (
    <section className="container my-5">
      <h1 className="mt-5 mb-4">My Blog</h1>
      <p className="mb-4">
        Explore the latest insights, tips, and stories from my journey in web
        development. Whether you&apos;re a fellow enthusiast, a budding
        professional, or simply curious about web development, there&apos;s
        something here for everyone.
      </p>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                  alt="Post 1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">Nov 12</small>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id ipsum vel metus dapibus eleifend.
                  </p>
                  <p className="card-text">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue reading
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                  alt="Post 1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">Nov 12</small>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id ipsum vel metus dapibus eleifend.
                  </p>
                  <p className="card-text">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue reading
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                  alt="Post 1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">Nov 12</small>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id ipsum vel metus dapibus eleifend.
                  </p>
                  <p className="card-text">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue reading
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={image}
                  className="img-fluid rounded-start h-100 object-fit-cover"
                  alt="Post 1"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Post title</h5>
                  <p className="card-text">
                    <small className="text-body-secondary">Nov 12</small>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id ipsum vel metus dapibus eleifend.
                  </p>
                  <p className="card-text">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Continue reading
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
