import { WeddingEvent } from "./WeddingEvent";
import { WeddingEvents_Document } from "../.tina/__generated__/types";
type EventDetailsProps = {
  eventsDoc: WeddingEvents_Document;
};
const EventDetails = ({ eventsDoc }: EventDetailsProps) => {
  return (
    <section id="wedding" className="bg-secondary spacer-one-top-lg">
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
            colorScheme="primary"
            time={
              <>
                <h6 className="text-white">3:00pm</h6>{" "}
                <div className="mb-5 text-white">
                  <em>Please arrive at 2:30pm to find your seat.</em>
                </div>
              </>
            }
          />
          <WeddingEvent
            name="Cocktail Hour"
            colorScheme=""
            time={<h6 className="mb-5">To follow Ceremony</h6>}
          />
          <WeddingEvent
            name="Reception"
            colorScheme="primary"
            time={
              <h6 className="mb-5 text-white">
                Begins at 5:30pm, dance to follow.
              </h6>
            }
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="p-5 text-center">
              <p className="text-align-center">
                <h4>The Grand Victorian</h4>
                <h4>106 Nelson St, Victoria, PE</h4>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className=" text-center">
              <p className="text-align-center">
                <h5>
                  There will be shuttles provided from the venue to
                  Charlottetown and Summerside leaving at select times later in
                  the night.
                </h5>
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col">
            <div className="card card-body m-5 ">
              <div className="d-none d-md-block">
                <div className="text-center">
                  <iframe
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJMwfNdJenX0sRDhUWIb9LpUw&key=AIzaSyBFJ6JI8FxM6O8y1K3lXm8HoUw3r_s4H-Y"
                  ></iframe>
                </div>
              </div>

              <div className="d-sm-block d-md-none text-center">
                <a
                  href="https://www.google.com/maps/place/The+Grand+Victorian+Wedding+and+Events+Destination/@46.2179322,-63.4952854,17z/data=!3m1!4b1!4m5!3m4!1s0x4b5fa79774cd0733:0x4ca54bbf2116150e!8m2!3d46.2179322!4d-63.4930914"
                  className="bg-primary rounded p-4 text-white"
                >
                  <img
                    src="./assets/svg/maps.svg"
                    width={25}
                    style={{ marginRight: 10 }}
                  />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="curved-decoration ">
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
              d="M2560,0c0,0-219.6543,165.951-730.788,124.0771c-383.3156-31.4028-827.2138-96.9514-1244.7139-96.9514
    c-212.5106,0-439,3.5-584.4982,1.5844l0,139.9126h2560V0z"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default EventDetails;
