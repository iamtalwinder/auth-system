import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // window.addEventListener("storage", () => {
    //   const USER_STATUS = localStorage.getItem("user_status");
    //   console.log(USER_STATUS);
    //   if (USER_STATUS === "signed_out") {
    //     router.push("/signin");
    //   } else if (USER_STATUS === "signed_in") {
    //     router.push("/dashboard");
    //   }
    // });

    const isAuthorized = async () => {
      try {
        await axios.get("/api/test");
        router.push("/dashboard");
      } catch (err) {
        router.push("/signin");
      }
    };
    isAuthorized();
  }, []);

  return (
    <>
      <Head>
        <title>Auth System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
