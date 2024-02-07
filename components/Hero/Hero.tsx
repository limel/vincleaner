import { useTranslations } from "next-intl";
import Image from "next/image";

function Hero() {
  const t = useTranslations("Hero");

  const cards = ["experiance", "secure", "garanty"] as const;
  console.log(cards[0]);
  return (
    <section id="hero">
      <div className="container pt-48 relative">
        <h1 className="text-h1 font-bold uppercase relative pb-4 lg:mb-4 max-w-[895px] after:w-[500px] after:h-[2px] after:bg-accent after:absolute after:bottom-0 after:left-0">
          {t("title")}
        </h1>
        <p className="max-w-[505px] text-xl font-semibold mb-11">{t("subtitle")}</p>
        <Image
          className="top-80 right-20 absolute z-[-1]"
          width={489}
          height={296}
          src={"/hero-desktop.png"}
          alt="hero img"
        />
        <ul className="grid grid-cols-3 gap-4 max-w-[758px] items-stretch lg:mb-16">
          {cards.map((card) => (
            <li
              key={card}
              className="py-2 px-2 bg-white self-stretch text-center text-xs border-2 border-solid border-black rounded-xl"
            >
              <svg className="w-8 h-8 mx-auto mb-1">
                <use href={`/sprite.svg#${card}`} />
              </svg>
              <h2 className="font-bold pb-5 boder-2 border-b-2 border-black border-solid">{t(`${card}.title`)}</h2>
              <p className="pt-5">{t(`${card}.desc`)}</p>
            </li>
          ))}
        </ul>
        <button className="button rounded">
          {t("button")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="ml-4"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Hero;
