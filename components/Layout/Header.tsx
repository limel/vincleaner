import { useTranslations } from "next-intl";
import Link from "next/link";
import { Switcher } from "components/Switcher";

function Header() {
  const t = useTranslations("Header");

  return (
    <header className="pt-9 pb-6 bg-white sticky top-0 font-secondary z-10 shadow-sm">
      <div className="container">
        <div className="max-w-[1152px] flex items-center justify-between">
          <Link href="/">
            <span className="uppercase font-bold text-3xl">logo</span>
          </Link>
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
            <button className="flex items-center py-2.5 px-5">
              <svg className="w-3.5 h-3.5 mr-4">
                <use href="/sprite.svg#search" />
              </svg>
              {t("navigation.search")}
            </button>
            <button className="py-2.5 px-4">
              <svg className="w-5 h-5">
                <use href="/sprite.svg#user" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
