import { Hero } from "components/Hero";
import { Partners } from "components/Partners";
import { About } from "components/About";
import { Stages } from "components/Stages";
import { CTA } from "components/CTA";
import { SearchForm } from "components/SearchForm";
import { Disqus } from "components/Disqus";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <SearchForm />
      <About />
      <Stages />
      {/* <Disqus /> */}
      <CTA />
    </main>
  );
}
