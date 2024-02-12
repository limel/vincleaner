"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "components/Modal";
import { CallbackForm } from "components/CallbackForm";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const t = useTranslations("Hero");
  const tCallbackForm = useTranslations("CallbackForm");
  const cards = ["experiance", "secure", "garanty"] as const;
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="hero" className="mb-12 mt-12 lg:mb-24 xl:mt-48 md:mt-24 ">
      <div className="container relative flex flex-col">
        <div className="mb-8 lg:mb-11  flex flex-col">
          <h1 className="text-xl lg:text-h1 mb-2 font-bold uppercase relative pb-4 lg:mb-4 max-w-[895px] lg:after:w-[500px] lg:after:h-[2px] lg:after:bg-accent lg:after:absolute lg:after:bottom-0 lg:after:left-0">
            {t("title") as string}
          </h1>
          <p className="order-last lg:order-none max-w-[505px] text-xl font-semibold ">{t("subtitle")}</p>
          <Image
            className="lg:top-32 lg:right-20 lg:absolute z-[-1] mb-2 lg:mb-0 mx-auto"
            width={489}
            height={296}
            src={"/hero-desktop.png"}
            alt="hero img"
          />
        </div>
        <ul className="flex order-last lg:order-none flex-col items-center lg:grid w-full lg:grid-cols-3 gap-4 lg:max-w-[758px] lg:items-stretch md:mb-8 lg:mb-16">
          {cards.map((card) => (
            <li
              key={card}
              className="max-w-[250px] mx-auto lg:max-w-none py-2 px-2 bg-white self-stretch text-center text-xs border-2 border-solid border-black rounded-xl"
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
            className="button rounded group/btn lg:mr-12 mb-6 lg:mb-0 lg:ml-0 mx-auto"
            onClick={() => {
              setOpenModal(true);
              document.body.style.overflow = "hidden";
            }}
          >
            {t("button")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="ml-2 lg:ml-4 group-hover/btn:translate-x-1 transition-transform duration-300 ease-in-out"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </button>
          <ul className="hidden lg:flex items-center gap-8 mr-24">
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
          <button className="hidden after:absolute after:w-12 after:h-12 after:rounded-full after:border-[1px] after:border-black after:border-solid relative lg:flex items-center justify-center after:animate-ping-slow">
            <svg className="w-10 h-10">
              <use href="/sprite.svg#phone" />
            </svg>
          </button>
        </div>
      </div>
      <Modal selector="modal" openModal={openModal} setOpenModal={setOpenModal}>
        <CallbackForm t={tCallbackForm} vin={true} />
      </Modal>
    </section>
  );
}

export default Hero;
