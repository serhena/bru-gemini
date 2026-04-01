'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Clock, ChevronRight, Instagram, Mail, Zap, Target, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

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
    title: 'Drop Off',
    description: 'Bring your racquet to our Adelaide workshop.',
  },
  {
    title: 'Restring',
    description: 'Precision stringing using electronic constant-pull machines.',
  },
  {
    title: 'Pick Up',
    description: 'Ready within 24 hours. Dominate the court again.',
  },
];

export default function LandingPage() {
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
            <a href="#booking-form" className="hover:text-[#C8F135] transition-colors">Book Now</a>
          </div>
          <a 
            href="#booking-form" 
            className="bg-[#C8F135] text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            BOOK NOW
          </a>
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
            <div className="flex flex-wrap gap-4">
              <a href="#booking-form" className="bg-[#C8F135] text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#b8dd30] transition-all">
                Get Restrung — Fill the Form <ArrowRight size={20} />
              </a>
              <a href="#services" className="border border-white/10 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                See Strings & Pricing
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-[2/3] rounded-3xl overflow-hidden border border-white/10"
          >
            <Image 
              src="https://picsum.photos/seed/adelaide-tennis-pro/1000/1500" 
              alt="Bruno at Adelaide International"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
          </motion.div>
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
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter font-display mb-20 uppercase">THE PROCESS</h2>
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter font-display">
            BRUNO<span className="text-[#C8F135]">RESTRINGS</span>
          </div>
          <div className="text-sm text-white/30">
            © 2026 Bruno Restrings. Adelaide, SA.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-white/50 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
