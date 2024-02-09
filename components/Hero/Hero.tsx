"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "components/Modal";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const t = useTranslations("Hero");
  const cards = ["experiance", "secure", "garanty"] as const;
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="hero" className="mb-12 mt-12 lg:mb-24 xl:mt-48 md:mt-24 ">
      <div className="container relative">
        <h1 className="text-h1 font-bold uppercase relative pb-4 lg:mb-4 max-w-[895px] after:w-[500px] after:h-[2px] after:bg-accent after:absolute after:bottom-0 after:left-0">
          {t("title") as string}
        </h1>
        <p className="max-w-[505px] text-xl font-semibold mb-11">{t("subtitle")}</p>
        <Image
          className="top-32 right-20 absolute z-[-1]"
          width={489}
          height={296}
          src={"/hero-desktop.png"}
          alt="hero img"
        />
        <ul className="grid grid-cols-3 gap-4 md:max-w-[758px] items-stretch md:mb-8 lg:mb-16">
          {cards.map((card) => (
            <li
              key={card}
              className="py-2 px-2 bg-white self-stretch text-center text-xs border-2 border-solid border-black rounded-xl"
            >
              <svg className="w-8 h-8 mx-auto mb-1">
                <use href={`/sprite.svg#${card}`} />
              </svg>
              <h2 className="font-bold pb-5 boder-2 border-b-2 border-black border-solid hero-card__title">
                {t(`${card}.title`) as string}
              </h2>
              <p className="pt-5">{t(`${card}.desc`)}</p>
            </li>
          ))}
        </ul>
        <div className="xl:max-w-[758px] flex items-center">
          <button
            className="button rounded group/btn md:mr-12"
            onClick={() => {
              setShowModal(true);
            }}
          >
            {t("button")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="ml-4 group-hover/btn:translate-x-1 transition-transform duration-300 ease-in-out"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <ul className="flex items-center gap-8 mr-24">
            <li>
              <Link href="#">
                <svg className="w-5 h-5">
                  <use href="/sprite.svg#viber" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg className="w-5 h-5">
                  <use href="/sprite.svg#whatsapp" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg className="w-5 h-5">
                  <use href="/sprite.svg#telegram" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg className="w-5 h-5">
                  <use href="/sprite.svg#facebook" />
                </svg>
              </Link>
            </li>
          </ul>
          <button className="after:absolute after:w-12 after:h-12 after:rounded-full after:border-[1px] after:border-black after:border-solid relative flex items-center justify-center after:animate-ping-slow">
            <svg className="w-10 h-10">
              <use href="/sprite.svg#phone" />
            </svg>
          </button>
          <Modal selector="modal" show={showModal}>
            asd
          </Modal>
        </div>
      </div>
    </section>
  );
}

export default Hero;
