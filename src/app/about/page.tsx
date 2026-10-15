import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { SectionLabel, GoldDivider, PrimaryButton } from "@/components/UI";
import { ShieldCheck, Users, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us — Bengaluru Travel Company",
  description:
    "Meet H K Tours and Travels — buses, Volvo coaches, Urbania and Crysta with professional drivers for corporate, wedding, family and outstation travel in Bengaluru.",
  path: "/about",
  image: "/images/fleet/azad-2-2.webp",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="The journey behind the journey."
        subtitle="A Bengaluru travel company built on safe, comfortable group journeys."
        image="/images/fleet/azad-2-2.webp"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <Reveal>
            <SectionLabel>About H K Tours &amp; Travels</SectionLabel>
            <h2 className="font-display text-3xl text-burgundy-dark sm:text-4xl">
              Premium transportation, built on reliability.
            </h2>
            <GoldDivider className="my-6" />
            <p className="max-w-md text-base leading-relaxed text-burgundy-dark/75">
              H K Tours &amp; Travels provides reliable, premium transportation for corporate
              events, grand weddings, group travel, family journeys and outstation getaways
              across Bengaluru and Karnataka.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-burgundy-dark/75">
              Every journey is planned around comfort, punctuality and a fleet suited to the
              size and nature of your group — from a single premium car to a full luxury coach.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-burgundy-dark/75">
              Our own fleet includes Toyota Innova Crysta, Force Urbania, 33 to 50 seater buses and
              Volvo coaches, all driven by experienced chauffeurs who know Bengaluru&apos;s roads and
              South India&apos;s highways. Our motto says it simply: safe journey, happy journey,
              memorable journey.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[440px]">
            <Image
              src="/images/fleet/urbania1.webp"
              alt="H K Tours and Travels Force Urbania vans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-burgundy-dark py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Our Mission",
                text: "To make group travel comfortable, dependable and genuinely enjoyable — for every kind of journey.",
              },
              {
                icon: ShieldCheck,
                title: "Our Commitment to Safety",
                text: "Safety-focused travel is central to how every trip is planned and every vehicle is maintained.",
              },
              {
                icon: Users,
                title: "Customer Experience",
                text: "From the first enquiry to the final drop-off, our team is focused on a smooth, well-communicated experience.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Reveal key={title}>
                <Icon size={26} className="mb-4 text-gold" />
                <h3 className="font-display text-xl text-cream">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <h2 className="font-display text-3xl text-burgundy-dark sm:text-4xl">
              Our vision
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-burgundy-dark/75">
              To be recognised across Bengaluru as a premium, trustworthy choice for corporate
              travel, wedding transportation, family journeys and group tours — known as much
              for our professional chauffeurs and premium fleet as for the experience of the
              journey itself.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryButton href="/contact">Plan Your Journey</PrimaryButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
