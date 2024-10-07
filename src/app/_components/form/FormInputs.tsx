import React from "react";
import { FieldPath, UseFormReturn } from "react-hook-form";
import { Inputs } from "@/app/page";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: UseFormReturn<Inputs>;
  name: FieldPath<Inputs>;
  label: string;
  sign?: string;
};

export default function FormInputs({ form, name, label, sign }: Props) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={"relative mt-[-7px]"}>
          <FormLabel className={"absolute top-0 left-3 px-1 bg-white z-20"}>
            {label}
          </FormLabel>
          <FormControl>
            <div className="relative flex w-40">
              <Input className={"z-10"} {...field} />
              {sign && (
                <div className="absolute right-0 flex h-full justify-end items-center pr-3 ">
                  {sign}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
