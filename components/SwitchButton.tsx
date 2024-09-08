"use client";

import { useState } from "react";
import { Button } from "./Button";

type SwitchButtonProps = {
  value: "off" | "on";
  onClickOption: (option: string) => void;
};

export const SwitchButton = ({ value, onClickOption }: SwitchButtonProps) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const off = selectedOption === "off" ? "selected" : undefined;
  const on = selectedOption === "on" ? "selected" : undefined;

  return (
    <div className="flex gap-2">
      <Button
        onPress={() => {
          onClickOption("off");
          setSelectedOption("off");
        }}
        icon="hamburguer"
        typeStyle="secondary"
        state={off}
      />
      <Button
        onPress={() => {
          onClickOption("on");
          setSelectedOption("on");
        }}
        icon="dashboard"
        typeStyle="secondary"
        state={on}
      />
    </div>
  );
};
