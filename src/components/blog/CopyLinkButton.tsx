"use client";

import { useState } from "react";

export default function CopyLinkButton() {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(location.href);
      setStatus("Link copied.");
    } catch {
      setStatus("Copy failed. Copy the address from your browser.");
    }
  }

  return (
    <p style={{ marginTop: 28 }}>
      <button className="btn" type="button" onClick={copy}>
        Copy link
      </button>{" "}
      <span role="status">{status}</span>
    </p>
  );
}
