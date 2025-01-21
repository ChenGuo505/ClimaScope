import React from "react";
import ResultCard from "@/components/result/Card";
import ResultPanel from "@/components/result/Panel";

const ResultPage = async (props: {
  searchParams?: Promise<{
    street: string;
    city: string;
    state: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const street = searchParams?.street || "";
  const city = searchParams?.city || "";
  const state = searchParams?.state || "";
  if (!street || !city || !state) {
    return <div>Invalid search params</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="flex md:flex-row flex-col gap-2">
        <div className="md:basis-1/2 basis-full">
          <ResultCard
            street={"1150 W 36th Street"}
            city={"Los Angeles"}
            state={"CA"}
          />
        </div>
        <div className="md:basis-1/2 basis-full border border-red-500">
          <ResultPanel />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
