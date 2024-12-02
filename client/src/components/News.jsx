import React from "react";

export default function News({ data }) {
  return (
    <div>
      {data.map((d, index) => (
        <div
          key={index}
          className="flex p-5 text-black bg-rose-200 rounded-md mb-3"
        >
          <div className="flex-grow">
            <p className="line-clamp-3">{d.headline.main}</p>
            <div className="flex gap-5 m-2 justify-start">
              <span>Source:{d.source}</span>
              <span>{d.byline.original}</span>
              <span>Date: {d.pub_date.split("T")[0]}</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a href={d.web_url}>View</a>
          </div>
        </div>
      ))}
    </div>
  );
}
