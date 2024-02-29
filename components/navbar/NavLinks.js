import StyledNavLink from "./StyledNavLink.js";
import Link from "next/link.js";

export default function NavLinks() {
  return (
    <div className="gap-6 items-center hidden md:flex">
      <ul className={`gap-6 capitalize text-lg flex items-center`}>
        <StyledNavLink>
          <Link href="#about_section" scroll={false}>About</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link href="#experience_section" scroll={false}>Experience</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link href="#project_section" scroll={false}>projects</Link>
        </StyledNavLink>
        <StyledNavLink>
          <Link href="#contact_section" scroll={false}>Contact</Link>
        </StyledNavLink>
        <div className='border rounded-lg cursor-pointer w-24 p-1 text-center text-sm m-auto hover:bg-highlight hover:border-0 text-slate-200'>
          <a
            href="/Alwin_Paul_Resume.pdf"
            rel="noreferrer"
            target={"_blank"}
          >
            resume
          </a>
        </div>
      </ul >
    </div >
  );
}
