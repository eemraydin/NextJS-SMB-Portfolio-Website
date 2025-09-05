"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.email}`,
    fetcher
  );

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.email,
        }),
      });

      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // disappears after 3s

      // Clear form
      e.target.reset();

      // Re-fetch posts
      mutate();

      event.target.reset;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        {showPopup && (
          <div className={styles.popup}>Post created successfully!</div>
        )}

        <div className={styles.posts}>
          <h1 className={styles.postsTitle}>Your Posts</h1>
          {isLoading
            ? "Loading.."
            : data.map((post) => (
                <div className={styles.postContainer} key={post._id}>
                  <div className={styles.post}>
                    <div className={styles.imgContainer}>
                      <Image src={post.img} alt="" width={200} height={100} />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <span
                      className={styles.delete}
                      onClick={() => handleDelete(post._id)}
                    >
                      x
                    </span>
                  </div>
                </div>
              ))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input type="text" placeholder="Image" className={styles.input} />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            row="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
