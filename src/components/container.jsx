"use client"
import React from "react";

const Container = ({ children }) => {
  return <div className="w-full max-w-[1460px] mx-auto px-[20px] overflow-hidden">{children}</div>;
};

export default Container;