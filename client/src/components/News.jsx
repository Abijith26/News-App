import React from "react";

export default function News({ data }) {
  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>
          <p>{d.headline.main}</p>
          <span>{d.source}</span>
          <span>{d.byline.original}</span>
          <span>{d.pub_date.split("T")[0]}</span>
          <a href={d.web_url}>View</a>
        </div>
      ))}
    </div>
  );
}
