import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <React.Fragment>
      <header className="has-text-centered block">
        <h1 className="title">Awesome Motive Blog</h1>
      </header>
      <main className="container">
        <Outlet></Outlet>
      </main>
    </React.Fragment>
  );
}
