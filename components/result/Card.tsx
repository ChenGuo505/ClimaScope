"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ResultCard = (props: { street: string; city: string; state: string }) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Card>
      <CardHeader className="py-4">
        <div className="flex flex-row">
          <div className="flex flex-col basis-4/5">
            <CardTitle>{`${props.city}, ${props.state}`}</CardTitle>
            <CardDescription>{props.street}</CardDescription>
          </div>
          <div className="basis-1/5">
            <Image
              src={"/weather-icon/Mostly Clear.png"}
              width={50}
              height={50}
              alt="clima-scope"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row">
          <div className="flex flex-col md:basis-4/5 basis-3/4">
            <div className="basis-full">
              <Label>Tempareture Max: 77 °F</Label>
            </div>
            <div className="basis-full">
              <Label>Tempareture Min: 77 °F</Label>
            </div>
          </div>
          <div className="md:basis-1/5 text-3xl">
            <Label className="text-3xl">77 °F</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-blue-500" onClick={handleClick}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResultCard;
