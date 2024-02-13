import React from "react";
import { useState } from "react";

function Header() {

  return (
    <>
    <header class='bg-black text-white space-x-4 flex-row'>
      <nav class=''>
        <ul class='flex justify-end'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header;