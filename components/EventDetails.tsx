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
          <WeddingEvent eventItem={eventsDoc.data!.weddingEvents![0]} />
          <div className="col-md-6 col-lg-4 d-flex "></div>
          <WeddingEvent eventItem={eventsDoc.data!.weddingEvents![1]} />
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
