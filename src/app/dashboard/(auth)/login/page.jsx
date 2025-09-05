"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import Link from "next/link";
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => signIn("google", { redirectTo: "/dashboard" })}>
        Click to login
      </button>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
            required
          />
          <button className={styles.button}>Login</button>
        </form>
        <Link href="/dashboard/login" className={styles.link}>
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
