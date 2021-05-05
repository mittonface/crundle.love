import { WeddingEvent } from "./WeddingEvent";
const EventDetails = () => {
  return (
    <section id="wedding" className="spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className=" text-center mb-5 pb-5">
              <h1 className="display-4 mb-0">Wedding Events</h1>
              <p className="w-md-40 mb-0 mx-auto text-dark-gray opacity-8 "></p>
            </div>
          </div>
        </div>
        <div className="row">
          <WeddingEvent
            name="Ceremony"
            time="6:30am - 6:31am"
            description="I need to make this be able to include line breaks."
            color="primary"
          />
          <WeddingEvent
            name="Reception"
            time="6:30am - 6:31am"
            description="I need to make this be able to include line breaks"
            color="secondary"
          />
          <WeddingEvent
            name="Another Event"
            time="6:30am - 6:31am"
            description="I need to make this be able to include line breaks"
            color="primary"
          />
        </div>
        <div className="row">
          <div className="col">
            <div className=" text-center mt-5 pt-5">
              <a
                href="#rsvp"
                className="btn btn-primary btn-wide-sm btn-sm  scroll"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration">
        <svg
          width="100%"
          height="100%"
          className="bg-secondary-svg"
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

export default EventDetails;
