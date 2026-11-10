import { ArrowDownRight, ArrowUpRight, Clapperboard, Film, Globe2, Mail, MessageCircle, Play, Sparkles, WandSparkles } from "lucide-react";

const services = [
  { icon: Film, number: "01", title: "AI video production", text: "Cinematic product films, fashion campaigns and social-first videos that help brands show up with impact." },
  { icon: Clapperboard, number: "02", title: "Video editing & motion", text: "Purposeful editing, pacing, transitions and motion graphics that turn raw footage into a clear story." },
  { icon: Globe2, number: "03", title: "Web design", text: "Modern, responsive websites that give businesses a professional home online." },
  { icon: WandSparkles, number: "04", title: "Digital creative support", text: "Creative content, SEO, social media support and practical AI-powered workflows." }
];

const work = [
  { title: "AI Product Commercial", category: "AI video · Product storytelling", description: "A cinematic product-video sample exploring visual storytelling for brands.", href: "https://drive.google.com/file/d/1YPiM8fc4cg6QUiw3os_DX4mp20GlBUvD/view?usp=sharing", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85", label: "View video sample" },
  { title: "Fashion Campaign Direction", category: "Fashion · Creative concept", description: "A visual direction concept for presenting a fashion collection with confidence.", href: "mailto:adedoyinsegunkolawole@gmail.com?subject=Fashion%20campaign%20enquiry", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85", label: "Discuss a similar project" },
  { title: "Brand Visual Exploration", category: "Visual storytelling · Concept", description: "An exploration of mood, composition and imagery for a memorable brand presence.", href: "mailto:adedoyinsegunkolawole@gmail.com?subject=Brand%20visual%20enquiry", image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=1200&q=85", label: "Discuss a similar project" }
];

const capabilities = ["AI video creation", "Creative direction", "Video editing", "Web design", "Digital marketing", "AI workflows"];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="site-header">
        <div className="container flex h-[82px] items-center justify-between">
          <a href="#" className="brand-mark">SEGUN<span>.</span></a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-slate-600 md:flex">
            <a href="#work" className="nav-link">Work</a><a href="#services" className="nav-link">Services</a><a href="#about" className="nav-link">About</a>
          </nav>
          <a href="#contact" className="button button-primary button-small">Let’s talk <ArrowUpRight size={16}/></a>
        </div>
      </header>

      <section className="hero-section">
        <div className="container grid items-center gap-14 py-20 lg:min-h-[660px] lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="relative z-10">
            <div className="eyebrow mb-7"><span className="eyebrow-dot"/> AI video creator <span className="eyebrow-divider">/</span> Digital creative</div>
            <h1 className="hero-title">Creative ideas,<br/><span>made impossible</span><br/>to ignore.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">I’m Segun. I help brands turn ideas and products into compelling visual stories through cinematic AI video, thoughtful design and digital experiences.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="button button-primary">Explore my work <ArrowUpRight size={17}/></a>
              <a href="#contact" className="button button-secondary">Start a project</a>
            </div>
            <div className="mt-14 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-slate-400"><ArrowDownRight size={16} className="text-blue-600"/> Scroll to explore</div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=90" alt="Creative event lighting and immersive visual installation" className="hero-image"/>
              <div className="hero-image-shade"/>
              <div className="hero-image-label"><span>THE CREATIVE APPROACH</span><strong>Make every<br/>frame count.</strong></div>
              <div className="hero-image-stamp"><Sparkles size={22}/></div>
            </div>
            <div className="floating-note"><span className="floating-note-icon"><Play size={15} fill="currentColor"/></span><span><strong>Visual storytelling</strong><small>From idea to impact</small></span></div>
            <div className="hero-orbit"/>
          </div>
        </div>
        <div className="container hero-bottom-line"><span>CREATIVITY</span><span>STRATEGY</span><span>EXECUTION</span><span className="hero-bottom-accent">LAGOS, NIGERIA · WORKING WORLDWIDE</span></div>
      </section>

      <section id="work" className="container section-spacing">
        <div className="section-heading">
          <div><div className="eyebrow mb-4">A few things I’ve made</div><h2 className="section-title">Selected <span>work.</span></h2></div>
          <p className="section-intro">A look at creative work and visual directions. Each project starts with a simple question: how can this story connect better?</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {work.map((item, i) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="work-card group">
            <div className="work-image-wrap"><img src={item.image} alt={item.title} className="work-image"/><span className="work-index">0{i+1}</span><span className="work-open"><ArrowUpRight size={20}/></span></div>
            <div className="pt-5"><div className="work-category">{item.category}</div><h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">{item.label} <ArrowUpRight size={15}/></span></div>
          </a>)}
        </div>
        <p className="mt-7 text-xs text-slate-400">Some items are creative concepts rather than commissioned client projects.</p>
      </section>

      <section id="services" className="services-section section-spacing">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow mb-4">How I can help</div><h2 className="section-title">Good ideas deserve<br/><span>great execution.</span></h2></div><p className="section-intro">A blend of creative thinking and practical digital skills to help your brand communicate clearly and stand out.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map(({icon: Icon, number, title, text}) => <div key={number} className="service-card"><div className="flex items-center justify-between"><span className="service-icon"><Icon size={23}/></span><span className="service-number">{number}</span></div><h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900">{title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="container about-section grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div><div className="eyebrow mb-4">A little about me</div><h2 className="section-title">Curiosity is my<br/><span>creative engine.</span></h2><div className="about-decoration"><span/><span/><span/></div></div>
        <div className="about-copy"><p>I’m Segun, a digital creative who enjoys bringing ideas to life with imagination, technology and clear communication.</p><p>My work sits at the intersection of AI-powered video, visual storytelling and digital solutions. I’m especially interested in helping fashion and product brands turn simple ideas into engaging campaigns.</p><p>From the first concept to the final delivery, I focus on making the work purposeful, polished and memorable.</p><div className="capability-list">{capabilities.map((s)=><span key={s}>{s}</span>)}</div></div>
      </section>

      <section id="contact" className="container pb-24">
        <div className="contact-panel"><div className="contact-orb"/><div className="relative z-10 mx-auto max-w-3xl text-center"><div className="eyebrow mb-5 text-blue-200">Have a project in mind?</div><h2 className="contact-title">Let’s make something<br/><span>people remember.</span></h2><p className="mx-auto mt-6 max-w-xl text-blue-50/80">Tell me what you’re building. I’d love to hear about your idea and explore how we can bring it to life.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="mailto:adedoyinsegunkolawole@gmail.com" className="button button-white"><Mail size={17}/> Email me</a><a href="https://wa.me/2349064843098" target="_blank" rel="noreferrer" className="button button-outline-white"><MessageCircle size={17}/> WhatsApp</a></div><p className="mt-7 text-sm text-blue-100/70">adedoyinsegunkolawole@gmail.com <span className="mx-2">·</span> 09064843098</p></div></div>
      </section>
      <footer className="site-footer"><div className="container flex flex-wrap items-center justify-between gap-4 py-7 text-xs text-slate-500"><span>© {new Date().getFullYear()} Segun. All rights reserved.</span><span>Thoughtfully made. Always evolving.</span><a href="#" className="font-semibold text-slate-700 hover:text-blue-700">Back to top ↑</a></div></footer>
    </main>
  );
}