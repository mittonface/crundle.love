const Registry = () => {
  return (
    <section id="gift" className="bg-primary">
      <div className="container spacer-double-lg">
        <div className="row justify-content-between z-index-3 position-relative align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h1 className="display-4 text-white">Registry</h1>
            <p className="lead text-white mb-0">
              We're so lucky to already have a home full of everything we need,
              but if you feel so inclined please contribute to one of our
              charities of choice or our cash registry.
            </p>
          </div>
          <div className="flex justify-center w-full ">
            <div className=" text-center px-4 py-2 m-6">
              <a
                href="https://www.hopeforwildlife.net/donations"
                className="bg-white rounded p-4 text-black"
              >
                Hope For Wildlife
              </a>
            </div>
            <div className=" text-center  px-4 py-2 m-6">
              <a
                href="https://secure-support.heartandstroke.ca/site/SPageServer?pagename=DMDonationForm&s_locale=en_CA&s_fT=cont&s_pres=hsweb&s_cscid=hsweb_nav&_ga=2.163056380.1964448144.1622383460-1127825277.1622383460"
                className="bg-white rounded p-4 text-black"
              >
                Heart & Stroke Foundation
              </a>
            </div>
            <div className=" text-center w-full py-2 m-6">
              <a
                href="https://www.honeyfund.com/wedding/rundle-cairns-08-28-2021"
                className="bg-white rounded p-4 w-full text-black"
              >
                Honey Fund Registry
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration z-index-3">
        <svg
          width="100%"
          height="100%"
          className="bg-white-svg"
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
              d="M0,0c0,0,219.6543,165.951,730.788,124.0771c383.3156-31.4028,827.2139-96.9514,1244.7139-96.9514
    c212.5106,0,438.9999,3.5,584.4982,1.5844v139.9126H0V0z"
            ></path>
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Registry;
