import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div className="bg-black">
      <div className="w-full h-screen flex justify-center items-center">
        <Oval color="#ff0000" size={200} />
      </div>
    </div>
  );
}

export default Loading;