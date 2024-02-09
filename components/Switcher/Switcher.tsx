"use client";
import { useLocale } from "next-intl";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { locales } from "i18n";
import Link from "next/link";

function Switcher() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);
  const locale = useLocale();

  // click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={ref}>
      <span
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        className="cursor-pointer uppercase"
      >
        {locale}
      </span>
      <ul
        className={clsx("absolute top-6 left-[-8px] bg-white p-2 shadow-lg rounded-md", {
          hidden: !isOpened,
        })}
      >
        {locales.map(
          (localeCode) =>
            localeCode !== locale && (
              <li key={localeCode}>
                <Link href={`/${localeCode}`} locale={localeCode} className="uppercase">
                  {localeCode}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default Switcher;
