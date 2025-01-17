import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-6 md:bg-gradient-to-r bg-gradient-to-b from-blue-500 to-teal-400 from-40% rounded-3xl md:h-60 content-end">
      <div className="mx-3 flex flex-row md:text-4xl text-3xl font-bold text-primary-foreground py-4">
        <Image
          src={"/clima-scope.svg"}
          width={90}
          height={90}
          alt="clima-scope"
        />
        <h1 className="content-center">ClimaScope</h1>
      </div>
    </div>
  );
};

export default Banner;
