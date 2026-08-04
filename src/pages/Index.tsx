import React, { useEffect } from "react";

const products = [
  {
    name: "Woolly",
    label: "A relationship in your pocket",
    description:
      "A virtual sheepdog companion for people who cannot have a dog right now. Woolly notices, remembers and grows with you.",
    image: "lovable-uploads/woolly-main-day.png",
    imageAlt: "Woolly waiting in a sunny garden on an iPhone",
    href: "/woolly.html",
    action: "Meet Woolly",
    accent: "moss",
  },
  {
    name: "Sommify",
    label: "Wine, with a little more confidence",
    description:
      "A thoughtful wine companion that helps you capture, understand and enjoy the bottle in front of you.",
    image: "lovable-uploads/sommify-appstore-menu.webp",
    imageAlt: "Sommify scanning a wine menu on an iPhone",
    href: "/sommify.html",
    action: "Discover Sommify",
    accent: "gold",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Spectrify — Thoughtful digital products";
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-dark text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-dark-deep/85 px-6 py-4 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="font-playfair text-2xl font-bold tracking-tight text-gold">
            Spectrify
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#products" className="text-sm text-white/75 transition-colors hover:text-gold">
              Products
            </a>
            <a href="#approach" className="text-sm text-white/75 transition-colors hover:text-gold">
              Approach
            </a>
            <a href="/support" className="text-sm text-white/75 transition-colors hover:text-gold">
              Support
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative px-4 pb-24 pt-40 md:pb-36 md:pt-52">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(213,173,97,0.18),transparent_32rem)]" />
          <div className="relative mx-auto max-w-7xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Independent design &amp; development studio
            </p>
            <h1 className="max-w-5xl font-playfair text-5xl font-normal leading-[0.98] tracking-[-0.045em] md:text-8xl">
              Digital products with a little more <span className="golden-text">feeling.</span>
            </h1>
            <div className="mt-8 grid max-w-4xl gap-8 md:grid-cols-[1fr_0.75fr] md:items-end">
              <p className="text-xl leading-relaxed text-white/70 md:text-2xl">
                Spectrify makes calm, characterful apps for the moments people want to
                keep: a bottle shared, a dog missed, a small ritual that becomes part
                of the day.
              </p>
              <a
                href="#products"
                className="inline-flex w-fit items-center rounded-full border border-gold/60 px-5 py-3 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-dark"
              >
                Explore our products <span className="ml-3">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-t border-white/10 px-4 py-24 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">The portfolio</p>
              <h2 className="font-playfair text-4xl font-normal tracking-[-0.035em] md:text-6xl">
                Two products. One point of view.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">
                We build useful products that earn a place in your life through craft,
                not noise.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07] md:p-6"
                >
                  <div className="relative mb-7 flex h-[300px] items-center justify-center overflow-hidden rounded-xl bg-black/20 md:h-[390px]">
                    <div
                      className={`absolute inset-0 ${product.accent === "moss" ? "bg-[radial-gradient(circle_at_50%_80%,rgba(52,79,61,0.8),transparent_65%)]" : "bg-[radial-gradient(circle_at_50%_80%,rgba(213,173,97,0.24),transparent_65%)]"}`}
                    />
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className={`relative max-h-[92%] w-auto max-w-[76%] object-contain shadow-2xl transition-transform duration-700 group-hover:scale-[1.03] ${product.name === "Woolly" ? "rounded-[2rem]" : "max-h-48 rounded-3xl md:max-h-64"}`}
                    />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{product.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-5">
                    <div>
                      <h3 className="font-playfair text-4xl font-normal">{product.name}</h3>
                      <p className="mt-2 max-w-md leading-relaxed text-white/65">{product.description}</p>
                    </div>
                    <span className="shrink-0 text-2xl text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-gold">{product.action}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-20 border-t border-white/10 px-4 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our approach</p>
              <h2 className="font-playfair text-4xl font-normal tracking-[-0.035em] md:text-6xl">
                Make it useful. Make it human.
              </h2>
            </div>
            <div className="grid gap-8 border-l border-gold/25 pl-6 md:grid-cols-2 md:gap-x-12 md:pl-10">
              <div>
                <p className="mb-2 text-lg font-semibold text-white">Character over clutter</p>
                <p className="leading-relaxed text-white/60">
                  Every interaction should have a reason to exist and a tone you can feel.
                </p>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-white">Small moments, well made</p>
                <p className="leading-relaxed text-white/60">
                  We focus on the details people return to, not feature lists they forget.
                </p>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-white">Trust by default</p>
                <p className="leading-relaxed text-white/60">
                  Calm products respect attention, explain themselves and keep promises.
                </p>
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold text-white">Built for the long term</p>
                <p className="leading-relaxed text-white/60">
                  We would rather make one enduring product than ten disposable ones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-4 py-24 md:py-32">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-2xl border border-gold/30 bg-gold/[0.06] p-8 md:flex-row md:items-end md:justify-between md:p-12">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Keep in touch</p>
              <h2 className="max-w-2xl font-playfair text-4xl font-normal tracking-[-0.035em] md:text-5xl">
                Good products are worth talking about.
              </h2>
            </div>
            <a
              href="mailto:info@spectrify.co.uk?subject=Spectrify"
              className="inline-flex w-fit shrink-0 items-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
            >
              info@spectrify.co.uk <span className="ml-3">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-dark-deep px-4 py-10 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Spectrify. Thoughtful digital products.</span>
          <div className="flex gap-5">
            <a href="/woolly.html" className="transition-colors hover:text-gold">Woolly</a>
            <a href="/sommify.html" className="transition-colors hover:text-gold">Sommify</a>
            <a href="/woolly-support.html" className="transition-colors hover:text-gold">Support</a>
            <a href="/woolly-privacy.html" className="transition-colors hover:text-gold">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
