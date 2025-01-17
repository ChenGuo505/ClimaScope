import React from "react";

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
    <div>
      ResultPage
      <div>Street: {street}</div>
      <div>City: {city}</div>
      <div>State: {state}</div>
    </div>
  );
};

export default ResultPage;
