import Image from "next/image";
import placeholder from "../assets/placeholder.png";

export const Avatar = ({ className }: { className?: string }) => {
  return (
    <Image
      src={placeholder.src}
      className={`rounded-full ${className}`}
      alt="no"
      width={"32"}
      height={"32"}
    />
  );
};
