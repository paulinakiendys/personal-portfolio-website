export default function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">
          Copyright &copy; {new Date().getFullYear()} John Doe. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
}
