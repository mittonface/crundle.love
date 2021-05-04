import { TimelineItem } from "./TimelineItem";
import { Timeline_Document } from "../.tina/__generated__/types";

type TimelineProps = {
  timelineDoc: Timeline_Document;
};
const Timeline = ({ timelineDoc }: TimelineProps) => {
  console.log("HELLO");
  console.log(timelineDoc);
  console.log(timelineDoc.__typename);
  return (
    <section id="story" className=" bg-secondary spacer-one-top-lg">
      <div className="container spacer-one-bottom-lg">
        <div className="row justify-content-center">
          <div className="col">
            <div className=" text-center mb-5 pb-5">
              <h1 className="display-4 mb-0">Our Love Story</h1>
            </div>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="mb-3 pb-3">
              <h5 className="mb-0"> When Chris Cairns met Kate Rundle</h5>
              <span className="small text-dark-gray opacity-8"></span>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 px-4">
              <div className="svg-mask-container">
                <svg
                  width="100%"
                  height="100%"
                  version="1.1"
                  xmlBase="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 607 532"
                  enable-background="new 0 0 607 532"
                  xmlSpace="preserve"
                >
                  <defs>
                    <mask id="mask-small-1">
                      <path
                        fill="#FFFFFF"
                        d="M303.2954,55.7655L303.2954,55.7655c-68.9887-68.3032-180.269-68.3601-249.3155,0.1402
                                     c-69.6423,69.0921-69.0838,181.9562,0.0139,251.5284l201.1888,202.5704c26.2076,26.3876,68.8445,26.5335,95.2321,0.3258
                                     l201.4838-200.1096c69.6179-69.1431,71.0768-183.7278,2.0303-253.4415C485.013-12.8027,372.7591-13.2244,303.2954,55.7655z"
                      />
                    </mask>
                  </defs>
                  <image
                    mask="url(#mask-small-1)"
                    width="607"
                    height="532"
                    xlinkHref="assets/img/babies.jpg"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-column align-items-center">
            <ol className="story mb-0">
              {timelineDoc.data?.timeline?.map((timelineItem) => (
                <TimelineItem timelineItem={timelineItem} />
              ))}
            </ol>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-md-3 d-flex flex-column align-items-center">
            <div className="mb-3 pb-3 mt-3 pt-3 px-4">
              <div className="svg-mask-container">
                <svg
                  width="100%"
                  height="100%"
                  version="1.1"
                  xmlBase="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 607 532"
                  enable-background="new 0 0 607 532"
                  xmlSpace="preserve"
                >
                  <defs>
                    <mask id="mask-small-2">
                      <path
                        fill="#FFFFFF"
                        d="M303.2954,55.7655L303.2954,55.7655c-68.9887-68.3032-180.269-68.3601-249.3155,0.1402
                                     c-69.6423,69.0921-69.0838,181.9562,0.0139,251.5284l201.1888,202.5704c26.2076,26.3876,68.8445,26.5335,95.2321,0.3258
                                     l201.4838-200.1096c69.6179-69.1431,71.0768-183.7278,2.0303-253.4415C485.013-12.8027,372.7591-13.2244,303.2954,55.7655z"
                      />
                    </mask>
                  </defs>
                  <image
                    mask="url(#mask-small-2)"
                    width="607"
                    height="532"
                    xlinkHref="assets/img/family1.jpg"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center">
            <div className="">
              <h5 className="mb-0"> We'll be married!</h5>
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

export default Timeline;
