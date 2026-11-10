import { ArrowDown, ArrowUpRight, Clapperboard, Film, WandSparkles, Globe2, Mail, MessageCircle, Play, Sparkles } from "lucide-react";

const services = [
  { icon: Film, title: "AI video production", text: "Cinematic product films, brand stories and social-first video campaigns." },
  { icon: Clapperboard, title: "Video editing & motion", text: "Thoughtful editing, pacing, transitions and motion that keep people watching." },
  { icon: Globe2, title: "Web & digital experiences", text: "Clean, responsive websites and digital touchpoints for growing brands." },
  { icon: WandSparkles, title: "Creative growth support", text: "Content ideas, social media support, SEO and practical AI-powered workflows." }
];

const work = [
  { title: "AI Product Commercial", category: "Product film · AI video", description: "A cinematic product-video sample created to bring a brand visual to life.", href: "https://drive.google.com/file/d/1YPiM8fc4cg6QUiw3os_DX4mp20GlBUvD/view?usp=sharing", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" },
  { title: "Fashion Campaign Concepts", category: "Fashion · Creative direction", description: "Visual campaign concepts designed to make collections feel like a story.", href: "mailto:adedoyinsegunkolawole@gmail.com?subject=Fashion%20campaign%20portfolio", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85" },
  { title: "Brand Visual Experiments", category: "Visual storytelling · Motion", description: "Explorations in mood, atmosphere and memorable brand imagery.", href: "mailto:adedoyinsegunkolawole@gmail.com?subject=Brand%20visual%20work", image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=1200&q=85" }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="container flex h-20 items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight">SEGUN<span className="text-blue-300">.</span></a>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#work" className="hover:text-white">Selected work</a><a href="#services" className="hover:text-white">Services</a><a href="#about" className="hover:text-white">About</a>
        </nav>
        <a href="#contact" className="rounded-full border border-blue-300/50 px-5 py-2.5 text-sm font-semibold hover:bg-blue-300 hover:text-slate-950">Let’s talk <ArrowUpRight className="ml-1 inline" size={15}/></a>
      </header>

      <section className="grid-lines relative">
        <div className="container grid min-h-[650px] items-center gap-12 py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative z-10">
            <div className="eyebrow mb-7 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-300"/> AI video creator · Digital creative</div>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-.055em] sm:text-7xl">I turn bold ideas into <span className="gradient-text">visual experiences.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">I’m Segun — a creative partner helping brands tell stronger stories through cinematic AI videos, thoughtful design and digital experiences.</p>
            <div className="mt-10 flex flex-wrap gap-4"><a href="#work" className="rounded-full bg-blue-300 px-7 py-4 font-bold text-slate-950 hover:-translate-y-1">Explore my work <ArrowUpRight className="ml-2 inline" size={17}/></a><a href="#contact" className="rounded-full border border-white/15 px-7 py-4 font-semibold hover:border-blue-300">Start a project</a></div>
            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[.18em] text-slate-500"><ArrowDown size={15}/> Scroll to explore</div>
          </div>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-8 rounded-full bg-blue-500/15 blur-3xl"/>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85" alt="Abstract cinematic creative studio lighting" className="h-full w-full object-cover opacity-80"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-transparent to-blue-950/10"/>
              <div className="absolute bottom-7 left-7 right-7"><div className="eyebrow">Creative mindset</div><p className="mt-2 text-3xl font-bold leading-tight">Make people<br/>feel something.</p></div>
              <div className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/20 p-3 backdrop-blur"><Sparkles className="text-blue-200" size={22}/></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container py-28">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-5"><div><div className="eyebrow mb-4">Selected work</div><h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Ideas made <span className="text-blue-300">visible.</span></h2></div><p className="max-w-sm text-sm leading-6 text-slate-400">A selection of creative directions and video work. More projects can be shared on request.</p></div>
        <div className="grid gap-6 md:grid-cols-3">{work.map((item, i) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group card overflow-hidden rounded-2xl"><div className="relative aspect-[4/5] overflow-hidden"><img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"/><div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 p-3 backdrop-blur"><Play size={16} fill="currentColor"/></div><div className="absolute right-5 top-5 text-xs text-white/70">0{i+1}</div></div><div className="p-6"><div className="text-xs font-semibold uppercase tracking-wider text-blue-300">{item.category}</div><h3 className="mt-3 flex items-center justify-between text-xl font-bold">{item.title}<ArrowUpRight size={18} className="text-slate-500 group-hover:text-blue-300"/></h3><p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p></div></a>)}</div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#0c1422] py-28">
        <div className="container"><div className="eyebrow mb-4">What I do</div><h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Creative thinking. <span className="text-blue-300">Practical execution.</span></h2><div className="mt-14 grid gap-4 sm:grid-cols-2">{services.map(({icon: Icon,title,text},i)=><div key={title} className="card rounded-2xl p-8"><div className="flex items-center justify-between"><Icon className="text-blue-300" size={27}/><span className="text-sm text-slate-600">0{i+1}</span></div><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{text}</p></div>)}</div></div>
      </section>

      <section id="about" className="container grid gap-12 py-28 md:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow mb-4">A little about me</div><h2 className="text-4xl font-bold tracking-tight">Curiosity is my <span className="text-blue-300">creative engine.</span></h2></div><div className="space-y-6 text-lg leading-8 text-slate-400"><p>I’m Segun, a digital creative who enjoys bringing ideas to life with a mix of imagination, technology and clear communication.</p><p>My work sits at the intersection of AI-powered video, visual storytelling and digital solutions. I’m especially interested in helping fashion and product brands turn simple ideas into engaging campaigns.</p><p>From the first concept to the final delivery, I focus on making the work purposeful, polished and memorable.</p><div className="flex flex-wrap gap-2 pt-2">{["AI video","Creative direction","Video editing","Web design","Digital marketing","AI workflows"].map(s=><span key={s} className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300">{s}</span>)}</div></div></section>

      <section id="contact" className="container pb-24"><div className="relative overflow-hidden rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-[#142544] to-[#0e1728] px-8 py-16 text-center sm:px-16"><div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"/><div className="relative"><div className="eyebrow mb-5">Have a project in mind?</div><h2 className="mx-auto max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Let’s create something <span className="gradient-text">worth watching.</span></h2><p className="mx-auto mt-6 max-w-xl text-slate-300">Tell me what you’re building. Let’s explore how strong visuals and smart digital solutions can help.</p><div className="mt-9 flex flex-wrap justify-center gap-4"><a href="mailto:adedoyinsegunkolawole@gmail.com" className="rounded-full bg-blue-300 px-7 py-4 font-bold text-slate-950 hover:-translate-y-1"><Mail className="mr-2 inline" size={17}/> Email me</a><a href="https://wa.me/2349064843098" target="_blank" rel="noreferrer" className="rounded-full border border-white/25 px-7 py-4 font-semibold hover:border-blue-300"><MessageCircle className="mr-2 inline" size={17}/> WhatsApp</a></div><p className="mt-7 text-sm text-slate-400">adedoyinsegunkolawole@gmail.com · 09064843098</p></div></div></section>
      <footer className="border-t border-white/10 py-8"><div className="container flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500"><span>© {new Date().getFullYear()} Segun. All rights reserved.</span><span>Made with purpose and a little imagination.</span><a href="#" className="text-slate-300 hover:text-blue-300">Back to top ↑</a></div></footer>
    </main>
  );
}