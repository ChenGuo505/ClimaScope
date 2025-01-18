import React from "react";
import Image from "next/image";

const ResultHeader = () => {
  return (
    <div className="my-6 md:bg-gradient-to-r bg-gradient-to-b from-blue-500 to-teal-400 from-40% rounded-2xl">
      <div className="mx-3 flex flex-row md:text-xl text-xl font-bold text-primary-foreground py-2">
        <Image
          src={"/clima-scope.svg"}
          width={50}
          height={50}
          alt="clima-scope"
        />
        <h1 className="content-center">ClimaScope</h1>
      </div>
    </div>
  );
};

export default ResultHeader;
