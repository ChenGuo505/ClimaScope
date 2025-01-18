import ResultHeader from "@/components/result/Header";
import React from "react";

const ResultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <ResultHeader />
      {children}
    </div>
  );
};

export default ResultLayout;
