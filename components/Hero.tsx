const Hero = () => {
  return (
    <section className="gradient-overlay gradient-overlay-dark ">
      <picture>
        <source
          media="(max-width: 950px)"
          srcSet="assets/img/hero_mobile.jpg"
        />
        <source
          media="(min-width: 951px)"
          srcSet="assets/img/hero_desktop.jpg"
        />
        <img className="bg-image" src="/assets/img/hero_desktop.jpg" alt="" />
      </picture>

      <div className="container">
        <div className="row min-vh-80 align-items-center z-index-2 position-relative text-center">
          <div className="col-12">
            <h1 className="display-2  text-white mb-4">Kate &amp; Chris</h1>
            <p className="font-weight-300 text-light  lead mb-5 ">
              Saturday August 28th, 2021 - Victoria, PEI
            </p>
            <a
              href="#rsvp"
              className="btn btn-primary btn-wide-sm btn-sm  scroll"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
      <div className="curved-decoration ">
        <svg
          width="100%"
          height="100%"
          version="1.1"
          xmlBase="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 2560 168.6227"
          enable-background="new 0 0 2560 168.6227"
          xmlSpace="preserve"
        >
          <g></g>
          <g>
            <path
              d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514
c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
