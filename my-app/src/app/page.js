import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        alignItems: "center",
        justifyItems: "center",
        padding: "5rem 2rem 5rem 2rem",
        fontFamily: "monaco",
        backgroundColor: "lightsalmon",
        gap: "4rem",
      }}
    >
      {/* Profile Image */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src="/egg.jpg"
          alt="Profile Picture"
          width={200}
          height={200}
          style={{
            borderRadius: "50%",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Name and tagline */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1F2937", marginTop: "1rem" }}>
          Hi, I'm David
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#4B5563", marginTop: "0.5rem", maxWidth: "600px" }}>
          hello world hello world hello world hello world hello world hello world
        </p>
      </div>

      {/* Buttons */}
      <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="dancing_a.gif">
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid #f4e1d2",
              color: "#bc5a45",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "box-shadow 0.2s ease-in-out",
            }}
          >
            Projects
          </button>
        </Link>

        <Link href="dog_laugh.gif">
          <button
            style={{
              backgroundColor: "white",
              border: "1px solid #f4e1d2",
              color: "#bc5a45",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "box-shadow 0.2s ease-in-out",
            }}
          >
            About Me
          </button>
        </Link>
      </div>
    </main>
  );
}