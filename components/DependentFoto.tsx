"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

const WA = "6282234331435";

const wa = (message: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

/* =========================================================
   GOOGLE DRIVE IMAGE HELPER
   ========================================================= */

const driveImage = (urlOrId: string) => {
  const match = urlOrId.match(/\/d\/([^/]+)/);
  const id = match?.[1] ?? urlOrId;

  return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
};

/* =========================================================
   IMAGES
   ========================================================= */

const images = {
  // LOGO
  logo: driveImage(
    "https://drive.google.com/file/d/1euQEL6X1uQZGvFg9uBv3TQqLK_Bb-ma9/view?usp=sharing"
  ),

  // RUNNING
  runOne: driveImage(
    "https://drive.google.com/file/d/1UUXDdI42TmWqkHbM2GYujMtGG8N6-6uY/view?usp=sharing"
  ),

  runTwo: driveImage(
    "https://drive.google.com/file/d/1qaRBghpL_Kj2X8aAgLDO6XcuWJHZrt09/view?usp=sharing"
  ),

  runThree: driveImage(
    "https://drive.google.com/file/d/1QfcSMB6u9031hbn27-IgzBbdfovgznZX/view?usp=sharing"
  ),

  // COMMUNITY / MOTOR
  RideOne: driveImage(
    "https://drive.google.com/file/d/1b4U3BCB4_7IQ4-t3cIqwqUXMhyYsU1V_/view?usp=sharing"
  ),

  RideTwo: driveImage(
    "https://drive.google.com/file/d/15GfryzsWBe9I40YZyUzH-TzKMy-zOrW3/view?usp=sharing"
  ),

  RideThree: driveImage(
    "https://drive.google.com/file/d/1zsmMYWGIpugfQKTDbdn0q-bSTpFvIv0A/view?usp=sharing"
  ),

  // GRADUATION
  graduationOne: driveImage(
    "https://drive.google.com/file/d/1yhLTu6dnnLDWE6GlHsvoEUMMOhwBiDp5/view?usp=sharing"
  ),

  graduationTwo: driveImage(
    "https://drive.google.com/file/d/1ZkqvfqbnP3fcJgqJoc9JQb5yGLGcyp0x/view?usp=sharing"
  ),

  graduationThree: driveImage(
    "https://drive.google.com/file/d/1h5Ox71mZWovv0uuqsan9D1JbhXGPz6p3/view?usp=sharing"
  ),

  // OTHER
  crowd: driveImage(
    "https://drive.google.com/file/d/1Gc-DSq6of_oBR_4MkjkRda_GwA-PpWBw/view?usp=sharing"
  ),

  potret: driveImage(
    "https://drive.google.com/file/d/1jEB63WGukTA9jbi0UzKDpwKM31Ar2NSe/view?usp=sharing"
  ),

  comunity: driveImage(
    "https://drive.google.com/file/d/1o1SorPRVfFTfOOeOXywWxAl7_H0qfBAT/view?usp=sharing"
  ),

  street: driveImage(
    "https://drive.google.com/file/d/1H19yP8UdM6wjhsZqRlsSYGPf3in2DHJu/view?usp=sharing"
  ),
};

/* =========================================================
   CATEGORIES
   ========================================================= */

const categories = [

  {
    n: "01",
    title: "RUNNING",
    desc: "Gerak, energi, dan momen sebelum semuanya lewat.",
    image: images.runOne,
  },
  {
    n: "02",
    title: "GRADUATION",
    desc: "Hari besar yang layak dikenang.",
    image: images.graduationOne,
  },
  {
    n: "03",
    title: "RIDE",
    desc: "Orang-orang, perjalanan, dan cerita di jalan.",
    image: images.RideOne,
  },
  {
    n: "04",
    title: "PORTRAIT",
    desc: "Potret yang tetap terasa seperti dirimu.",
    image: images.potret,
  },
  {
    n: "05",
    title: "COMMUNITY",
    desc: "Acara yang ingin kamu ingat apa adanya.",
    image: images.comunity,
  },
];

/* =========================================================
   SERVICES
   ========================================================= */

const services = [
  [
    "01",
    "RUNNING",
    "Running event, marathon, race day, dan komunitas lari.",
    images.runOne,
  ],
  [
    "02",
    "GRADUATION",
    "Foto wisuda, sidang, keluarga, teman, dan cerita kampus.",
    images.graduationOne,
  ],
  [
    "03",
    "RIDE",
    "Motor, gathering, lifestyle, dan dokumentasi yang tidak kaku.",
    images.RideOne,
  ],
  [
    "04",
    "PORTRAIT",
    "Portrait personal, profesional, dan editorial yang tetap natural.",
    images.potret,
  ],
  [
    "05",
    "EVENT",
    "Dokumentasi acara yang terasa hidup, bukan sekadar lengkap.",
    images.crowd,
  ],
] as const;

/* =========================================================
   STORIES
   ========================================================= */

const stories = [
  {
    no: "01",
    title: "THE MOMENT YOU KEEP RUNNING",
    meta: "JAKARTA / RACE DAY / RUNNING",
    text: "Panas, napas, pace, crowd, lalu satu momen ketika garis finis akhirnya tinggal beberapa langkah.",
    images: [images.runOne, images.runTwo, images.runThree],
  },{
    no: "02",
    title: "HARI YANG AKHIRNYA TIBA",
    meta: "YOGYAKARTA / 2026 / GRADUATION",
    text: "Bukan cuma toga. Ada keluarga, teman, kampus, tawa, dan rasa lega setelah perjalanan panjang.",
    images: [
      images.graduationOne,
      images.graduationTwo,
      images.graduationThree,
    ],
  },
  {
    no: "03",
    title: "JALAN BARENG, PULANG BAWA CERITA",
    meta: "JAWA / COMMUNITY / LIFESTYLE",
    text: "Motor hanya titik berangkat. Ceritanya ada di orang-orang yang ikut jalan dan berhenti bersama.",
    images: [images.RideOne, images.RideTwo, images.RideThree],
  },
];

/* =========================================================
   TESTIMONIALS — 9 REVIEWS
   ========================================================= */

const testimonials = [
  {
    text: "“Begitu lihat fotonya, rasanya balik lagi ke race day. Energinya dapet banget.”",
    name: "NAYA",
    type: "RUNNING EVENT",
  },
  {
    text: "“Bukan cuma dapat foto, tapi kayak dapat potongan cerita dari hari itu.”",
    name: "DITTO",
    type: "GRADUATION",
  },
  {
    text: "“Kalau lihat fotonya sekarang, detail-detail kecil yang waktu itu terlewat jadi terasa penting.”",
    name: "KEVIN",
    type: "RIDE COMMUNITY",
  },
];

/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PRIMARY BUTTON
   ========================================================= */

function MagneticLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 22,
      }}
      className={`group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[11px] font-bold uppercase tracking-[.12em] transition-colors ${
        dark
          ? "border-white/40 bg-[var(--orange)] text-black hover:bg-[var(--purple)] hover:text-white"
          : "border-black/20 bg-[var(--orange)] text-black hover:bg-[var(--purple)] hover:text-white"
      }`}
    >
      {children}

      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.a>
  );
}

