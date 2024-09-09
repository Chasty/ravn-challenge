"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Avatar } from "./Avatar";

interface SearchInputProps {
  placeholder?: string;
}

export default function SearchInput({
  placeholder = "Search",
}: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const handleClear = () => setInputValue("");

  return (
    <div
      className={`relative flex h-16 items-center w-full  rounded-2xl bg-neutral-4`}
    >
      {/* <Search className="absolute left-3 text-gray-500" size={20} /> */}
      <div className="absolute left-5 text-neutral-2">
        <Icon name="search" />
      </div>
      <input
        type="text"
        className="w-full bg-transparent text-white placeholder-gray-500 px-16 py-3 focus:outline-none"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <div className="absolute right-5 flex  gap-8 items-center">
        {isFocused && inputValue && (
          <button
            onClick={handleClear}
            className="text-gray-500 hover:text-gray-400 focus:outline-none"
          >
            <div className="text-neutral-2">
              <Icon name="clock" />
            </div>
          </button>
        )}
        <div className="text-neutral-2">
          <Icon name="bell" />
        </div>
        <Avatar className="w-[40px] h[400px]" />
      </div>
    </div>
  );
}
