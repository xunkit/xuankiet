import { Link } from "@/i18n/routing";
import * as React from "react";

function Header() {
  return (
    <div className="bg-[--primary-300] mx-[16px] px-8 xl:px-12 py-4 my-8 rounded-full flex justify-between">
      <Link href="/" className="font-bold">
        xuankiet
      </Link>
      <div className="flex text-[var(--primary-700)]">
        <ul>
          <Link href="/projects" className="hover:text-[var(--neutral-400)]">
            Projects
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
