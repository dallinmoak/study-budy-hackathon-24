import axios from "axios";
// import key from "../public/personal-key.mjs";
import { useEffect } from "react";
const key = "";

export default function Popup() {
  const getUserId = async () => {
    const axiosReq = axios.create({
      baseURL: "https://byui.instructure.com/api/v1/users/self/activity_steam",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `bearer ${key}`,
      },
    });
    const res = await axiosReq.get("");
    console.log(res);
  };

  useEffect(() => {
    getUserId();
  }, []);

  return <h1>Hello from Popup</h1>;
}
