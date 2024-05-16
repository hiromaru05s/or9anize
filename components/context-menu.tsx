"use client";

import React, { useEffect, useState } from "react";

const ContextMenuHandler: React.FC = () => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setMenuPosition({ x: event.clientX, y: event.clientY });
      setShowMenu(true);
      document.body.classList.add("context-menu");
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (event.button !== 2) { // 右クリック以外の場合
        setShowMenu(false);
        document.body.classList.remove("context-menu");
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.getSelection()?.toString() || "");
      alert("Copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    setShowMenu(false);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      alert(`Pasted text: ${text}`);
    } catch (err) {
      console.error("Failed to paste: ", err);
    }
    setShowMenu(false);
  };

  const handleSaveAs = () => {
    alert("Save as...");
    setShowMenu(false);
  };

  const handleReload = () => {
    window.location.reload();
    setShowMenu(false);
  };

  const handlePrint = () => {
    window.print();
    setShowMenu(false);
  };

  const handleInspect = () => {
    alert("Open developer tools to inspect.");
    setShowMenu(false);
  };

  return (
    <div
      className={`custom-context-menu ${showMenu ? "show" : ""}`}
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <ul>
        <li onClick={handleCopy}>Copy</li>
        <li onClick={handlePaste}>Paste</li>
        <li onClick={handleSaveAs}>Save as...</li>
        <li onClick={handleReload}>Reload</li>
        <li onClick={handlePrint}>Print</li>
        <li onClick={handleInspect}>Inspect</li>
      </ul>
    </div>
  );
};

export default ContextMenuHandler;
