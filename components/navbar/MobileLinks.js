import Link from "next/link.js";

export default function MobileLinks({ close }) {
  return (
    <>
      <Link href="#about_section" scroll={false}>
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          About
        </a>
      </Link>

      <Link href="#experience_section" scroll={false}>
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          Experience
        </a>
      </Link>

      <Link href="#project_section" scroll={false}>
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          Projects
        </a>
      </Link>

      <Link href="#contact_section" scroll={false}>
        <a
          className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
          onClick={close}
        >
          Contact
        </a>
      </Link>

      <a
        href="/Alwin_Paul_Resume.pdf"
        rel="noreferrer"
        target={"_blank"}
        className="block w-0 px-3 py-2 font-medium hover:text-green dark:hover:text-mustard"
        onClick={close}
      >
        Resume
      </a>
    </>
  );
}
