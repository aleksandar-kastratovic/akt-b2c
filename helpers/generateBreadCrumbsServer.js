"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const GenerateBreadCrumbsServer = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="text-[0.875rem] max-lg:hidden font-light">
      <Link href="/">Početna</Link>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          <span className="px-3"> / </span>
          <span className={index === segments.length - 1 ? "font-medium" : ""}>
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GenerateBreadCrumbsServer;
