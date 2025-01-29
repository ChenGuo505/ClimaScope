import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ResultPanel = () => {
  return (
    <Card className="h-[220px]">
      <CardHeader>
        <CardTitle>Weather Data</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="md:p-6 md:pt-0 p-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-3 basis-1/4 items-center">
            <Label className="text-sm">Humidity</Label>
            <Image
              src={"/Humidity.png"}
              width={50}
              height={50}
              alt="humidity"
            />
            <Label className="text-sm">77 %</Label>
          </div>
          <div className="flex flex-col gap-3 basis-1/4 items-center">
            <Label className="text-sm">Wind Speed</Label>
            <Image
              src={"/WindSpeed.png"}
              width={50}
              height={50}
              alt="humidity"
            />
            <Label className="text-sm">5 mph</Label>
          </div>
          <div className="flex flex-col gap-3 basis-1/4 items-center">
            <Label className="text-sm">Visibility</Label>
            <Image
              src={"/Visibility.png"}
              width={50}
              height={50}
              alt="humidity"
            />
            <Label className="text-sm">10 miles</Label>
          </div>
          <div className="flex flex-col gap-3 basis-1/4 items-center">
            <Label className="text-sm">Pressure</Label>
            <Image
              src={"/Pressure.png"}
              width={50}
              height={50}
              alt="humidity"
            />
            <Label className="text-sm">29.92 inHg</Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultPanel;
