import React from "react";
import ImageShow from "./ImageShow";

function ImageList({ arr }) {

  return (
    <div className="flex flex-row gap-4 flex-wrap">
      {
      arr.map((img,index) => {
        return <ImageShow imgLink={img.urls.small} dowlandLink={img.urls.full} key={index}/>
      })}
    </div>
  );
}

export default ImageList;
