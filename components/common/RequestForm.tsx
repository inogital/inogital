"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { PiCaretUpDownBold } from "react-icons/pi";
import { BsCheckLg } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";



import toast from "react-hot-toast";
import { useState } from "react";
import DialogWrapper from "./DialogWrapper";
import { servicesData } from "@/app/data/dummy-data";
import { Input } from "../ui/input";

const services = [
    "Google Services", "Software & Web Development", "Tech Training", "Network Services"
]


const RequestForm = () => {
  
  const [open, setOpen] = useState(false);

  const formSchema = z.object({
    notes: z.string().max(500),

    services: z.string({
      required_error: "Please select a Service.",
    }),

    email: z.string({
      required_error: "An email is required.",
    }),
    phone: z.string({
      required_error: "An phone number is required.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      notes: "",
    }, 
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formattedValues = {
        ...values,
       
      };

      const res = await fetch("/api/leave", {
        method: "POST",
        body: JSON.stringify(formattedValues),
      });

      if (res.ok) {
        toast.success("Request Submitted", { duration: 4000 });
        setOpen(false)
        form.reset()
      } else {
        const errorMessage = await res.text();

        toast.error(`An error occured ${errorMessage}`, { duration: 6000 });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An Unexpected error occured");
    }
  }

  return (
    <DialogWrapper
      btnTitle="Get Started"
      btnClr="bg-rose-500"
      title="Request a service"
      descr="Select the appropriate service you need assistance on."
      isBtn={true}
      open={open}
      setOpen={() => setOpen(!open)}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Services </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          " justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? servicesData.find(
                              (service) => service.value === field.value
                            )?.label
                          : "Select a service"}
                        <PiCaretUpDownBold className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search a service..." />
                      <CommandEmpty>No service found.</CommandEmpty>
                      <CommandGroup>
                        {servicesData.map((service) => (
                          <CommandItem
                            value={service.label}
                            key={service.value}
                            onSelect={() => {
                              form.setValue("services", service.value);
                            }}
                          >
                            <BsCheckLg
                              className={cn(
                                "mr-2 h-4 w-4",
                                service.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {service.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Email Address</FormLabel>
                <FormControl>
                  <Input type="email"  placeholder="Email" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Phone Number</FormLabel>
                <FormControl>
                  <Input type="phone"  placeholder="Phone" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

         

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notes</FormLabel>
                <FormControl>
                  <Textarea placeholder="Notes" {...field} />
                </FormControl>
                <FormDescription>
                  Add extra notes to support your request.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
          
        </form>
      </Form>
    </DialogWrapper>
  );
};

export default RequestForm;