"use client";
import React, { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

function RouterProvider({ children }: { children: ReactNode }) {
	return <BrowserRouter>{children}</BrowserRouter>;
}

export default RouterProvider;
