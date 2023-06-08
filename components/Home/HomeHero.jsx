import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function HomeHero() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("/images/bg.png")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl flex flex-col items-center">
          <h1 className="mb-5 text-5xl font-bold">
            Don't have a Playground to Practice your best game?
          </h1>
          <Link href={"/apply"} className="btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
