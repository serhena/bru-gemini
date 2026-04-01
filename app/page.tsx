'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronRight, Instagram, Mail, Zap, Target, Trophy, ArrowRight, CheckCircle2, Plus, Minus, Share2 } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: "How often should I restring my racquet?",
    answer: "A good rule of thumb: restring as many times per year as you play per week. So if you play 3 times a week, aim for 3 restrings a year. Competitive players or those with big swings may need more frequent restringing, as strings lose tension and elasticity over time even without breaking."
  },
  {
    question: "How much does the service cost?",
    answer: "Our standard labour fee is $20. Full packages (labour + string) start from $35 and go up to $50 for premium setups. Not sure what you need? Message me on WhatsApp and we'll help you find the best option for your budget and game."
  },
  {
    question: "Where can I drop off my racquet?",
    answer: "Drop-offs are at Greenacres, message me on WhatsApp for full address. It's quick and easy — no appointments needed during drop-off hours."
  },
  {
    question: "What is the turnaround time?",
    answer: "Most racquets are ready within 24–48 hours. We'll let you know as soon as yours is done and ready for collection."
  },
  {
    question: "Can you help me choose the right string?",
    answer: "Absolutely. Just tell us your playing style, level, and budget and we'll recommend the best string for you. Whether you're after more power, control, comfort, or durability, we've got you covered."
  },
  {
    question: "Can I bring my own strings?",
    answer: "Yes! If you already have a string you love, just bring it along and we'll string it for the $20 labour fee. We're happy to work with whatever you bring."
  },
  {
    question: "What tension should I use?",
    answer: "It depends on your playing style and racquet. As a general guide: lower tensions (48–54 lbs) give more power and comfort, while higher tensions (55–62 lbs) offer more control. We recommend staying within the range printed on your racquet frame, and we're happy to advise based on how you play."
  },
  {
    question: "Do you offer home delivery?",
    answer: "Yes, for a fee we can arrange home delivery. Message me on WhatsApp to discuss."
  },
  {
    question: "What happens if a string breaks early?",
    answer: "Strings can break due to mishits, off-centre hits, or an aggressive playing style — this is normal and not a stringing defect. However, if you believe there was an issue with the job itself, reach out and we'll look into it. Your satisfaction is important to me."
  },
  {
    question: "Are you a certified stringer?",
    answer: "Yes — I hold a Tennis SA Stringing Certification, so you can trust your racquet is in experienced, trained hands."
  }
];

const services = [
  {
    title: 'Entry Level',
    price: '$35',
    features: ['Durable Synthetic Gut', 'Great all-round comfort', 'Perfect for club players'],
    isPopular: false,
  },
  {
    title: 'Polyester',
    price: '$40',
    features: ['Maximum Spin & Control', 'High tension maintenance', 'Professional feel'],
    isPopular: true,
  },
  {
    title: 'Premium',
    price: '$50',
    features: ['Natural Gut or Hybrid', 'Ultimate Arm Protection', 'Maximum power output'],
    isPopular: false,
  },
];

