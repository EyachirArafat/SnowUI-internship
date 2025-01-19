import React from "react";
import { LineProgress } from "../common/LineProgress";

export const TrafficByWebsite = () => {
  const socialMedia = ["Google", "YouTube", "Instagram", "Pinterest", "Facebook", "Twitter", ]
  return (
    <div>
      <h3 className="font-semibold text-t14  mb-4">Traffic by Website</h3>
      <div className="space-y-7">
          {socialMedia.map((media)=>(
            <div className="flex justify-between items-center">
              <p>{media}</p>
              <div className="w-full max-w-[200px] ml-4">
                {media === "Google" && <LineProgress arrNum={7} />}
                {media === "YouTube" && <LineProgress arrNum={4} />}
                {media === "Instagram" && <LineProgress arrNum={6} />}
                {media === "Pinterest" && <LineProgress arrNum={3} />}
                {media === "Facebook" && <LineProgress arrNum={8} />}
                {media === "Twitter" && <LineProgress arrNum={5} />}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
