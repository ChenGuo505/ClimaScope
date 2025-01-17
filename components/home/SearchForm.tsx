"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { statesInUSA } from "@/constants";

const formSchema = z.object({
  street: z.string().nonempty({
    message: "Street is required",
  }),
  city: z.string().nonempty({
    message: "City is required",
  }),
  state: z.string().nonempty({
    message: "State is required",
  }),
});

const SearchForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street: "",
      city: "",
      state: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    const { street, city, state } = data;
    router.push(`/result?street=${street}&city=${city}&state=${state}`);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        onReset={() => form.reset()}
        className="md:space-y-10 space-y-3 my-4"
      >
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold">Street</FormLabel>
              <FormControl>
                <Input placeholder="Enter your street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:grid md:grid-cols-2 md:gap-4 md:space-y-0 space-y-5">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your city" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-bold">State</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {statesInUSA.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {`${state.label}, ${state.value}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex md:flex-row flex-col justify-center md:space-x-4">
          <Button
            type="submit"
            className="md:basis-1/6 my-1 bg-blue-500 hover:bg-blue-600 text-lg font-bold"
          >
            Search
          </Button>
          <Button
            type="reset"
            className="md:basis-1/6 my-1 bg-teal-400 hover:bg-teal-500 text-lg font-bold"
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
