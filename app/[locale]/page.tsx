import { Hero } from "components/Hero";
import { Partners } from "components/Partners";
import { About } from "components/About";
import { Stages } from "components/Stages";
import { CTA } from "components/CTA";
// import { useTranslations } from "next-intl";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <About />
      <Stages />
      <CTA />
    </main>
  );
}
