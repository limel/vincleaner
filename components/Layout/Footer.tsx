import { useTranslations } from "next-intl";
// import { Rating } from "components/Rating";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");

  const infoLinks = ["information.about", "information.faq", "information.policy", "information.terms"] as const;

  return (
    <footer className="py-5">
      <div className="container md:flex-wrap flex items-strength lg:items-start lg:justify-between mb-16  gap-6 lg:gap-0 justify-center flex-col md:flex-row ">
        <div className="pl-12 lg:pl-0">
          <span className="text-sm font-bold mb-5 block">{t("information.title")}</span>
          <ul className="flex flex-col gap-3">
            {infoLinks.map((page) => (
              <li className="text-sm" key={page}>
                {t(`${page}.title`)}
              </li>
            ))}
          </ul>
        </div>
        <div className="pl-12 lg:pl-0">
          <span className="text-sm font-bold mb-5 block">{t("contacts.title")}</span>
          <p className="text-sm font-semibold mb-3">+38 (063) 642-56-22</p>
          <p className="text-sm font-semibold mb-3">vincleaner.help@gmail.com</p>
          <span className="text-sm mb-3 block">{t("contacts.socialCaption")}</span>
          <ul className="flex items-start gap-3 mb-3">
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
          <button className="button !px-4 !py-2 !text-xs">
            <svg className="w-3 h-3 mr-3">
              <use href="/sprite.svg#chat" />
            </svg>
            {t("contacts.button")}
          </button>
        </div>
        <div className="pl-12 lg:pl-0">
          <span className="text-sm font-bold mb-5 block">{t("payments.title")}</span>
          <span className="text-sm mb-5 block">{t("payments.cardsCaption")}</span>
          <ul className="flex items-center gap-3">
            <li>
              <svg className="w-7 h-7">
                <use href="/sprite.svg#visa" />
              </svg>
            </li>
            <li>
              <svg className="w-7 h-7">
                <use href="/sprite.svg#mastercard" />
              </svg>
            </li>
            <li>
              <svg className="w-7 h-7">
                <use href="/sprite.svg#maestro" />
              </svg>
            </li>
            <li>
              <svg className="w-16 h-10">
                <use href="/sprite.svg#fondy" />
              </svg>
            </li>
          </ul>
          <span className="text-sm mb-5 block">{t("payments.cryptoCaption")}</span>
          <ul className="flex items-center gap-3">
            <li>
              <svg className="w-6 h-6">
                <use href="/sprite.svg#bitcoin" />
              </svg>
            </li>
            <li>
              <svg className="w-6 h-6">
                <use href="/sprite.svg#etherium" />
              </svg>
            </li>
            <li>
              <svg className="w-6 h-6">
                <use href="/sprite.svg#orbitcoin" />
              </svg>
            </li>
          </ul>
        </div>
        <div className="pl-12 lg:pl-0">
          <Image src="/secure.png" width={128} height={125} alt="secure 100%" />
        </div>
        {/* <Rating /> */}
      </div>
      <div className="container py-4 border-t-[1px] flex-col lg:flex-row border-black-700 border-solid flex lg:items-center items-start justify-between">
        <ul className="flex items-center gap-3 mb-2 lg:mb-0">
          <li className="flex items-center gap-2">
            <svg className="w-6 h-6">
              <use href="/sprite.svg#file" />
            </svg>
            <div className="text-xs">
              <span className="block">COPART архив:</span>
              <span>
                <strong>9,185,230</strong> лотов
              </span>
            </div>
          </li>
          <li className="flex items-center gap-2 ">
            {" "}
            <svg className="w-6 h-6">
              <use href="/sprite.svg#file" />
            </svg>
            <div className="text-xs">
              <span>COPART архив:</span>
              <span className="block">
                <strong>9,185,230</strong> лотов
              </span>
            </div>
          </li>
        </ul>
        <span className="text-xs">Все права защищены © VIN CLEANER 2019 - {year}</span>
      </div>
    </footer>
  );
}

export default Footer;