const steps = [
  {
    title: 'Fill the Form',
    description: 'Tell me about your playstyle, previous strings, and any arm issues for a tailored recommendation.',
  },
  {
    title: 'Drop Off your racket',
    description: 'Convenient location and hours for drop-off. Most racquets are finished within 24-48h.',
  },
  {
    title: 'Pick Up, Ready to Play',
    description: "Get notified via SMS once it's ready. Payment is seamless and you're back on court.",
  },
];

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter font-display">
            BRUNO<span className="text-[#C8F135]">RESTRINGS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium opacity-70">
            <a href="#services" className="hover:text-[#C8F135] transition-colors">Services</a>
            <a href="#booking-form" className="hover:text-[#C8F135] transition-colors">find out my string</a>
            <a href="#faq" className="hover:text-[#C8F135] transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.link/4wv5w0" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C8F135] text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Whatsapp Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C8F135]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C2E6FF]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C8F135]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8F135] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8F135]"></span>
                </span>
                ADELAIDE, SA
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C8F135]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8F135] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8F135]"></span>
                </span>
                24H TURNAROUND
              </div>
            </div>
            <h1 className="text-6xl md:text-[86px] font-bold leading-[0.9] tracking-tighter mb-8 font-display uppercase">
              YOUR RACQUET, <br />
              <span className="text-gradient">RESTRUNG BY</span> <br />
              <span className="text-[#C8F135]">TOMORROW.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-md mb-10 leading-relaxed">
              Restring your racket with an Adelaide&apos;s local tennis restringing specialist. Fill up the form and receive an expert string advice included — no extra charge.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <a 
                href="#booking-form" 
                className="bg-[#C8F135] text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#b8dd30] transition-all"
              >
                Get Restrung — Fill the Form <ArrowRight size={20} />
              </a>
              <a 
                href="https://wa.link/4wv5w0" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
              >
                Whatsapp Me
              </a>
            </div>
          </motion.div>

          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in'
              }}
            >
              <Image 
                src="/bruno-adelaide.jpg" 
                alt="Bruno at Adelaide International"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Handwriting Arrow & Text */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-[5%] left-[32%] z-20 pointer-events-none hidden lg:block"
            >
              <div className="relative flex flex-col items-center text-[#C8F135] group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <span className="font-handwriting text-8xl rotate-[-8deg] whitespace-nowrap">
                  Bruno
                </span>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="-mt-4">
                  <path d="M50 10 Q 45 45, 55 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M40 65 L 55 80 L 70 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-12 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1 text-center flex flex-col items-center"
            >
              <div className="text-4xl font-bold text-[#C8F135] font-display">300+</div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">RACQUETS RESTRUNG</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1 text-center flex flex-col items-center"
            >
              <div className="text-4xl font-bold text-[#C8F135] font-display">24-48h</div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">TURNAROUND</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-1 text-center flex flex-col items-center"
            >
              <div className="text-4xl font-bold text-[#C8F135] font-display flex items-center gap-2">
                <span className="text-3xl">🏆</span> TA
              </div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">TENNIS AUSTRALIA CERTIFIED</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-1 text-center flex flex-col items-center"
            >
              <div className="text-4xl font-bold text-[#C8F135] font-display">15+</div>
              <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase">STRINGS AVAILABLE</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter font-display mb-20 uppercase">
            Getting restrung is <span className="text-[#C8F135]">easy.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10" />
            
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#111111] border border-[#C8F135] flex items-center justify-center text-xl font-bold mx-auto mb-8 relative">
                  {i + 1}
                  <div className="absolute inset-0 rounded-full bg-[#C8F135]/20 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-display uppercase tracking-tight">{step.title}</h3>
                <p className="text-white/50">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20 gap-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-display uppercase">
              Something for every <span className="text-[#C8F135]">player</span> and every <span className="text-[#C8F135]">budget</span>.
            </h2>
            <p className="text-white/50 max-w-2xl">
              All prices include high-quality strings and professional labor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`p-10 rounded-[32px] flex flex-col h-full relative transition-all duration-300 ${
                  service.isPopular 
                    ? 'bg-white border-4 border-[#C8F135] shadow-[0_20px_50px_rgba(200,241,53,0.15)]' 
                    : 'bg-white border border-white/10'
                }`}
              >
                {service.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C8F135] text-black text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="text-xs">★</span> MOST POPULAR
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2 font-display text-black">{service.title}</h3>
                <div className="text-5xl font-black mb-10 text-black font-display">{service.price}</div>
                
                <div className="space-y-4 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-[#C8F135] flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-[#22c55e]" />
                      </div>
                      <span className="text-sm font-medium text-black/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking-form" className="py-32 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-display mb-4 uppercase">READY TO <span className="text-[#C8F135]">SERVE?</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">Fill out the form below to book your restringing service. We&apos;ll get back to you as soon as possible.</p>
          </div>
          
          <div className="rounded-[40px] overflow-hidden border border-white/10 glass">
            <iframe 
              src="https://level-chameleon-75a.notion.site/ebd//ac2917a6847f83ccb0510116d492b6ec" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-display mb-16 uppercase text-center">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-white/10 rounded-2xl overflow-hidden glass transition-colors hover:border-white/20"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold font-display uppercase tracking-tight">{faq.question}</span>
                  {openFaq === i ? (
                    <Minus size={20} className="text-[#C8F135] flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-[#C8F135] flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-8 pb-8 text-white/60 leading-relaxed">
                        {faq.answer.includes('WhatsApp') ? (
                          <span>
                            {faq.answer.split('WhatsApp')[0]}
                            <a 
                              href="https://wa.link/4wv5w0" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-[#C8F135] hover:underline"
                            >
                              WhatsApp
                            </a>
                            {faq.answer.split('WhatsApp')[1]}
                          </span>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#C8F135] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-[#0a0a0a]">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter font-display mb-4">
              Ready to restring? It takes 2 minutes.
            </h2>
            <p className="text-xl font-medium opacity-80">
              Take the quiz and I will send you a personalized string recommendation.
            </p>
          </div>
          <a 
            href="#booking-form"
            className="bg-[#0a0a0a] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-2xl whitespace-nowrap"
          >
            Get Restrung <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="text-3xl font-bold tracking-tighter font-display text-[#C8F135]">
              Bruno Restrings
            </div>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Premium tennis restringing service based in Adelaide. Expert advice and professional quality for every player.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest text-white uppercase">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-[#C8F135] transition-colors">Home</a>
                <a href="#booking-form" className="text-white/60 hover:text-[#C8F135] transition-colors">Get Restrung</a>
                <a href="#faq" className="text-white/60 hover:text-[#C8F135] transition-colors">FAQ</a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest text-white uppercase">CONTACT</h4>
            <div className="space-y-4">
              <p className="text-white/60">0450 700 794</p>
              <a href="mailto:hello@brunorestrings.au" className="text-white/60 hover:text-[#C8F135] transition-colors block">
                hello@brunorestrings.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/40">
            © 2025 Bruno Restrings · All prices include string + labour.
          </div>
          <div className="flex gap-8 text-sm text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
