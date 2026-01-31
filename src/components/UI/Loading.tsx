import { Spinner } from "@heroui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed h-screen bg-black/10 backdrop-blur-md z-[999] inset-0 flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
