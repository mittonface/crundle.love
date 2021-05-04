import { Maybe, Timeline_Timeline_Data } from "../.tina/__generated__/types";

import moment from "moment";

type TimelineItemProps = {
  timelineItem: Maybe<Timeline_Timeline_Data>;
};
export const TimelineItem = ({ timelineItem }: TimelineItemProps) => {
  return (
    <li>
      <div className="story-icon bg-icon-primary">
        <svg
          version="1.1"
          className="icon-svg"
          xmlBase="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 107 93"
          enable-background="new 0 0 107 93"
          xmlSpace="preserve"
        >
          <path
            fill="#636784"
            d="M53.6825,9.4436L53.6825,9.4436C41.6532-2.4793,22.2392-2.5,10.1866,9.4439
                                  c-12.1565,12.0471-12.07,31.7375-0.0219,43.8819l35.08,35.3601c4.5697,4.6061,12.0081,4.6357,16.6142,0.0661l35.1704-34.8918
                                  c12.1523-12.056,12.4179-32.0464,0.3787-44.2154C85.3917-2.5013,65.8078-2.5857,53.6825,9.4436z"
          />
        </svg>
      </div>
      <div>
        <h5 className="mb-0">{timelineItem?.description}</h5>
        <span className="small text-primary">
          {moment(timelineItem?.date).format("MMMM YYYY")}
        </span>
      </div>
    </li>
  );
};
