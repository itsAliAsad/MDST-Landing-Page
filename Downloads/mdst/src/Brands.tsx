import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

function BrandsHero() {
  return (
    <section className="pt-16 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8">
            Reach the <span className="text-brand-red">modest</span> shopper. Automatically.
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/70 leading-relaxed mb-10 max-w-2xl">
            Connect your catalog to a highly engaged audience looking for exactly what you sell. We do the <strong>filtering</strong>; you get the <strong>traffic</strong>.
          </p>
          <a
            href="#get-in-touch"
            className="inline-block bg-brand-black text-brand-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-brand-black/90 transition-colors"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ValuePillars() {
  const pillars = [
    {
      title: 'High-intent discovery.',
      body: 'Shoppers come to MDST with specific coverage parameters. When your items match, they are shown to buyers who are ready to purchase.',
    },
    {
      title: 'Seamless integration.',
      body: 'No extra marketing required. Our Smart AI Search categorizes your existing items by sleeve length, hemline, and fit.',
    },
    {
      title: 'Zero friction.',
      body: "We don't hold inventory. We act as the ultimate discovery engine, driving high-converting traffic directly to your checkout.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-black/50 mb-6">
            The Benefits
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter max-w-xl">
            Why brands choose MDST.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-brand-black/70 leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToEngage() {
  const steps = [
    {
      number: 1,
      title: 'Submit your brand.',
      body: 'Fill out our brief partnership inquiry to get the conversation started.',
    },
    {
      number: 2,
      title: 'We map your catalog.',
      body: 'Our AI learns your sizing and coverage specifications to ensure accurate search results.',
    },
    {
      number: 3,
      title: 'Get discovered.',
      body: 'Appear natively in personalized, curated search results for users across the platform.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-black/50 mb-6">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter max-w-xl">
            Get listed in three steps.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-brand-black/10"></div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="w-14 h-14 bg-brand-black text-brand-white rounded-full flex items-center justify-center mb-6 relative z-10 font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-brand-black/70 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortalTeaser() {
  return (
    <section className="py-24 px-6 bg-brand-darknavy text-brand-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-6">
            A dedicated <strong>brand portal</strong> is coming.
          </h2>
          <p className="text-lg text-brand-white/70 leading-relaxed">
            Soon, you will have access to <strong>real-time analytics</strong> on what modest shoppers are searching for, direct <strong>feed integrations</strong>, and <strong>performance tracking</strong>. For now, let's get you on the platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="get-in-touch" className="py-24 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
            Ready to grow your audience?
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-brand-black text-brand-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-brand-black/90 transition-colors"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function BrandsPage() {
  return (
    <>
      <BrandsHero />
      <ValuePillars />
      <HowToEngage />
      <PortalTeaser />
      <FinalCTA />
    </>
  );
}
