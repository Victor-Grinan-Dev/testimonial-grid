import React from "react";
import Image from "../functions/Image";

const Card = (props) => {
  return (
    <div className={`relative flex flex-col p-10 rounded-xl ${props.background} ${props.textColor} shadow-2xl ${props.grid} `}>
      <Image name="quotes" type="quotes"/>
      <div className="flex  z-10 space-x-4 w-full">
        <Image type="user" name={props.image} />

        <div className="text-sm">
            <h4 className="opacity-90 ">{props.name}</h4>
            <p className="opacity-50">{props.position}</p>
        </div>
      </div>

      <p className="realative z-10 mt-6 text-xl line-clamp-6">
        {props.text1}
      </p>

      <p className="mt-6 opacity-60 line-clamp-6">
        {props.text2}
      </p>
    </div>
  );
};

export default Card;