/* =========================================================
   SECONDARY BUTTON
   ========================================================= */

function SecondLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 450,
        damping: 22,
      }}
      className={`group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-[11px] font-bold uppercase tracking-[.12em] transition-colors ${
        dark
          ? "border-white/40 bg-white text-black hover:bg-[var(--orange)] hover:text-white"
          : "border-black/20 bg-white text-black hover:bg-[var(--orange)] hover:text-white"
      }`}
    >
      {children}

      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.a>
  );
}

/* =========================================================
   STORY CAROUSEL
   ========================================================= */

function StoryCarousel({
  story,
}: {
  story: (typeof stories)[number];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % story.images.length);
    }, 3200);

    return () => window.clearInterval(id);
  }, [story.images.length]);

  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-black sm:rounded-[1.7rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={story.images[index]}
            initial={{ opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src={story.images[index]}
              alt={`${story.title} ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between sm:inset-x-5 sm:bottom-5">
          <span className="max-w-[80%] text-sm font-bold uppercase tracking-[.08em] text-white drop-shadow-lg sm:text-base">
            {story.title}
          </span>

          <span className="rounded-full bg-black/55 px-3 py-2 text-[9px] font-bold tracking-[.14em] text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(story.images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   REVIEW CARD
   ========================================================= */

function ReviewCard({
  review,
  index,
}: {
  review: (typeof testimonials)[number];
  index: number;
}) {
  const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5, -1];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.88,
        rotate: rotations[index],
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: rotations[index],
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.025,
        transition: {
          duration: 0.3,
        },
      }}
      className={`group relative min-h-[235px] rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-6 backdrop-blur-xl sm:min-h-[255px] sm:p-7 ${
        index % 3 === 1 ? "lg:translate-y-8" : ""
      }`}
    >
      {/* decorative number */}

      <span className="absolute right-5 top-5 text-[9px] font-bold tracking-[.18em] text-white/20">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* orange accent */}

      <div className="mb-7 h-1 w-8 rounded-full bg-[var(--orange)] transition-all duration-500 group-hover:w-16" />

      <p className="max-w-md text-lg font-medium leading-7 text-white sm:text-xl sm:leading-8">
        {review.text}
      </p>

      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-white/10 pt-4 sm:left-7 sm:right-7 sm:bottom-7">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.15em]">
            {review.name}
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[.18em] text-white/40">
            {review.type}
          </p>
        </div>

        <ArrowUpRight
          size={17}
          className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--orange)]"
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function DependentFoto() {
  const [menu, setMenu] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [service, setService] = useState(0);

  const heroImages = useMemo(
    () => [images.runOne, images.runTwo, images.runThree],
    []
  );

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.18],
    [0, -60]
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.18],
    [1, 1.05]
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 4600);

    return () => window.clearInterval(id);
  }, [heroImages.length]);

  /* =======================================================
     PHOTO WALL CAROUSEL
  ======================================================= */

  const photoWall = [
    images.potret,
    images.runTwo,
    images.graduationOne,
    images.RideOne,
    images.RideTwo,
    images.runOne,
    images.crowd,
    images.graduationThree,
  ];

  return (
    <main className="bg-[var(--paper)]">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <nav className="flex min-h-[64px] w-full items-center justify-between border-b border-white/20 bg-black/55 px-4 py-3 text-white shadow-lg backdrop-blur-md sm:min-h-[70px] sm:px-6">
          <a
            href="#"
            className="flex items-center"
            aria-label="dependent.foto"
          >
            <Image
              src={images.logo}
              alt="dependent.foto"
              width={300}
              height={90}
              className="h-auto max-h-[4.5rem] w-auto object-contain sm:max-h-16"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-[10px] font-bold uppercase tracking-[.16em] md:flex">
            <a
              href="#work"
              className="transition-colors hover:text-[var(--orange)]"
            >
              Karya
            </a>

            <a
              href="#services"
              className="transition-colors hover:text-[var(--orange)]"
            >
              Jasa
            </a>

            <a
              href="#about"
              className="transition-colors hover:text-[var(--orange)]"
            >
              Tentang
            </a>

            <a
              href="#contact"
              className="transition-colors hover:text-[var(--orange)]"
            >
              Kontak
            </a>

            <a
              href={wa(
                "Halo dependent.foto, saya ingin bertanya terkait paket fotografi."
              )}
              className="rounded-full border border-white/40 px-4 py-2 transition-colors hover:bg-white hover:text-black"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="#work"
              className="rounded-full border border-white/25 bg-white/5 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] text-white/90 backdrop-blur-sm transition-all active:scale-95 hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-black"
            >
              Karya
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/25 bg-white/5 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] text-white/90 backdrop-blur-sm transition-all active:scale-95 hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-black"
            >
              Jasa
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/25 bg-white/5 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] text-white/90 backdrop-blur-sm transition-all active:scale-95 hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-black"
            >
              Tentang
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/25 bg-white/5 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] text-white/90 backdrop-blur-sm transition-all active:scale-95 hover:border-[var(--orange)] hover:bg-[var(--orange)] hover:text-black"
            >
              Kontak
            </a>

            <button
              aria-label="Buka menu"
              className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5 transition-all active:scale-90 hover:bg-white hover:text-black"
              onClick={() => setMenu(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>
      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-[60] bg-[var(--purple)] p-6 text-white"
          >
            <button
              aria-label="Tutup menu"
              onClick={() => setMenu(false)}
              className="absolute right-6 top-6"
            >
              <X />
            </button>

            <div className="mt-24 flex flex-col gap-5">
              {["KARYA", "JASA", "TENTANG", "KONTAK"].map((x) => (
                <a
                  key={x}
                  href={`#${
                    x === "KARYA"
                      ? "work"
                      : x === "JASA"
                      ? "services"
                      : x === "TENTANG"
                      ? "about"
                      : "contact"
                  }`}
                  onClick={() => setMenu(false)}
                  className="text-5xl font-bold tracking-[-.04em] sm:text-7xl"
                >
                  {x}
                </a>
              ))}

              <a
                href={wa(
                  "Halo dependent.foto, saya ingin melihat paket fotografi."
                )}
                className="mt-6 w-fit rounded-full bg-[var(--orange)] px-5 py-3 text-xs font-bold text-white"
              >
                CHAT WHATSAPP ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="film-grain relative min-h-[88svh] overflow-hidden bg-black text-white sm:min-h-[92svh]">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[heroIndex]}
                alt="Pelari bergerak di tengah perlombaan"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center opacity-70"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1500px] items-center px-5 pb-8 pt-28 sm:min-h-[92svh] sm:items-end sm:px-8 sm:pb-14">
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-white/70"
            >
              JASA FOTOGRAFI
            </motion.p>

            <div className="max-w-5xl">
              <motion.h1
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="hero-title font-bold leading-[.92] tracking-[-.045em]"
              >
                MOMENMU,
                <br />

                <span className="text-[var(--orange)]">
                  BIAR KAMI
                </span>

                <br />

                YANG BICARAKAN.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72 }}
                className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
              >
                <p className="max-w-md text-sm leading-6 text-white/78 sm:text-base">
                  Kami memotret momen yang ingin kamu ingat, tapi mungkin
                  tidak bisa kamu ulang. Wisuda, lari, komunitas, portrait,
                  sampai acara yang ramai oleh cerita.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  <MagneticLink
                    href={wa(
                      "Halo dependent.foto, saya ingin melihat paket fotografi."
                    )}
                  >
                    Tanya harga
                  </MagneticLink>

                  <SecondLink href="#work" dark>
                    Lihat karya
                  </SecondLink>
                </div>
              </motion.div>
            </div>

            <div className="mt-9 flex items-center justify-between text-[9px] uppercase tracking-[.16em] text-white/55 sm:mt-12">
              <span>01 — 03 / CERITA UTAMA</span>

              <span className="hidden sm:block">
                GESER UNTUK MENJELAJAH ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE CAPTURE
      ===================================================== */}

      <section
        id="work"
        className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[.2em] text-black/45">
                  01 / Yang kami abadikan
                </p>

                <h2 className="section-title font-bold leading-[.95] tracking-[-.045em]">
                  MOMEN YANG
                  <br />

                  <span className="text-[var(--purple)]">
                    PUNYA CERITA.
                  </span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-black/55">
                Orang berbeda. Tempat berbeda. Cerita berbeda. Tapi satu hal
                sama: fotonya harus terasa seperti kenangan saat pertama kali
                terjadi.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-14">
            <div className="category-mobile-carousel lg:hidden">
              {[...categories, ...categories].map((item, i) => (
                <motion.div
                  key={`${item.title}-${i}`}
                  className="category-card-mobile"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="88vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                      <div>
                        <p className="text-[9px] font-bold tracking-[.16em] text-white/65">
                          {item.n}
                        </p>

                        <h3 className="mt-1 text-4xl font-bold tracking-[-.04em]">
                          {item.title}
                        </h3>
                      </div>

                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
              {categories.map((item) => (
                <motion.a
                  key={item.title}
                  href={wa(
                    `Halo dependent.foto, saya tertarik dengan jasa foto ${item.title.toLowerCase()}.`
                  )}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 text-white">
                      <p className="text-[9px] font-bold tracking-[.16em] text-white/65">
                        {item.n}
                      </p>

                      <h3 className="mt-1 text-4xl font-bold tracking-[-.04em]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SELECTED STORIES
      ===================================================== */}

      <section className="bg-[var(--purple)] px-5 py-20 text-white sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/60">
              02 / Cerita pilihan
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-bold leading-[.95] tracking-[-.045em]">
              FOTO YANG BIKIN{" "}
              <span className="text-[var(--orange)]">
                INGAT LAGI.
              </span>
            </h2>
          </Reveal>

          <div className="mt-12 space-y-20 sm:mt-20 sm:space-y-28">
            {stories.map((story, i) => (
              <Reveal
                key={story.title}
                delay={i * 0.05}
              >
                <article
                  className={`grid items-center gap-8 lg:grid-cols-[.38fr_1fr] ${
                    i % 2
                      ? "lg:grid-cols-[1fr_.38fr]"
                      : ""
                  }`}
                >
                  <div className={i % 2 ? "lg:order-2" : ""}>
                    <p className="text-7xl font-bold leading-none text-white/10 sm:text-9xl">
                      {story.no}
                    </p>

                    <h3 className="-mt-4 max-w-xl text-[clamp(2.6rem,6vw,6rem)] font-bold leading-[.94] tracking-[-.045em]">
                      {story.title}
                    </h3>

                    <p className="mt-6 max-w-sm text-sm leading-6 text-white/70">
                      {story.text}
                    </p>

                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[.18em] text-white/45">
                      {story.meta}
                    </p>
                  </div>

                  <div className={i % 2 ? "lg:order-1" : ""}>
                    <StoryCarousel story={story} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="px-5 py-20 sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_.65fr]">
            <Reveal>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-black/45">
                03 / Kenapa dependent.foto
              </p>

              <h2 className="section-title font-bold leading-[.95] tracking-[-.045em]">
                BUKAN CUMA
                <br />
                FOTO.
                <br />

                <span className="text-[var(--orange)]">
                  RASA.
                </span>
              </h2>
            </Reveal>

            <Reveal
              delay={0.1}
              className="flex flex-col justify-end"
            >
              <p className="text-xl font-medium leading-8 sm:text-3xl sm:leading-10">
                Kami tidak mengejar foto yang sekadar terlihat bagus. Kami
                mengejar foto yang membuat kamu berhenti sebentar lalu bilang,
                “oh iya, waktu itu.”
              </p>

              <div className="mt-9 grid grid-cols-2 gap-y-4 border-t border-black/12 pt-5 text-[10px] font-bold uppercase tracking-[.13em] sm:grid-cols-3">
                {[
                  "Natural",
                  "Cepat",
                  "Rapi",
                  "Peka momen",
                  "Siap event",
                  "Edit profesional",
                ].map((x) => (
                  <span key={x}>✦ {x}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="bg-[var(--orange)] px-5 py-20 text-black sm:px-8 sm:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-[10px] font-bold uppercase tracking-[.2em]">
              04 / Jasa fotografi
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <Reveal>
                <h2 className="section-title font-bold leading-[.95] tracking-[-.045em]">
                  MAU DI
                  <br />

                  <span className="text-white">
                    ABADIKAN
                  </span>

                  <br />
                  APA?
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-6">
                  Pilih ceritanya. Kami bantu dari konsep, momen, arah
                  pengambilan gambar sampai hasil akhir.
                </p>
              </Reveal>
            </div>

            <div className="border-t border-black/20">
              {services.map(([n, title, desc, image], i) => (
                <motion.a
                  key={title}
                  href={wa(
                    `Halo dependent.foto, saya tertarik dengan jasa foto ${title.toLowerCase()}.`
                  )}
                  onMouseEnter={() => setService(i)}
                  whileHover={{ x: 7 }}
                  className="group relative flex items-center justify-between border-b border-black/20 py-5 transition-colors hover:text-white"
                >
                  <div className="flex gap-4">
                    <span className="pt-1 text-[9px] opacity-45">
                      {n}
                    </span>

                    <div>
                      <h3 className="text-[clamp(2.2rem,5.5vw,5.8rem)] font-bold leading-[.92] tracking-[-.045em]">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-md text-xs leading-5 opacity-65">
                        {desc}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="mr-1 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />

                  {service === i && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="pointer-events-none absolute right-14 top-1/2 hidden h-32 w-24 -translate-y-1/2 overflow-hidden rounded-xl lg:block"
                    >
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHOTO WALL
      ===================================================== */}

      <section className="overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-black/45">
                  05 / Dinding cerita
                </p>

                <h2 className="mt-4 text-[clamp(3rem,7vw,7rem)] font-bold leading-[.95] tracking-[-.045em]">
                  DARI KAMERA,
                  <br />

                  <span className="text-[var(--purple)]">
                    JADI KENANGAN.
                  </span>
                </h2>
              </div>

              <a
                href="https://instagram.com/dependent.foto"
                className="hidden text-[10px] font-bold uppercase tracking-[.18em] sm:block"
              >
                Instagram ↗
              </a>
            </div>
          </Reveal>

          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex min-w-max gap-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 28,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...photoWall, ...photoWall].map((src, i) => (
                <motion.div
                  key={src + i}
                  whileHover={{
                    y: -10,
                    rotate: i % 2 ? 1 : -1,
                  }}
                  className={`relative shrink-0 overflow-hidden rounded-2xl ${
                    i % 3 === 0
                      ? "h-[360px] w-[250px]"
                      : i % 3 === 1
                      ? "h-[270px] w-[380px]"
                      : "h-[320px] w-[245px]"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Koleksi foto dependent.foto"
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
            <span className="text-[10px] uppercase tracking-[.16em] text-black/45">
              LIHAT CERITA LAINNYA
            </span>

            <a
              href="https://instagram.com/dependent.foto"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em]"
            >
              <Instagram size={16} />
              @dependent.foto
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL / REVIEW WALL
      ===================================================== */}

      <section className="relative overflow-hidden bg-[var(--purple)] px-5 py-24 text-white sm:px-8 sm:py-36">
        {/* Decorative background elements */}

        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full border border-white/[0.06]"
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full border border-[var(--orange)]/[0.08]"
        />

        <div className="relative z-10 mx-auto max-w-[1500px]">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-white/55">
                  06 / Kata mereka
                </p>

                <h2 className="mt-4 max-w-5xl text-[clamp(3.2rem,8vw,8rem)] font-bold leading-[.9] tracking-[-.05em]">
                  KATA MEREKA.
                  <br />

                  <span className="text-[var(--orange)]">
                    BUKAN KATA KAMI.
                  </span>
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-6 text-white/50">
                Sembilan cerita kecil dari orang-orang yang pernah mempercayakan
                momennya kepada kami.
              </p>
            </div>
          </Reveal>

          {/* Review wall */}

          <div className="mt-16 grid gap-5 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((review, i) => (
              <ReviewCard
                key={review.name}
                review={review}
                index={i}
              />
            ))}
          </div>

          {/* Bottom statement */}

          <Reveal delay={0.2}>
            <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-7 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-lg font-medium leading-7 text-white/70 sm:text-xl">
                Karena pada akhirnya, foto yang paling berarti bukan yang
                paling sempurna. Tapi yang membuatmu ingin mengingatnya lagi.
              </p>

              <a
                href={wa(
                  "Halo dependent.foto, saya ingin konsultasi kebutuhan fotografi."
                )}
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[.14em] backdrop-blur-sm transition-colors hover:bg-[var(--orange)] hover:text-black"
              >
                Ceritakan momenmu

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CONTACT / CTA
      ===================================================== */}

      <section
        id="contact"
        className="relative min-h-[82svh] overflow-hidden bg-black text-white sm:min-h-[88svh]"
      >
        <Image
          src={images.runTwo}
          alt="Pelari bergerak di kota"
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

        <div className="relative z-10 flex min-h-[82svh] items-center px-5 py-20 sm:min-h-[88svh] sm:px-8">
          <div className="mx-auto w-full max-w-[1500px]">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[.2em] text-white/55">
                07 / Yuk bikin cerita
              </p>

              <h2 className="mt-5 max-w-6xl text-[clamp(3.2rem,9vw,9rem)] font-bold leading-[.92] tracking-[-.045em]">
                ADA MOMEN
                <br />

                <span className="text-[var(--orange)]">
                  YANG MAU
                </span>

                <br />
                KAMU SIMPAN?
              </h2>

              <p className="mt-7 max-w-md text-sm leading-6 text-white/70">
                Cerita sedikit soal acaranya. Kami bantu cari cara paling pas
                buat menangkapnya.
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                <MagneticLink
                  href={wa(
                    "Halo dependent.foto, saya ingin booking sesi foto. Bisa info paket dan jadwalnya?"
                  )}
                >
                  Booking sekarang
                </MagneticLink>

                <MagneticLink
                  href={wa(
                    "Halo dependent.foto, saya ingin konsultasi kebutuhan fotografi."
                  )}
                >
                  Chat WhatsApp
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-black px-5 py-7 text-white sm:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 border-t border-white/15 pt-5 text-[9px] uppercase tracking-[.16em] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>dependent.foto © 2026</span>

          <span>Foto yang punya rasa.</span>

          <a
            href={wa(
              "Halo dependent.foto, saya ingin melihat paket fotografi."
            )}
            className="text-white"
          >
            WhatsApp ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
