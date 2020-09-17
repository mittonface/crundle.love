import { useCMS } from "tinacms";

const Footer = () => {
  const cms = useCMS();
  return (
    <footer className="spacer-double-lg bg-secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="signature mb-3"></div>
            <button onClick={() => cms.toggle()}>
              {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
            </button>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
