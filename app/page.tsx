"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

export default function HomePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      street: "",
      city: "",
      state: "",
    },
  });

  function handleSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <div className="flex flex-row">
      <main className="mx-auto md:basis-3/4 basis-5/6">
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="md:space-y-10 space-y-3 my-4"
          >
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-bold">Street</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your street address"
                      {...field}
                      className="rounded-full"
                    />
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
                      <Input
                        placeholder="Enter your city"
                        {...field}
                        className="rounded-full"
                      />
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
                    <FormControl>
                      <Input
                        placeholder="Enter your state"
                        {...field}
                        className="rounded-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex md:flex-row flex-col justify-center md:space-x-4">
              <Button
                type="submit"
                className="rounded-full md:basis-1/6 my-1 bg-blue-500 hover:bg-blue-600 text-lg font-bold"
              >
                Search
              </Button>
              <Button
                type="reset"
                className="rounded-full md:basis-1/6 my-1 bg-teal-400 hover:bg-teal-500 text-lg font-bold"
              >
                Clear
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
}
