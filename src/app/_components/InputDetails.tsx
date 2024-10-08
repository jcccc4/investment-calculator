import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import FormInputs from "./form/FormInputs";
import { Data, initialData, Inputs } from "../page";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  setFormResult: Dispatch<SetStateAction<Inputs>>;
  tab: string;
};

function InputDetails({setFormResult, tab }: Props) {
  const form = useForm<Inputs>({
    defaultValues: initialData,
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.addOn = Number(data.addOn);
    data.startingAmount = Number(data.startingAmount);
    setFormResult(data);
  };

  return (
    <section>
      <section>
        <h2 className="text-2xl">Input Details</h2>
      </section>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          <div className={"flex flex-col gap-4"}>
            <FormInputs
              form={form}
              name={"startingAmount"}
              label={"Starting Amount"}
              sign="$"
            />
            <FormInputs
              form={form}
              name={"after"}
              label={"After"}
              sign="Years"
            />
            <FormInputs
              form={form}
              name={"returnRate"}
              label={"Return Rate"}
              sign="%"
            />
            <FormField
              control={form.control}
              name="compound"
              render={({ field }) => (
                <FormItem className={"relative mt-[-7px]"}>
                  <FormLabel className={"absolute top-0 left-3 px-1 bg-white"}>
                    Compound
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-40">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Annually">Annually</SelectItem>
                      <SelectItem value="Semiannually">Semiannually</SelectItem>
                      <SelectItem value="Quarterly">Quarterly</SelectItem>
                      <SelectItem value="Monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormInputs form={form} name={"addOn"} label={"Add-on"} sign="$" />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Contribute at the:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex m-0"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Beginning" />
                        </FormControl>
                        <FormLabel className="font-normal">Beginning</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="End" />
                        </FormControl>
                        <FormLabel className="font-normal">End</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="each"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Each:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex m-0"
                    >
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Month" />
                        </FormControl>
                        <FormLabel className="font-normal">Month</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-1 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Year" />
                        </FormControl>
                        <FormLabel className="font-normal">Year</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full justify-end mt-4">
            <Button type="submit">Calculate</Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default InputDetails;
