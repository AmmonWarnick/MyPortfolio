export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Ammon Warnick, Full Stack Developer
            (React, TypeScript, Node.js). Glendale, AZ.
          </p>
          <p className="text-sm mb-2">
            <a
              href="mailto:warnick.ammon@gmail.com"
              className="hover:text-primary transition-colors"
            >
              warnick.ammon@gmail.com
            </a>{" "}
            ·{" "}
            <a
              href="https://github.com/AmmonWarnick"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://linkedin.com/in/ammon-warnick/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
