"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Modal } from "components/Modal";
import { CallbackForm } from "components/CallbackForm";
import { Switcher } from "components/Switcher";
import clsx from "clsx";

function Header() {
  const t = useTranslations("Header");
  const tCallbackForm = useTranslations("CallbackForm");
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const isMobile = useMediaQuery("only screen and (max-width: 1023px)");
  useEffect(() => {
    // click outside
    function handleClickOutside(event: MouseEvent) {
      if (openMenu && event.target && !(event.target as Element).closest("header")) {
        setOpenMenu(false);
        document.body.style.overflow = "auto";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const descktopMenu = (
    <>
      <nav>
        <menu className="flex items-center gap-9 text-xl navigation-menu">
          <li>
            <Link href="#about">{t("navigation.about")}</Link>
          </li>
          <li>
            <Link href="#stages">{t("navigation.stages")}</Link>
          </li>
          <li className="relative">
            <Switcher />
          </li>
        </menu>
      </nav>
      <div className="flex items-center gap-5">
        <Link href="#vinSearch" className="flex items-center py-2.5 px-5">
          <svg className="w-3.5 h-3.5 mr-4">
            <use href="/sprite.svg#search" />
          </svg>
          {t("navigation.search")}
        </Link>
        <div className="py-2.5 px-4">
          <svg className="w-5 h-5">
            <use href="/sprite.svg#user" />
          </svg>
        </div>
      </div>
    </>
  );

  const mobileMenu = (
    <>
      <button
        className=""
        onClick={() => {
          setOpenMenu(!openMenu);
          if (openMenu) document.body.style.overflow = "auto";
          else document.body.style.overflow = "hidden";
        }}
      >
        <svg className="w-6 h-6">{openMenu ? <use href="/sprite.svg#close" /> : <use href="/sprite.svg#menu" />}</svg>
      </button>
      <nav
        className={clsx(
          "absolute bg-white z-[-1] top-[100%] w-full left-0 py-4 transition-transform duration-300",
          openMenu ? "translate-y-0" : "translate-y-[-200%]"
        )}
      >
        <menu className="flex items-center gap-8 text-xl navigation-menu flex-col ">
          <li>
            <Link
              href="#about"
              onClick={() => {
                setOpenMenu(false);
                document.body.style.overflow = "auto";
              }}
            >
              {t("navigation.about")}
            </Link>
          </li>
          <li>
            <Link
              href="#stages"
              onClick={() => {
                setOpenMenu(false);
                document.body.style.overflow = "auto";
              }}
            >
              {t("navigation.stages")}
            </Link>
          </li>
          <li className="relative">
            <Switcher />
          </li>
          <li>
            <Link
              href="#vinSearch"
              className="flex items-center py-2.5 px-5"
              onClick={() => {
                setOpenMenu(false);
                document.body.style.overflow = "auto";
              }}
            >
              <svg className="w-3.5 h-3.5 mr-4">
                <use href="/sprite.svg#search" />
              </svg>
              {t("navigation.search")}
            </Link>
          </li>
          <li>
            <div className="py-2.5 px-4">
              <svg className="w-5 h-5">
                <use href="/sprite.svg#user" />
              </svg>
            </div>
          </li>
        </menu>
      </nav>
    </>
  );

  return (
    <>
      <header className="pt-9 pb-6 bg-white sticky top-0 font-secondary z-20 shadow-sm">
        <div className="container">
          <div className="max-w-[1152px] flex items-center justify-between">
            <Link href="/">
              <span className="uppercase font-bold text-3xl">logo</span>
            </Link>
            {isMobile ? mobileMenu : descktopMenu}
          </div>
        </div>
        <Modal selector="modal" openModal={openModal} setOpenModal={setOpenModal}>
          <CallbackForm t={tCallbackForm} vin={true} setCloseModal={setOpenModal} />
        </Modal>
      </header>
      {isMobile && (
        <div
          className={clsx("overlay", openMenu ? "pointer-events-auto !opacity-100" : "pointer-events-none	opacity-0")}
        ></div>
      )}
    </>
  );
}

export default Header;
