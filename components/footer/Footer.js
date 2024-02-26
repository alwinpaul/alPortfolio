import GitHub from "./GitHub.js";
import Linkedin from "./Linkedin.js";
import Mail from "./Mail.js";

export default function Footer() {
  const currentYear = () => new Date().getFullYear();

  return (
    <footer className="flex items-center gap-4 justify-center flex-col h-40 bg-offWhite dark:bg-gray-800 shadow-3xl dark:shadow-gray-900 px-4">
      <div className="flex gap-6">
        <GitHub />
        <Mail />
        <Linkedin />
      </div>
    </footer>
  );
}
