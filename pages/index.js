import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import styles from "../styles/Home.module.css";

export default function Home() {
  const url = buildUrl("galaxy_vwleg5", {
    cloud: {
      cloudName: "coding-to-music",
    },
    transformations: {
      effect: {
        name: "pixelate",
        value: 40,
      },
    },
  });

  const urlBlurred = buildUrl("galaxy_vwleg5", {
    cloud: {
      cloudName: "coding-to-music",
    },
    transformations: {
      effect: "blur:1000",
      quality: 1,
    },
  });

  const [image, setImage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setImage(url);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudinary Images Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Out of this world!</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/galaxy.jpg" alt="Galaxy" width={400} height={250} />
            <h3>Local Image</h3>
          </div>

          <div className={styles.card}>
            <Image
              src="https://res.cloudinary.com/coding-to-music/image/upload/v1691040476/galaxy_vwleg5.jpg"
              alt="Galaxy"
              width={400}
              height={250}
            />
            <h3>Cloudinary - Static</h3>
          </div>

          <div className={styles.card}>
            <Image src={url} alt="Galaxy" width={400} height={250} />
            <h3>Cloudinary - Dynamic</h3>
          </div>

          <div className={styles.card}>
            <div
              style={{
                position: "relative",
                height: 0,
                paddingTop: `${(750 / 1000) * 100}%`,
                backgroundImage: `url(${urlBlurred})`,
                backgroundPosition: "center center",
                backgroundSize: `100%`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                {image && (
                  <Image src={image} alt="Galaxy" width={400} height={250} />
                )}
              </div>
            </div>
            <h3>Cloudinary - Blurred Placeholder</h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
