import React from "react";
import { FieldPath, UseFormReturn } from "react-hook-form";
import { Inputs } from "@/app/page";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: UseFormReturn<Inputs>;
  name: FieldPath<Inputs>;
  label: string;
};

export default function FormInputs({ form, name, label }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={"relative pt-[7px] mt-[-7px]"}>
          <FormLabel className={"absolute top-0 left-3 px-1  bg-white"}>
            {label}
          </FormLabel>
          <FormControl>
          <Input placeholder="shadcn" {...field} />
          </FormControl>
          {/* <FormDescription>This is your public display name.</FormDescription> */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
