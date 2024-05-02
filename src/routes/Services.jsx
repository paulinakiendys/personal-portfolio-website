export default function Services() {
  return (
    <section className="container my-5">
      <h1>Services</h1>
      <p>
        Below are the offerings I provide to help you achieve your goals and
        bring your projects to life:
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                From simple websites to complex web applications, I specialize
                in crafting responsive, user-friendly, and visually stunning
                digital experiences. Whether you need a new website built from
                scratch or improvements to an existing one, I&apos;ve got you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                Good design is key to engaging your audience and delivering
                memorable experiences. I offer UI/UX design services tailored to
                your brand and audience, ensuring your digital products not only
                look great but also provide intuitive and seamless user
                experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Frontend Development</h5>
              <p className="card-text">
                I excel in frontend development, using the latest technologies
                and best practices to create dynamic and interactive interfaces.
                Whether it&apos;s implementing custom animations, optimizing
                performance, or ensuring cross-browser compatibility, I&apos;m
                committed to delivering frontend solutions that elevate your
                online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
