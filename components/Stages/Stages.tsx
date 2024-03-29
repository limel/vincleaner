import { useTranslations } from "next-intl";
import Image from "next/image";

function Stages() {
  const t = useTranslations("Stages");
  const cards = ["register", "managers", "payment", "result"] as const;
  return (
    <section id="stages" className="my-12 xl:my-40">
      <div className="container items-center flex xl:flex-row flex-col-reverse xl:item-start justify-between gap-20">
        <div className="mt-8 max-w-[675px] w-full">
          <h2 className="relative pb-2 after:w-[80px] before:w-[246px] decor-line uppercase mb-8">{t("title")}</h2>
          <ol className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-strengh stages-list">
            {cards.map((card) => (
              <li
                key={card}
                className=" py-4 pr-6 lg:py-6 pl-16 lg:pr-9 border-2 transition relative flex items-center ease-in-out border-accent bg-white border-solid text-base font-bold hover:bg-accent hover:text-white"
              >
                {t(`${card}`)}
              </li>
            ))}
          </ol>
        </div>
        <Image src="/stages-img.jpg" width={557} height={448} alt="stages image" />
      </div>
    </section>
  );
}

export default Stages;
