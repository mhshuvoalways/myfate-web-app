import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const TopBar = () => {
  const [language, setLanguage] = useState("");
  const router = useRouter();

  const languageHandler = (value) => {
    setLanguage(value);
    typeof window !== "undefined" && localStorage.setItem("language", value);
    if (value === "jp") {
      window.location.href = "/jp";
    } else {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    setLanguage(
      typeof window !== "undefined" && localStorage.getItem("language")
    );
  }, []);

  return (
    <div className="border-b border-gray-100">
      <div className="mycontainer mx-auto flex justify-end">
        <select
          className="text-xs outline-0"
          onChange={(e) => languageHandler(e.target.value)}
          value={language}
        >
          <option value={"en"}>English</option>
          <option value={"jp"}>Japanese</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
