import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BrandsPage from './Brands';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-brand-black text-brand-white font-bold text-xl leading-none p-2 grid grid-cols-2 gap-x-1 tracking-tighter w-12 h-12 place-items-center">
          <span>M</span><span>D</span>
          <span>S</span><span>T</span>
        </div>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-brand-black/70">
        <Link to="/" className="text-brand-black hover:text-brand-red transition-colors">Home</Link>
        <Link to="/" className="hover:text-brand-red transition-colors">About Us</Link>
        <Link to="/brands" className="hover:text-brand-red transition-colors">For Brands</Link>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-12 pb-16 px-6 max-w-7xl mx-auto w-full">
      {/* Block A: Editorial Image + Magazine Card Stack */}
      <div className="grid lg:grid-cols-5 gap-8 items-center">
        {/* Left: Editorial Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 aspect-[4/5] lg:aspect-[3/4] max-h-[650px] overflow-hidden bg-brand-grey/20"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
            alt="Editorial fashion"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Right: Magazine Card Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 relative h-[400px] lg:h-[600px]"
        >
          {/* Card 1 - back */}
          <div className="absolute inset-x-4 top-8 bottom-12 bg-brand-white border border-brand-black/10 p-8 rotate-[-3deg] translate-x-2 shadow-sm">
            <p className="text-xs tracking-[0.3em] uppercase font-medium text-brand-black/40 leading-loose">
              SMART AI SEARCH &middot; SMART AI SEARCH &middot; SMART AI SEARCH &middot; SMART AI SEARCH
            </p>
          </div>

          {/* Card 2 - middle */}
          <div className="absolute inset-x-2 top-4 bottom-8 bg-brand-white border border-brand-black/10 p-8 rotate-[2deg] -translate-x-1 shadow-md">
            <p className="text-sm italic tracking-wide text-brand-black/30 leading-loose">
              LESS SCROLLING &middot; LESS SCROLLING &middot; LESS SCROLLING &middot; LESS SCROLLING
            </p>
          </div>

          {/* Card 3 - front (main headline) */}
          <div className="absolute inset-x-0 top-0 bottom-4 bg-brand-white border border-brand-black/10 p-8 rotate-[-1deg] shadow-lg flex flex-col justify-center">
            <p className="text-xs tracking-[0.3em] uppercase font-medium text-brand-black/50 mb-4">
              SMART AI SEARCH
            </p>
            <p className="text-xs tracking-[0.3em] uppercase font-medium text-brand-black/40 mb-6">
              SMART AI SEARCH
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] uppercase mb-6">
              Mainstream Brands<br />
              <span className="font-black">Curated For You</span>
            </h1>
            <p className="text-sm italic tracking-wide text-brand-black/40 mb-2">
              LESS SCROLLING &middot; LESS SCROLLING
            </p>
            <p className="text-xs italic tracking-wide text-brand-black/30 mb-6">
              LESS SCROLLING &middot; LESS SCROLLING
            </p>
            <p className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
              //MORE<br />STYLING//
            </p>
          </div>
        </motion.div>
      </div>

      {/* Block B: Waitlist Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 border-t border-b border-brand-black/10 py-5"
      >
        <p className="text-sm md:text-base font-bold tracking-[0.15em] uppercase">
          Join the Waitlist: Be first to shop our modest collection when we launch.
        </p>
      </motion.div>

      {/* Block C: Email Form + Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <form className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black bg-transparent"
            required
          />
          <button
            type="submit"
            className="bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-black/90 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <div className="flex items-center gap-4 text-brand-black">
          <a href="#" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-black/10 transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-black/10 transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-black/10 transition-colors">
            <span className="sr-only">TikTok</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Hook() {
  return (
    <section className="py-24 px-6 bg-brand-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-medium leading-relaxed tracking-tight text-brand-black">
          Tired of endlessly scrolling to find something that fits your style and your values?
        </h2>
        <p className="mt-8 text-lg text-brand-black/70 leading-relaxed max-w-2xl">
          We believe modest fashion shouldn't mean compromising on personal style or spending hours hunting for the right fit. We're building a platform that brings the best mainstream brands directly to you, filtered for your specific modesty standards. Less scrolling, more styling.
        </p>
      </motion.div>
    </section>
  );
}

const journeySteps = [
  {
    image: '/mockups/chat-screen.png',
    alt: 'Chat screen - describe what you want',
    step: 1,
    title: 'Tell us what you\'re looking for',
    description: 'Just describe what you need in plain language — your style, the occasion, your budget. Our AI chat understands exactly what you mean.',
  },
  {
    image: '/mockups/chat-styling.png',
    alt: 'AI styling recommendations',
    step: 2,
    title: 'Get instant recommendations',
    description: 'Our AI curates modest options from mainstream brands in seconds. Preview top picks right in the chat, or dive into the full results.',
  },
  {
    image: '/mockups/results.png',
    alt: 'Search results with filters',
    step: 3,
    title: 'Browse and filter your results',
    description: 'Refine by color, price, neckline, and more. Every result meets your modesty preferences — no endless scrolling through items that don\'t fit.',
  },
  {
    image: '/mockups/product-detail.png',
    alt: 'Product detail page',
    step: 4,
    title: 'Buy directly from the retailer',
    description: 'See full product details, available sizes, reviews, and colors. When you\'re ready, shop directly at the brand\'s store.',
  },
];

function JourneyStepContent({ step, index, progress }: { key?: number; step: typeof journeySteps[number]; index: number; progress: any }) {
  const total = journeySteps.length;
  const stepStart = index / total;
  const stepEnd = (index + 1) / total;

  const opacity = useTransform(
    progress,
    index === 0
      ? [stepStart, stepEnd - 0.08, stepEnd]
      : index === total - 1
        ? [stepStart, stepStart + 0.08, stepEnd]
        : [stepStart, stepStart + 0.08, stepEnd - 0.08, stepEnd],
    index === 0
      ? [1, 1, 0]
      : index === total - 1
        ? [0, 1, 1]
        : [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [stepStart, stepStart + 0.08],
    index === 0 ? [0, 0] : [60, 0]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex justify-center lg:order-1">
          <div className="w-[260px] md:w-[300px] rounded-[2.5rem] border-[8px] border-brand-darknavy shadow-2xl overflow-hidden bg-brand-white">
            <img src={step.image} alt={step.alt} className="w-full" />
          </div>
        </div>
        <div className="max-w-xl lg:order-2">
          <div className="w-10 h-10 rounded-full border-2 border-brand-white/20 flex items-center justify-center text-sm font-bold mb-6">
            {step.step}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight mb-4">
            {step.title}
          </h3>
          <p className="text-lg text-brand-white/70 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDot({ index, progress }: { key?: number; index: number; progress: any }) {
  const total = journeySteps.length;
  const dotStart = index / total;
  const dotEnd = (index + 1) / total;
  const dotOpacity = useTransform(
    progress,
    [dotStart, dotStart + 0.02, dotEnd - 0.02, dotEnd],
    index === 0
      ? [1, 1, 1, 0.3]
      : index === total - 1
        ? [0.3, 0.3, 1, 1]
        : [0.3, 1, 1, 0.3]
  );
  const dotScale = useTransform(
    progress,
    [dotStart, dotStart + 0.02, dotEnd - 0.02, dotEnd],
    index === 0
      ? [1.3, 1.3, 1.3, 1]
      : index === total - 1
        ? [1, 1, 1.3, 1.3]
        : [1, 1.3, 1.3, 1]
  );
  return (
    <motion.div
      style={{ opacity: dotOpacity, scale: dotScale }}
      className="w-2.5 h-2.5 rounded-full bg-brand-white"
    />
  );
}

function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative bg-brand-black text-brand-white" style={{ height: `${journeySteps.length * 100}vh` }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="pt-24 pb-12 px-6 max-w-7xl mx-auto"
      >
        <div className="inline-block px-3 py-1 border border-brand-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-brand-white/70">
          How It Works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
          Your shopping journey, reimagined.
        </h2>
        <p className="text-lg text-brand-white/70 leading-relaxed max-w-2xl">
          From a simple question to the perfect outfit — in four easy steps.
        </p>
      </motion.div>

      {/* Sticky viewport for steps */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {journeySteps.map((step, i) => (
          <JourneyStepContent key={step.step} step={step} index={i} progress={scrollYProgress} />
        ))}

        {/* Progress dots */}
        <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
          {journeySteps.map((step, i) => (
            <ProgressDot key={step.step} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DualFooter() {
  return (
    <section className="bg-brand-white">
      <div className="grid md:grid-cols-2">
        {/* User CTA */}
        <div className="bg-brand-lightpurple/30 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 max-w-md">
            Ready to shop modest?
          </h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-brand-black/20 bg-brand-white focus:outline-none focus:border-brand-black focus:ring-1 focus:ring-brand-black"
              required
            />
            <button 
              type="submit" 
              className="bg-brand-black text-brand-white px-6 py-3 font-medium hover:bg-brand-black/90 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        </div>
        
        {/* Brand CTA */}
        <div className="bg-brand-black text-brand-white p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8 max-w-md">
            Are you a brand? Partner with us.
          </h2>
          <p className="text-brand-white/70 mb-8 max-w-md">
            Reach a highly engaged audience looking for modest fashion options from brands they already love.
          </p>
          <Link to="/brands" className="inline-flex items-center gap-2 text-brand-white font-bold border-b-2 border-brand-white pb-1 self-start hover:text-brand-red hover:border-brand-red transition-colors">
            Go to Brand Portal <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-white py-12 px-6 border-t border-brand-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="bg-brand-black text-brand-white font-bold text-sm leading-none p-1.5 grid grid-cols-2 gap-x-1 tracking-tighter w-10 h-10 place-items-center">
          <span className="leading-none">M</span><span className="leading-none">D</span>
          <span className="leading-none">S</span><span className="leading-none">T</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-brand-black/70">
          <a href="#" className="hover:text-brand-black transition-colors">Contact Us</a>
          <a href="#" className="hover:text-brand-black transition-colors">Privacy Policy</a>
        </div>
        
        <div className="flex items-center gap-4 text-brand-black">
          <a href="#" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-black/10 transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full bg-brand-black/5 flex items-center justify-center hover:bg-brand-black/10 transition-colors">
            <span className="sr-only">TikTok</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Hook />
      <Journey />
      <DualFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/brands" element={<BrandsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
