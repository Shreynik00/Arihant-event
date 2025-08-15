import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollReveal from "@/components/ScrollReveal";

// Photo gallery images
const galleryImages = [
  { src: "/images/stage.jpeg", alt: "Stage Performance" },
  { src: "/images/crowd.jpeg", alt: "Crowd at Event" },
  { src: "/images/fun.jpeg", alt: "Fun Activities" },
  { src: "/images/music.jpeg", alt: "Live Music" },
  { src: "/images/dance.jpeg", alt: "Dance Performance" },
  { src: "/images/festival.jpeg", alt: "Festival Decorations" }
];

export default function Home() {
  return (
    <main className="p-6">

      {/* Title */}
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-center">Arihant 2025</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p className="mt-2 text-lg text-center">Annual College Fest 🎉</p>
      </AnimatedSection>

      {/* Photo Gallery */}
      <section className="mt-12">
        <AnimatedSection>
          <h2 className="text-3xl font-semibold text-center mb-8">
            Event Photo Gallery 📸
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-black text-white py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Highlights</h2>
          <p className="mb-10 text-lg">
            Over the years, Arihant Event has hosted unforgettable nights, impactful workshops, and vibrant cultural gatherings.
          </p>
        </div>
      </section>

      {/* Next Event Teaser */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Next Event Coming Soon 🎉</h2>
        <p className="text-lg">Stay tuned for the most exciting night of the year!</p>
      </section>

      {/* Call-to-Action */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Be Part of the Fun</h2>
        <p className="mb-6">Join our events and make unforgettable memories!</p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg">
          Register Now
        </button>
      </section>
    </main>
  );
}
