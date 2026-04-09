import { Hero } from '@/components/hero';
import { AboutSnippet } from '@/components/about-snippet';
import { ImpactStats } from '@/components/impact-stats';
import { ObjectivesSection } from '@/components/objectives-section';
import { ProgramsSnippet } from '@/components/programs-snippet';
import { ImpactSnippet } from '@/components/impact-snippet';
import { GallerySection } from '@/components/gallery-section';
import { DonateSnippet } from '@/components/donate-snippet';
import { Newsletter } from '@/components/newsletter';
import { NewsSection } from '@/components/news-section';
import { ImpactMap } from '@/components/impact-map';
import { ScrollReveal } from '@/components/scroll-reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <section id="about">
          <AboutSnippet />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <ImpactStats />
      </ScrollReveal>
      <ScrollReveal>
        <section id="objectives">
          <ObjectivesSection />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="gallery">
          <GallerySection />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <section id="programs">
          <ProgramsSnippet />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <ImpactMap />
      </ScrollReveal>
      <ScrollReveal>
        <section id="impact">
          <ImpactSnippet />
        </section>
      </ScrollReveal>
      <ScrollReveal>
        <NewsSection />
      </ScrollReveal>
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
      <ScrollReveal>
        <section id="donate">
          <DonateSnippet />
        </section>
      </ScrollReveal>
    </>
  );
}
