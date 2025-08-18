"use client";
import React from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/src/context/ThemeContext";

export const DarkModeToggle = () => {
  const { mode, toggleMode } = React.useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};
