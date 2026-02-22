import React, { useState, useRef } from 'react';
import Icon from './components/Icon';

const ministriesList = [
  { title: "Anthem Kids", desc: "For children 6 weeks through 5th grade.", img: "https://images.unsplash.com/photo-1516627145497-196249252708?q=80&w=800&auto=format&fit=crop" },
  { title: "Anthem Youth", desc: "Middle and High School students.", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop" },
  { title: "Young Adults", desc: "Ages 18-30 building community.", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" },
  { title: "Women's Ministry", desc: "Growing together in faith.", img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop" },
  { title: "Men's Ministry", desc: "Equipping men to lead.", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" },
  { title: "Worship & Tech", desc: "Leading our congregation in praise.", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop" },
  { title: "Outreach & Missions", desc: "Serving our local community.", img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop" },
  { title: "Legacy (55+)", desc: "Community for those 55 and older.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" }
];

const upcomingEvents = [
  {
    title: "Sunday Morning Service",
    date: "MAR 01",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    img: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Youth Spring Retreat",
    date: "MAR 14",
    time: "All Weekend",
    location: "Camp Cedar",
    img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Community Outreach",
    date: "MAR 21",
    time: "8:00 AM - 12:00 PM",
    location: "Downtown Plaza",
    img: "https://images.unsplash.com/photo-1593113589914-075568e09384?q=80&w=800&auto=format&fit=crop"
  }
];

const faqs = [
  { q: "What should I wear?", a: "Come exactly as you are. You'll see everything from jeans and t-shirts to suits. We care about you, not what you're wearing." },
  { q: "Where do my kids go?", a: "We have a dedicated, safe, and fun environment for kids ages 6 weeks through 5th grade called Anthem Kids. Check-in is fast and secure." },
  { q: "How long is the service?", a: "Our services typically run for about 75 minutes. We start with worship music, followed by a relevant, practical message." },
  { q: "Where do I park?", a: "We have designated guest parking right near the front entrance. Just turn your hazard lights on when you pull in, and our team will guide you!" }
];

const impactStats = [
  { value: "12,400+", label: "Meals Served Locally" },
  { value: "$150K", label: "Given to Global Missions" },
  { value: "450+", label: "People Baptized This Year" },
  { value: "8", label: "Local Schools Supported" }
];

const nextStepsList = [
  { title: "Join a Small Group", desc: "Find community and grow together.", icon: "Users" },
  { title: "Join the Serve Team", desc: "Use your gifts to make a difference.", icon: "Heart" },
  { title: "Next Steps Class", desc: "Learn about our vision and values.", icon: "BookOpen" },
  { title: "Get Baptized", desc: "Declare your faith in Jesus publicly.", icon: "Droplets" }
];

const leadersList = [
  {
    role: "LEAD PASTORS",
    name: "Ben and Donna Stuart",
    bio: "Ben and Donna are the founding pastors of Anthem Church. They have a passion for seeing people encounter the love of Jesus and discover their God-given purpose. They live in the city with their three children.",
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "EXECUTIVE PASTOR",
    name: "Michael Smith",
    bio: "Michael oversees the day-to-day operations of Anthem Church. With a background in organizational leadership, he ensures our teams are equipped to carry out the mission effectively.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "WORSHIP PASTOR",
    name: "Sarah Jenkins",
    bio: "Sarah leads our worship and creative teams. Her heart is to create an atmosphere where people can experience the presence of God through music and art in a profound way.",
    img: "https://images.unsplash.com/photo-1516280440502-86103328ce70?q=80&w=800&auto=format&fit=crop"
  },
  {
    role: "YOUTH PASTORS",
    name: "David & Emily Chen",
    bio: "David and Emily lead Anthem Youth. They are dedicated to helping middle and high school students build a strong foundation of faith during their critical teenage years.",
    img: "https://images.unsplash.com/photo-1622352824707-8fc4d400e28f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const carouselRef = useRef(null);

  // AI Invite State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteTarget, setInviteTarget] = useState('a friend');
  const [inviteTone, setInviteTone] = useState('casual');
  const [generatedInvite, setGeneratedInvite] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Leadership Slider State
  const [currentLeader, setCurrentLeader] = useState(0);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  const nextLeader = () => setCurrentLeader((prev) => (prev + 1) % leadersList.length);
  const prevLeader = () => setCurrentLeader((prev) => (prev - 1 + leadersList.length) % leadersList.length);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 364;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const generateInvite = async () => {
    setIsGenerating(true);
    setGeneratedInvite('');
    setIsCopied(false);

    const prompt = `Draft a short, warm, and ${inviteTone} text message invitation to invite ${inviteTarget} to our church's upcoming 'Night of Worship & Prayer'. Include a brief mention that it's an extended evening of uninterrupted worship and seeking God's presence. Make it feel natural and ready to send. Keep it under 3-4 sentences. Do not use generic placeholders like [Your Name], keep it generic enough to send as is.`;
    const apiKey = "";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      systemInstruction: { parts: [{ text: "You are a helpful assistant crafting warm, welcoming church invitations that are ready to be copy-pasted as text messages." }] }
    };

    let retries = 0;
    const maxRetries = 5;
    const delays = [1000, 2000, 4000, 8000, 16000];

    while (retries <= maxRetries) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error('API Error');
        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
        setGeneratedInvite(text);
        break;
      } catch (error) {
        if (retries === maxRetries) {
          setGeneratedInvite("Failed to generate invitation. Please check your connection and try again.");
          break;
        }
        await new Promise(res => setTimeout(res, delays[retries]));
        retries++;
      }
    }

    setIsGenerating(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedInvite).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = generatedInvite;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-body selection:bg-zinc-800 selection:text-white flex flex-col">
      {/* Import Google Fonts & Custom Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;500;600&display=swap');
        .font-heading { font-family: 'DM Sans', sans-serif; font-weight: 700; }
        .font-body { font-family: 'Inter', sans-serif; }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-slide-up { animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 0.4s ease-in-out forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-250 { animation-delay: 250ms; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* NAVIGATION */}
      <nav
        className="fixed w-full z-50 bg-zinc-950 border-b border-zinc-900"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white group-hover:scale-105 transition-transform duration-300">
                <path d="M20 2L2 38H12.5L20 23L27.5 38H38L20 2Z" fill="currentColor"/>
                <path d="M10 26H30L20 12L10 26Z" fill="currentColor" fillOpacity="0.4"/>
              </svg>
              <span className="font-heading text-white text-2xl tracking-tighter uppercase">Anthem<span className="text-zinc-500">.</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" onMouseEnter={() => setActiveMegaMenu(null)} className="text-sm font-medium hover:text-white transition-colors">Home</a>
              <a href="#" onMouseEnter={() => setActiveMegaMenu(null)} className="text-sm font-medium hover:text-white transition-colors">About</a>
              <div className="h-full flex items-center">
                <button
                  onMouseEnter={() => setActiveMegaMenu('ministries')}
                  className={`text-sm font-medium transition-colors ${activeMegaMenu === 'ministries' ? 'text-white' : 'hover:text-white'}`}
                >
                  Ministries
                </button>
              </div>
              <a href="#" onMouseEnter={() => setActiveMegaMenu(null)} className="text-sm font-medium hover:text-white transition-colors">Sermons</a>
              <a href="#" onMouseEnter={() => setActiveMegaMenu(null)} className="text-sm font-medium hover:text-white transition-colors">Give</a>
              <a href="#" onMouseEnter={() => setActiveMegaMenu(null)} className="bg-white text-zinc-950 px-5 py-2.5 rounded-sm text-sm font-heading hover:bg-zinc-200 transition-colors">
                Plan a Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-300 hover:text-white focus:outline-none"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950 border-b border-zinc-900 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-3 text-base font-medium hover:bg-zinc-900 hover:text-white rounded-sm">Home</a>
              <a href="#" className="block px-3 py-3 text-base font-medium hover:bg-zinc-900 hover:text-white rounded-sm">About</a>
              <a href="#" className="block px-3 py-3 text-base font-medium hover:bg-zinc-900 hover:text-white rounded-sm text-white">Ministries</a>
              <a href="#" className="block px-3 py-3 text-base font-medium hover:bg-zinc-900 hover:text-white rounded-sm">Sermons</a>
              <a href="#" className="block px-3 py-3 text-base font-medium hover:bg-zinc-900 hover:text-white rounded-sm">Give</a>
              <div className="pt-4 pb-2">
                <a href="#" className="block w-full text-center bg-white text-zinc-950 px-5 py-3 rounded-sm font-heading text-lg">
                  Plan a Visit
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Mega Menu Dropdown */}
        {activeMegaMenu === 'ministries' && (
          <div className="absolute top-full left-0 w-full bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-4 gap-12">
                <div className="animate-slide-up delay-100">
                  <h3 className="font-heading text-white text-lg mb-5 border-b border-zinc-800 pb-2">Kids & Youth</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Anthem Kids (0-5th Grade)</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Middle School</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">High School</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Special Needs Ministry</a></li>
                    <li>
                      <a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors mt-4 text-white font-medium flex items-center gap-1 group">
                        View All Next Gen <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="animate-slide-up delay-150">
                  <h3 className="font-heading text-white text-lg mb-5 border-b border-zinc-800 pb-2">Adults</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Young Adults</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Men's Ministry</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Women's Ministry</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Seniors (Legacy)</a></li>
                    <li>
                      <a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors mt-4 text-white font-medium flex items-center gap-1 group">
                        Join a Small Group <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="animate-slide-up delay-200">
                  <h3 className="font-heading text-white text-lg mb-5 border-b border-zinc-800 pb-2">Outreach & Care</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Local Missions</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Global Missions</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Counseling & Care</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Prayer Ministry</a></li>
                    <li><a href="#" className="block text-sm text-zinc-400 hover:text-white transition-colors">Marriage Support</a></li>
                  </ul>
                </div>
                <div className="animate-slide-up delay-250">
                  <h3 className="font-heading text-white text-lg mb-5 border-b border-zinc-800 pb-2">Featured</h3>
                  <a href="#" className="block group">
                    <div className="relative aspect-video rounded-sm overflow-hidden mb-3 border border-zinc-800">
                      <img
                        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2940&auto=format&fit=crop"
                        alt="Summer Camp"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <h4 className="text-white font-heading text-base group-hover:text-zinc-300 transition-colors">Summer Youth Retreat 2026</h4>
                    <p className="text-xs text-zinc-500 mt-1">Registration is now open. Secure your spot today!</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <main className="flex-grow pt-20">
        <section className="relative w-full min-h-[85vh] flex items-center bg-zinc-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2946&auto=format&fit=crop"
              className="w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-light-bursting-through-the-clouds-in-the-sky-31855-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-zinc-950/85"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
            <div className="max-w-3xl">
              <div className="inline-block bg-zinc-900 text-white px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase border border-zinc-800">
                Join us this Sunday at 9AM & 11AM
              </div>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-8">
                Find purpose.<br/>
                Find community.<br/>
                <span className="text-zinc-500">Find home.</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
                Anthem is a community of believers dedicated to following Jesus, loving our city, and making an impact in the world. No matter where you are on your journey, you belong here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-zinc-950 px-8 py-4 rounded-sm font-heading text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                  Watch Latest Sermon
                  <Icon name="ChevronRight" size={20} />
                </button>
                <button className="bg-transparent text-white border-2 border-zinc-800 px-8 py-4 rounded-sm font-heading text-lg hover:border-zinc-600 transition-colors flex items-center justify-center">
                  I'm New Here
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE SECTION */}
        <section className="relative flex overflow-x-hidden border-b border-zinc-900 bg-zinc-950 py-8 lg:py-12">
          <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center gap-8 md:gap-16 px-4 md:px-8">
            {['Who We Are', '—', 'Who We Are', '—', 'Who We Are', '—'].map((text, i) => (
              <span key={i} className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-zinc-900 uppercase tracking-tighter leading-none">{text}</span>
            ))}
          </div>
          <div className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden="true">
            {['Who We Are', '—', 'Who We Are', '—', 'Who We Are', '—'].map((text, i) => (
              <span key={i} className="font-heading text-6xl md:text-8xl lg:text-[10rem] text-zinc-900 uppercase tracking-tighter leading-none">{text}</span>
            ))}
          </div>
        </section>

        {/* LATEST SERMON SECTION */}
        <section className="bg-zinc-950 py-24 lg:py-32 border-b border-zinc-900 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 lg:mb-16">
              <div className="max-w-2xl">
                <div className="inline-block bg-zinc-900 text-white px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase border border-zinc-800">
                  Latest Message
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight text-white mb-6">
                  The Power of Now
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Pastor Ben Stuart continues our "Awakening" series by looking at how God uses our present circumstances to shape our future purpose.
                </p>
              </div>
              <button className="bg-transparent text-white border border-zinc-700 px-6 py-3 rounded-sm font-heading text-base hover:bg-zinc-900 transition-colors shrink-0">
                Browse Sermon Archive
              </button>
            </div>
            <div className="relative group cursor-pointer w-full aspect-video rounded-sm overflow-hidden bg-zinc-900 border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1544427508-316231940733?q=80&w=2940&auto=format&fit=crop"
                alt="Latest Sermon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-zinc-950 transform group-hover:scale-110 transition-transform duration-300 shadow-2xl pl-1.5">
                  <Icon name="Play" size={40} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / TWO COLUMN SECTION */}
        <section className="bg-zinc-950 py-24 lg:py-32 overflow-hidden relative border-b border-zinc-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] bg-zinc-900/40 rounded-full pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-white leading-[1.3] tracking-tight mb-10">
                  The mission of Anthem Church is all about spreading the Gospel of Jesus Christ. We won't stop serving, loving, and giving until every heart is turned towards Christ.
                </h2>
                <button className="bg-white text-zinc-950 px-8 py-4 rounded-sm font-heading text-lg hover:bg-zinc-200 transition-colors">
                  Our Leadership
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 border border-zinc-800 rounded-sm translate-x-6 translate-y-6 -z-10"></div>
                <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto rounded-sm overflow-hidden bg-zinc-900 border border-zinc-800">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2940&auto=format&fit=crop"
                    alt="Hands reaching out in community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SLIDER SECTION */}
        <section className="bg-[#F3F3F3] pt-32 pb-24 overflow-hidden border-b border-zinc-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mt-8 lg:mt-16">
              <h2 className="absolute -top-12 lg:-top-20 left-4 lg:left-8 text-[64px] sm:text-[80px] md:text-[100px] lg:text-[140px] font-heading text-black tracking-tighter leading-none z-10 select-none pointer-events-none">
                Our Leadership
              </h2>
              <div className="bg-[#EBE9E0] rounded-[2rem] pt-28 pb-16 px-6 sm:px-10 lg:p-20 lg:pt-32 relative shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[400px]">
                  <div key={currentLeader} className="animate-fade-in pr-4">
                    <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-[0.2em] font-bold mb-4">
                      {leadersList[currentLeader].role}
                    </p>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-black mb-6 tracking-tight leading-tight">
                      {leadersList[currentLeader].name}
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-800 leading-relaxed mb-10 lg:mb-12 max-w-md">
                      {leadersList[currentLeader].bio}
                    </p>
                    <button className="bg-[#00c2e0] text-black font-heading font-bold uppercase tracking-widest text-[11px] px-8 py-4 rounded-full hover:bg-[#00aed1] transition-colors shadow-sm inline-block">
                      See Our Leadership
                    </button>
                  </div>
                  <div key={`img-${currentLeader}`} className="relative aspect-[4/3] lg:aspect-auto lg:h-[420px] w-full animate-fade-in">
                    <img
                      src={leadersList[currentLeader].img}
                      alt={leadersList[currentLeader].name}
                      className="w-full h-full object-cover rounded-2xl shadow-sm"
                    />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex items-center gap-6">
                  <button onClick={prevLeader} className="text-black hover:text-zinc-500 transition-colors p-2" aria-label="Previous slide">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1L1 6L6 11M1 6H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button onClick={nextLeader} className="text-black hover:text-zinc-500 transition-colors p-2" aria-label="Next slide">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34 1L39 6L34 11M39 6H0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MINISTRIES CAROUSEL SECTION */}
        <section className="bg-white py-24 lg:py-32 border-b border-zinc-200 overflow-hidden text-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">Find Your Place</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We believe that church is more than just a Sunday service. It's a community where you can grow, serve, and connect with others. Explore our ministries and find where you belong.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => scrollCarousel('left')}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                aria-label="Scroll left"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 transition-colors"
                aria-label="Scroll right"
              >
                <Icon name="ChevronRight" size={24} />
              </button>
            </div>
          </div>
          <div className="w-full relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-80rem)/2+2rem)]"
            >
              {ministriesList.map((ministry, index) => (
                <div key={index} className={`snap-start flex-shrink-0 w-[280px] sm:w-[340px] group cursor-pointer ${index === 0 ? 'ml-[60px]' : ''}`}>
                  <div className="relative aspect-[4/5] mb-5 overflow-hidden rounded-sm bg-zinc-100 border border-zinc-200">
                    <img
                      src={ministry.img}
                      alt={ministry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-2xl text-zinc-950 mb-2">{ministry.title}</h3>
                  <p className="text-base text-zinc-600">{ministry.desc}</p>
                </div>
              ))}
              <div className="snap-start flex-shrink-0 w-1 sm:w-2" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        {/* NEXT STEPS SECTION */}
        <section className="bg-zinc-50 py-24 lg:py-32 border-b border-zinc-200 text-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">Your Next Right Step</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Whether you've been here for a day or a decade, there's always a next step to take in your faith journey. We're here to help you find it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nextStepsList.map((step, index) => (
                <div key={index} className="group cursor-pointer bg-white border border-zinc-200 p-8 rounded-sm hover:border-zinc-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-zinc-100 rounded-sm flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                    <Icon name={step.icon} size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl mb-3">{step.title}</h3>
                  <p className="text-zinc-600 text-sm mb-6">{step.desc}</p>
                  <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-amber-600 transition-colors">
                    Learn More <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UPCOMING EVENT SECTION */}
        <section className="relative bg-white border-b border-zinc-200 overflow-hidden text-zinc-950 flex flex-col lg:block">
          <div className="w-full h-[50vh] lg:h-auto lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop"
              alt="Worship Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative flex justify-end">
            <div className="w-full lg:w-1/2 py-24 lg:py-32 lg:pl-16 xl:pl-24 flex flex-col justify-center">
              <h2 className="text-5xl lg:text-7xl font-heading text-zinc-950 tracking-tight mb-8 leading-[1.1]">
                Night of Worship & Prayer
              </h2>
              <div className="pl-10">
                <p className="text-lg text-zinc-600 leading-relaxed mb-10">
                  Join us for an extended evening of uninterrupted worship, prayer, and seeking God's presence together. This is a special time dedicated to pressing in, lifting our voices, and experiencing the Holy Spirit in a fresh, powerful way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-zinc-950 text-white px-8 py-4 rounded-sm font-heading text-lg hover:bg-zinc-800 transition-colors inline-flex items-center justify-center gap-2">
                    Learn More <Icon name="ArrowRight" size={20} />
                  </button>
                  <button
                    onClick={() => setIsInviteModalOpen(true)}
                    className="bg-white text-zinc-950 border-2 border-zinc-200 px-8 py-4 rounded-sm font-heading text-lg hover:border-zinc-300 hover:bg-zinc-50 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Icon name="Sparkles" size={20} className="text-amber-500" /> Draft Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS GRID */}
        <section className="bg-zinc-950 py-24 lg:py-32 border-b border-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">Upcoming Events</h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  There is always something happening at Anthem. Check out our upcoming events and find a place to connect, serve, and grow with our community.
                </p>
              </div>
              <button className="hidden md:flex bg-white text-zinc-950 px-6 py-3 rounded-sm font-heading text-base hover:bg-zinc-200 transition-colors items-center gap-2 shrink-0">
                View All Events
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="group cursor-pointer border border-zinc-900 bg-zinc-900/40 hover:bg-zinc-900 transition-colors duration-300 rounded-sm overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-800 border-b border-zinc-900">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute top-4 left-4 bg-white text-zinc-950 px-3 py-2 flex flex-col items-center justify-center rounded-sm min-w-[60px] shadow-lg">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-0.5">{event.date.split(' ')[0]}</span>
                      <span className="text-xl font-heading leading-none">{event.date.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-heading text-2xl text-white mb-6 group-hover:text-zinc-300 transition-colors">{event.title}</h3>
                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <Icon name="Clock" size={16} className="shrink-0 text-zinc-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <Icon name="MapPin" size={16} className="shrink-0 text-zinc-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full md:hidden bg-white text-zinc-950 px-6 py-4 rounded-sm font-heading text-base hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shrink-0">
              View All Events
            </button>
          </div>
        </section>

        {/* IMPACT / GENEROSITY SECTION */}
        <section className="bg-zinc-900 py-24 lg:py-32 border-b border-zinc-800 text-white overflow-hidden relative">
          <div className="absolute -right-64 -top-64 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">Live Generously.</h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-lg">
                  We believe that we are blessed to be a blessing. Through the radical generosity of our church family, we are able to meet physical and spiritual needs both in our local community and around the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-zinc-950 px-8 py-4 rounded-sm font-heading text-lg hover:bg-zinc-200 transition-colors">Give Online</button>
                  <button className="bg-transparent text-white border border-zinc-700 px-8 py-4 rounded-sm font-heading text-lg hover:bg-zinc-800 transition-colors">Our Impact Report</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:pl-12">
                {impactStats.map((stat, index) => (
                  <div key={index} className="border-l-2 border-zinc-800 pl-6">
                    <p className="text-4xl sm:text-5xl font-heading text-white mb-2">{stat.value}</p>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PLAN A VISIT / FAQ SECTION */}
        <section className="bg-white py-24 lg:py-32 text-zinc-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">Plan a Visit</h2>
                <p className="text-lg text-zinc-600 leading-relaxed mb-12">
                  We can't wait to host you! Whether you've grown up in church or you're stepping into one for the very first time, we've designed our Sunday experiences with you in mind.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shrink-0">
                      <Icon name="MapPin" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-1">Location</h4>
                      <p className="text-zinc-600 text-sm">1234 Faith Avenue<br />Metro City, ST 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 shrink-0">
                      <Icon name="Clock" size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl mb-1">Service Times</h4>
                      <p className="text-zinc-600 text-sm">Sundays at 9:00 AM & 11:00 AM<br />Kids Ministry available at both services</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 bg-zinc-50 border border-zinc-200 p-6 rounded-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg mb-1">Let us know you're coming</h4>
                    <p className="text-sm text-zinc-500">We'll meet you at the front doors!</p>
                  </div>
                  <button className="bg-zinc-950 text-white px-6 py-3 rounded-sm font-heading text-sm hover:bg-zinc-800 transition-colors">
                    Schedule Visit
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-2xl mb-8">What to Expect</h3>
                <div className="border-t border-zinc-200">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-zinc-200">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={`font-heading text-lg ${openFaq === index ? 'text-amber-600' : 'text-zinc-900'}`}>
                          {faq.q}
                        </span>
                        <div className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-amber-600' : 'text-zinc-400'}`}>
                          <Icon name={openFaq === index ? 'Minus' : 'Plus'} size={20} />
                        </div>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-zinc-600 leading-relaxed pr-8">{faq.a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 pb-12 overflow-hidden">
        <div className="relative flex overflow-x-hidden border-t border-zinc-900 bg-zinc-900/20 py-8 mb-16">
          {[0, 1].map((i) => (
            <div key={i} className="animate-marquee whitespace-nowrap flex-shrink-0 flex items-center gap-8 md:gap-16 px-4 md:px-8" aria-hidden={i === 1 ? 'true' : undefined}>
              {['You Belong Here', '•', 'Anthem Church', '•', 'Find Purpose', '•'].map((text, j) => (
                <span key={j} className="font-heading text-5xl md:text-7xl lg:text-9xl text-zinc-800 uppercase tracking-tighter leading-none">{text}</span>
              ))}
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white hover:scale-105 transition-transform duration-300">
                <path d="M20 2L2 38H12.5L20 23L27.5 38H38L20 2Z" fill="currentColor"/>
                <path d="M10 26H30L20 12L10 26Z" fill="currentColor" fillOpacity="0.4"/>
              </svg>
            </div>
            <span className="font-heading text-white text-xl tracking-widest uppercase">Anthem Church</span>
          </div>
          <hr className="border-zinc-800 my-10" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl md:text-4xl text-white uppercase leading-tight tracking-tight">
                Stay up to date<br />with Anthem
              </h2>
              <div className="flex items-center border-b border-zinc-600 focus-within:border-white transition-colors pb-3 mt-8 lg:mt-16 w-full max-w-md">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL"
                  className="bg-transparent border-none outline-none text-xs text-white flex-grow placeholder-zinc-500 uppercase tracking-widest w-full"
                />
                <button className="text-xs font-bold text-white uppercase tracking-widest ml-4 hover:text-zinc-300 transition-colors shrink-0">
                  Submit
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 text-left md:text-right">
              <div>
                <h3 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Details</h3>
                <ul className="space-y-4">
                  {['About', 'Give', 'Door Holders', 'Email Updates', 'Contact'].map((link) => (
                    <li key={link}><a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">Ministries</h3>
                <ul className="space-y-4">
                  {['Anthem Kids', 'Anthem Youth', 'Young Adults'].map((link) => (
                    <li key={link}><a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">The Church</h3>
                <ul className="space-y-4">
                  {['Metro City Campus', 'Anthem Worship', 'Sermon Resources', 'Leadership Academy', 'Global Missions'].map((link) => (
                    <li key={link}><a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-zinc-800 my-10" />
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-xs text-zinc-500">
            <p className="shrink-0">© {new Date().getFullYear()} Anthem Church</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {['About', 'Privacy Policy', 'Terms and Conditions', 'Email Updates', 'Contact'].map((link) => (
                <a key={link} href="#" className="hover:text-zinc-300 transition-colors">{link}</a>
              ))}
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <Icon name="Youtube" size={16} className="hover:text-white cursor-pointer transition-colors" />
              <Icon name="Instagram" size={16} className="hover:text-white cursor-pointer transition-colors" />
              {/* Custom X/Twitter icon */}
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white cursor-pointer transition-colors">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <Icon name="Facebook" size={16} className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      {/* AI INVITE MODAL */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
            onClick={() => setIsInviteModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-lg bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden animate-slide-up">
            <div className="flex justify-between items-center p-6 border-b border-zinc-100 bg-zinc-50">
              <div className="flex items-center gap-2 text-zinc-950">
                <Icon name="Sparkles" size={20} className="text-amber-500" />
                <h3 className="font-heading text-xl">AI Invitation Drafter</h3>
              </div>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-zinc-400 hover:text-zinc-950 transition-colors">
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="p-6 space-y-6 text-zinc-950 flex-grow">
              <p className="text-sm text-zinc-600">
                Want to bring someone to the Night of Worship? Let our AI draft a perfectly worded text message for you to send.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Who are you inviting?</label>
                  <select
                    value={inviteTarget}
                    onChange={(e) => setInviteTarget(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 text-zinc-950 text-sm rounded-sm focus:ring-zinc-950 focus:border-zinc-950 block p-3 outline-none"
                  >
                    <option value="a friend">A close friend</option>
                    <option value="a coworker">A coworker</option>
                    <option value="a family member">A family member</option>
                    <option value="a neighbor">A neighbor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Desired Tone</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['casual', 'enthusiastic', 'thoughtful'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setInviteTone(t)}
                        className={`py-2 text-xs font-medium uppercase tracking-wider rounded-sm border transition-colors ${
                          inviteTone === t
                            ? 'bg-zinc-950 text-white border-zinc-950'
                            : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={generateInvite}
                  disabled={isGenerating}
                  className="w-full bg-zinc-950 text-white py-4 rounded-sm font-heading text-lg hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isGenerating
                    ? <><Icon name="Loader2" size={20} className="animate-spin" /> Drafting...</>
                    : <><Icon name="Sparkles" size={20} /> Generate Invite</>
                  }
                </button>
              </div>
              {generatedInvite && (
                <div className="mt-6 space-y-3 animate-slide-up">
                  <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-sm text-sm text-zinc-800 leading-relaxed whitespace-pre-wrap">
                    {generatedInvite}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="w-full bg-white border border-zinc-200 text-zinc-950 py-3 rounded-sm font-medium text-sm hover:bg-zinc-50 transition-colors flex justify-center items-center gap-2"
                  >
                    {isCopied
                      ? <><Icon name="Check" size={16} className="text-green-600" /> Copied to Clipboard!</>
                      : <><Icon name="Copy" size={16} /> Copy to Clipboard</>
                    }
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
