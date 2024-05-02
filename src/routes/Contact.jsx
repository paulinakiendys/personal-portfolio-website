export default function Contact() {
  return (
    <section className="container my-5">
      <h1>Contact me</h1>
      <p>
        Have a project in mind or just want to say hello? I&apos;d love to hear
        from you! Feel free to reach out via the contact form below or through
        any of the other channels listed. Let&apos;s connect and bring your
        ideas to life!
      </p>

      <div className="row">
        <div className="col-md-6">
          <h4>Contact Form</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messageInput"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Other Ways to Reach Me</h4>
          <ul className="list-unstyled">
            <li>
              <strong>Email:</strong> john@doe.com
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                John Doe
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @johndoe
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                @johndoe
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                johndoe
              </a>
            </li>
          </ul>
          <p>
            <strong>Office Location:</strong>
            <br />
            123 Main Street, Suite 100
            <br />
            San Francisco, CA 94105
          </p>
        </div>
      </div>
    </section>
  );
}
