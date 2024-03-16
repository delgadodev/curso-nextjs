import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span>Teslo</span>
        <span> | Shop</span>
        <span></span>
      </Link>
    </div>
  );
};
