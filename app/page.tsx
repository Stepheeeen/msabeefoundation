import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { AboutSnippet } from '@/components/about-snippet';
import { ObjectivesSection } from '@/components/objectives-section';
import { ProgramsSnippet } from '@/components/programs-snippet';
import { ImpactSnippet } from '@/components/impact-snippet';
import { GallerySection } from '@/components/gallery-section';
import { DonateSnippet } from '@/components/donate-snippet';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="about">
          <AboutSnippet />
        </section>
        <section id="objectives">
          <ObjectivesSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="programs">
          <ProgramsSnippet />
        </section>
        <section id="impact">
          <ImpactSnippet />
        </section>
        <section id="donate">
          <DonateSnippet />
        </section>
      </main>
      <Footer />
    </>
  );
}

