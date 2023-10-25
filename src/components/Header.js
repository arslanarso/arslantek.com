import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

import {
  Email,
  Github,
  Linkedin,
  Medium,
  Twitter,
  Coffee,
} from "../assets/icons";

export default function Header() {
  const router = useRouter();

  const isActiveLink = (path) => {
    return router.pathname === path ? "nav-active" : "";
  };

  return (
    <header className="text-color container flex pt-8 items-center justify-between pb-4 border-b border-color px-3">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <Image
            alt="Profile Picture"
            src="/profile.png"
            width={100}
            height={100}
            className="hidden rounded-full sm:inline-block"
          />
        </Link>
        <div>
          <Link href={"/"}>
            <h1 className="h5 sm:h4">Samet Arslan Tek</h1>
          </Link>
          <div className="flex flex-col gap-1">
            <Link href={"/"}>
              <p className="text-sm sm:text-base">
                Mobile Application Developer
              </p>
            </Link>
            <div className="flex gap-2">
              <a
                aria-label="Email link"
                href="mailto:official.arslan@outlook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Email />
              </a>
              <a
                aria-label="Github profile link"
                href="https://github.com/arslanarso"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>
              <a
                aria-label="Linkedin profile link"
                href="https://www.linkedin.com/in/sametarslantek/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin />
              </a>
              {/* <a
                aria-label="Medium profile link"
                href="https://altankurt.medium.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Medium /> 
              </a>*/}
              <a
                aria-label="Twitter profile link"
                href="https://twitter.com/arslanarso"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Twitter />
              </a>
              {/* <a
                aria-label="Buy me a coffee profile link"
                href="https://www.buymeacoffee.com/altankurt"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Coffee />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <nav>
        <ul className="relative flex flex-col sm:px-0 gap-1 sm:flex-row sm:gap-8">
          <li>
            <Link
              className={`nav-text ${
                router.pathname === "/" ? isActiveLink("/") : ""
              }`}
              href={"/"}
            >
              Homepage
            </Link>
          </li>
          <li>
            <Link
              className={`nav-text ${
                router.pathname === "/about" ? isActiveLink("/about") : ""
              }`}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`nav-text ${
                router.pathname === "/projects" ? isActiveLink("/projects") : ""
              }`}
              href={"/projects"}
            >
              Projects
            </Link>
          </li>
          {/* <li>
            <Link
              className={`nav-text ${
                router.pathname.includes("/blog")
                  ? isActiveLink("/blog/posts")
                  : ""
              }`}
              href={"/blog/posts"}
            >
              Blog
            </Link>
          </li> */}
          <li>
            <Link
              className={`nav-text`}
              href={
                "https://drive.google.com/file/d/1UU1WEptCWuu472B3FcdpNLjkm3V9Tejj/view?usp=sharing"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              CV
            </Link>
          </li>
          <li className="max-sm:absolute max-sm:bottom-6 max-sm:-left-10">
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
}
