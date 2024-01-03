import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const TopBar = () => {
  const [language, setLanguage] = useState("");
  const { i18n } = useTranslation();
  const router = useRouter();

  const languageHandler = (value) => {
    setLanguage(value);
    typeof window !== "undefined" && localStorage.setItem("language", value);
    langChange(value);
  };

  const langChange = (value) => {
    if (value === "jp") {
      router.push("/jp", null, { locale: "jp" });
      i18n.changeLanguage("jp");
    } else {
      router.push("/", null, { locale: "en" });
      i18n.changeLanguage("en");
    }
  };

  useEffect(() => {
    const getLang =
      typeof window !== "undefined" && localStorage.getItem("language");
    setLanguage(getLang);
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
