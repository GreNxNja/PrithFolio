import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024-25 GreNxNja. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        Next.js, confusion and caffeine.{" "}
        <span role="img" aria-label="Indian flag">
          &#x1F1EE;&#x1F1F3;
        </span>
      </p>
    </footer>
  );
}
