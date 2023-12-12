import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-primary text-center text-white dark:bg-neutral-600">

      <div className="w-full bg-primary-100 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tw-elements.com/"
        >
          TW elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
