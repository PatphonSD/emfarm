import Container from "@/components/container";
import Hero from "./_section/hero";
import FAQ from "./_section/faq";
import FavoriteTools from "./_section/fav-tools";
import Experience from "./_section/experience";

export default function Home() {
  return (
    <main>
      <Hero/>
      <FAQ/>
      <FavoriteTools/>
      <Experience />
    </main>
  );
}
