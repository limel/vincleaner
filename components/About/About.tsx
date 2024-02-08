import { useTranslations } from "next-intl";
import Image from "next/image";

function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="my-12 xl:my-32">
      <div className="container flex item-start gap-12 xl:gap-20 flex-col xl:flex-row">
        <Image src="/about-img.jpg" className="object-cover" alt="about img" width={700} height={478} />
        <div className="flex flex-col gap-5">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <h3>{t("title2")}</h3>
          <p>{t("description2")}</p>
          <h3>{t("title3")}</h3>
          <p>{t("description3")}</p>
          <p>{t("description4")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
