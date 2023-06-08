import React from "react";

export default function HeroBanner({ title }) {
  return (
    <div className="h-96 w-full flex items-center justify-center text-6xl bg-gradient-to-bl from-primary to-secondary font-black">
      {title ? title : "Hello"}
    </div>
  );
}
