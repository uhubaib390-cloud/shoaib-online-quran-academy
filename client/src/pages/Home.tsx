import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock3,
  Compass,
  FileText,
  Globe2,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PanelTop,
  Phone,
  Quote,
  ScrollText,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link } from "wouter";

const whatsappNumber = "923176262240";
const whatsappLabel = "+92 317 6262240";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const teacherPhoto = asset("teacher-muhammad-shoaib.png");

const courses = [
  {
    number: "01",
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    short: "Begin at the beginning, with patient guidance through every Arabic letter and sound.",
    description:
      "The perfect first step for beginners and children. Learn Arabic letters, pronunciation, and the foundations of correct Quran recitation with structured one-to-one guidance.",
    outcomes: ["Arabic alphabet", "Correct pronunciation", "Beginner friendly"],
    duration: "8–12 weeks",
    age: "Ages 5+",
    icon: BookOpen,
    image: asset("reference/course-qaida.png"),
  },
  {
    number: "02",
    slug: "nazra-quran",
    title: "Nazra Quran",
    short: "Build fluent, confident recitation with Tajweed rules that become second nature.",
    description:
      "Read the Holy Quran fluently with proper Tajweed rules under the supervision of qualified teachers, building confidence and accuracy in every recitation.",
    outcomes: ["Fluent recitation", "Tajweed rules", "Qualified supervision"],
    duration: "Flexible pace",
    age: "All ages",
    icon: ScrollText,
    image: asset("reference/course-nazra.png"),
  },
  {
    number: "03",
    slug: "quran-translation",
    title: "Quran Translation",
    short: "Move from reading the words to understanding the meaning carried in every ayah.",
    description:
      "Understand the meaning of the Words of Allah through guided translation and Tafseer studies, connecting the heart and mind to the message of the Quran.",
    outcomes: ["Meaning of verses", "Tafseer studies", "Guided discussion"],
    duration: "12+ weeks",
    age: "Ages 10+",
    icon: Compass,
    image: asset("reference/course-translation.png"),
  },
  {
    number: "04",
    slug: "hifz-ul-quran",
    title: "Hifz-ul-Quran",
    short: "A steady memorisation path built around revision, rhythm, and strong retention.",
    description:
      "A dedicated memorisation programme with systematic revision, daily tracking, and experienced Hufaz guiding students toward lasting retention.",
    outcomes: ["Structured memorisation", "Daily revision", "Progress tracking"],
    duration: "Personal plan",
    age: "Ages 7+",
    icon: Star,
    image: asset("reference/course-hifz.png"),
  },
  {
    number: "05",
    slug: "islamic-studies",
    title: "Islamic Studies",
    short: "Explore Seerah, Fiqh, Hadith basics, and the manners that shape a balanced Deen.",
    description:
      "Explore Seerah, Fiqh, Hadith basics, and Islamic manners with knowledgeable teachers, building a strong, balanced understanding of the Deen for all ages.",
    outcomes: ["Seerah & Fiqh", "Islamic manners", "All ages welcome"],
    duration: "8–16 weeks",
    age: "All ages",
    icon: HeartHandshake,
    image: asset("reference/course-islamic-studies.png"),
  },
  {
    number: "06",
    slug: "tajweed-ul-quran",
    title: "Tajweed-ul-Quran",
    short: "Refine the beauty and accuracy of your recitation through focused practice.",
    description:
      "Strengthen makharij, characteristics of letters, rules of stopping, and the beautiful rhythm of reciting the Quran correctly.",
    outcomes: ["Makharij practice", "Recitation fluency", "Personal feedback"],
    duration: "10–16 weeks",
    age: "Ages 8+",
    icon: Sparkles,
    image: asset("reference/course-nazra.png"),
  },
  {
    number: "07",
    slug: "basic-islamic-education",
    title: "Basic Islamic Education",
    short: "A warm, practical foundation in duas, salah, beliefs, and everyday Islamic life.",
    description:
      "A clear starting point for young learners and families who want practical, age-appropriate Islamic education alongside Quran learning.",
    outcomes: ["Daily duas", "Salah foundations", "Faith & character"],
    duration: "Flexible pace",
    age: "Ages 5+",
    icon: GraduationCap,
    image: asset("reference/course-islamic-studies.png"),
  },
];

const plans = [
  {
    label: "Basic",
    price: "$30",
    note: "A graceful beginning to your Quran journey",
    features: ["Online Quran classes", "Qualified teacher", "2 classes per week", "Flexible timing", "Quran reading (Nazra)", "Progress monitoring"],
  },
  {
    label: "Standard",
    price: "$45",
    note: "Our most popular path for steady growth",
    features: ["Online Quran classes", "One-to-one learning", "Flexible timing", "Quran reading & Tajweed", "Islamic studies", "Progress monitoring"],
    featured: true,
  },
  {
    label: "Premium",
    price: "$60",
    note: "Complete attention for serious learners",
    features: ["Senior qualified teacher", "One-to-one learning", "Daily flexible timing", "Hifz or translation focus", "Islamic studies included", "Weekly progress reports"],
  },
];

const faqs = [
  ["Are the classes really one-to-one?", "Yes. Every live lesson is built around one student, one teacher, and a time that works for your family."],
  ["Can I request a female Quran teacher?", "Yes. Female students and families can request a female teacher through the admission or free-trial form."],
  ["Which countries do you teach students in?", "We welcome students from around the world. We arrange timing around your time zone and routine."],
  ["How do I begin?", "Start with the free trial form. We will use your preferred course, timing, and teacher preference to arrange the next step."],
  ["Do I have to choose a plan before the trial?", "No. The free trial is a chance to experience the learning style before choosing the plan and course that fit you best."],
];

const benefits = [
  [ShieldCheck, "Qualified guidance", "Hufaz and experienced teachers guiding every lesson with sincerity."],
  [Globe2, "Learn from anywhere", "Attend live classes from home, wherever you are in the world."],
  [UserRound, "One-to-one focus", "A private class where your progress is the only focus."],
  [CalendarDays, "Flexible timings", "Schedules adapted to your time zone, school, work, and routine."],
  [UsersRound, "A place for every age", "From first letters to advanced Hifz, every level is welcome."],
  [MessageCircle, "Begin with a trial", "Experience the teaching style first, at no cost and no obligation."],
];

const testimonials = [
  ["“Our daughter now reads with a confidence we could not have imagined a few months ago. The one-to-one attention has made all the difference.”", "Parent of a Nazra student", "Toronto, Canada"],
  ["“The timing is gentle and flexible, and the lessons feel personal. We finally found a routine our whole family could keep.”", "Parent of a Qaida student", "London, UK"],
  ["“Every lesson is calm, encouraging, and focused. I understand more, and I look forward to class each week.”", "Adult learner", "Melbourne, Australia"],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#/" className={`brand ${light ? "brand-light" : ""}`} aria-label="Shoaib Online Quran Academy home">
      <span className="brand-mark"><BookOpen size={18} strokeWidth={1.8} /><span className="brand-star">✦</span></span>
      <span className="brand-copy"><strong>SHOAIB</strong><small>ONLINE QURAN ACADEMY</small></span>
    </a>
  );
}

function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "button button-whatsapp button-small" : "button button-whatsapp"} href={whatsappUrl} target="_blank" rel="noreferrer">
      <MessageCircle size={16} /> {compact ? "WhatsApp" : "Ask on WhatsApp"}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "/about"],
    ["Courses", "/courses"],
    ["Teachers", "/teachers"],
    ["Why us", "/why-us"],
    ["Pricing", "/pricing"],
  ];
  return (
    <>
      <div className="announcement"><span>One-to-one Quran learning</span><span className="announcement-dot" /> <span>Qualified guidance. Flexible timings.</span><a href="#/free-trial">Begin with a free trial <ArrowUpRight size={13} /></a></div>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#/faq" onClick={() => setOpen(false)}>FAQ</a>
            <a className="nav-mobile-cta" href="#/admission" onClick={() => setOpen(false)}>Enroll now <ArrowUpRight size={14} /></a>
          </nav>
          <div className="header-actions"><WhatsAppButton compact /><a className="button button-dark button-small" href="#/admission">Enroll now <ArrowUpRight size={14} /></a></div>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
        </div>
      </header>
    </>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? "section-heading-light" : ""}`}><span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-pattern" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" />Learn with reverence & care</span>
          <h1>Let your Quran journey <em>begin</em> with care.</h1>
          <p className="hero-lede">Learn Quran online from qualified Quran teachers — one student, one teacher, complete attention, and a pace that fits your life.</p>
          <div className="hero-actions"><a className="button button-gold" href="#/free-trial">Start free trial <ArrowUpRight size={16} /></a><a className="text-link" href="#/courses">Explore learning paths <ArrowRight size={16} /></a></div>
          <div className="hero-proof"><div className="proof-item"><strong>01</strong><span>Qualified<br />teachers</span></div><div className="proof-divider" /><div className="proof-item"><strong>1:1</strong><span>Personal<br />classes</span></div><div className="proof-divider" /><div className="proof-item"><strong>24/7</strong><span>Flexible<br />scheduling</span></div></div>
        </div>
        <div className="hero-art" aria-label="A decorative Quran learning composition">
          <div className="arch-frame"><div className="arch-inner"><div className="hero-arabic">بِسْمِ اللَّهِ<br /><span>الرَّحْمَٰنِ الرَّحِيمِ</span></div><div className="hero-book"><BookOpen size={48} strokeWidth={1.1} /><span>Knowledge begins<br />with a single letter.</span></div></div></div>
          <div className="hero-note hero-note-top"><Sparkles size={15} /><span>Learn gently.<br /><strong>Grow steadily.</strong></span></div>
          <div className="hero-note hero-note-bottom"><span>01</span><span>One-to-one<br />online learning</span></div>
          <div className="hero-ornament">✦</div>
        </div>
      </div>
      <div className="hero-scroll"><span>Scroll to discover</span><span className="scroll-line" /></div>
    </section>
  );
}

function AboutSection() {
  return <section className="section about-section" id="about"><div className="container about-grid"><div className="about-stamp"><div className="stamp-circle"><span>✦</span><small>QURANIC<br />EDUCATION</small><span>✦</span></div><div className="stamp-caption">For every student,<br />in every corner<br />of the world.</div></div><div className="about-copy"><SectionHeading eyebrow="About the academy" title="A quieter way to learn what matters." text="Shoaib Online Quran Academy was founded on a simple conviction: every student deserves access to quality Quran education, delivered with experience, patience, and the personal attention that makes learning truly take root." /><p>From the first letters of Noorani Qaida to the discipline of Hifz, from the meanings of Translation to the breadth of Islamic Studies, our teachers guide each learner one-to-one — with flexible timings and Islamic values woven into every lesson.</p><a className="text-link" href="#/about">Read our story <ArrowRight size={16} /></a><div className="about-list"><span><Check size={15} />Experienced instructors</span><span><Check size={15} />Personalized attention</span><span><Check size={15} />Islamic values & character</span><span><Check size={15} />Convenient online learning</span></div></div></div></section>;
}

function ReflectionSection() {
  const [playing, setPlaying] = useState(false);
  return <section className="section reflection-section"><div className="container reflection-grid"><div><SectionHeading eyebrow="Listen & reflect" title="Make space for a few quiet minutes." light text="Settle in with a gentle reflection from Surah Ar-Rahman, beautifully recited. Press play whenever you are ready." /><button className="audio-button" onClick={() => setPlaying(!playing)}><span className={`play-disc ${playing ? "is-playing" : ""}`}>{playing ? "Ⅱ" : "▶"}</span><span><strong>{playing ? "Playing reflection" : "Play reflection"}</strong><small>Recited with care · 08:50</small></span><span className="audio-duration">{playing ? "00:18" : "00:00"} / 08:50</span></button></div><div className="verse-card"><span className="verse-bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span><p>ٱلرَّحْمَـٰنُ<br />عَلَّمَ ٱلْقُرْءَانَ<br />خَلَقَ ٱلْإِنسَـٰنَ<br />عَلَّمَهُ ٱلْبَيَانَ</p><span className="verse-translation">“The Most Merciful. He taught the Qur'an. He created man and taught him eloquence.”</span><small>— Surah Ar-Rahman, 55:1–4</small></div></div></section>;
}

function CourseCard({ course }: { course: typeof courses[number] }) {
  const Icon = course.icon;
  return <article className="course-card"><div className="course-image-wrap"><img className="course-image" src={course.image} alt={`${course.title} Quran course`} /><span className="course-number">{course.number}</span><span className="course-icon"><Icon size={21} /></span></div><h3>{course.title}</h3><p>{course.short}</p><div className="course-tags">{course.outcomes.map(outcome => <span key={outcome}>{outcome}</span>)}</div><div className="course-card-bottom"><span>{course.duration}</span><a href={`#/course/${course.slug}`} aria-label={`View ${course.title} details`}>View details <ArrowUpRight size={15} /></a></div></article>;
}

function CoursesSection() {
  return <section className="section courses-section" id="courses"><div className="container"><div className="section-topline"><SectionHeading eyebrow="Our courses" title="Quranic learning, at your pace." text="From the very first letter to advanced memorisation and translation — choose the path that suits you or your child." /><a className="text-link" href="#/courses">View all courses <ArrowRight size={16} /></a></div><div className="course-grid">{courses.map(course => <CourseCard key={course.slug} course={course} />)}</div></div></section>;
}

function TeacherSection() {
  return <section className="section teacher-section" id="teachers"><div className="container teacher-grid"><div className="teacher-portrait"><div className="portrait-arch"><img className="teacher-photo" src={teacherPhoto} alt="Muhammad Shoaib, Quran teacher" /></div><span className="portrait-caption"><strong>Muhammad Shoaib</strong><br />Quran teacher · One-to-one learning</span></div><div className="teacher-copy"><SectionHeading eyebrow="The teacher" title="A calm guide, present for every step." text="Meet Muhammad Shoaib, your academy’s main Quran teacher." /><p>Muhammad Shoaib teaches with patience, consistency, and personal attention. Every lesson is shaped around the learner’s level, preferred timing, and Quran learning goals.</p><div className="teacher-facts"><span><strong>01</strong><small>Main teacher profile</small></span><span><strong>1:1</strong><small>Private live lessons</small></span><span><strong>∞</strong><small>Room to grow</small></span></div><a className="text-link" href="#/teachers">Meet the teacher <ArrowRight size={16} /></a></div></div></section>;
}

function FemaleTeachersSection() {
  return <section className="section female-section"><div className="container female-card"><div className="female-motif"><div className="motif-ring ring-one" /><div className="motif-ring ring-two" /><div className="motif-star">✦</div><div className="motif-copy">Care<br /><span>for every<br />learner</span></div></div><div className="female-copy"><SectionHeading eyebrow="Female teachers available" title="A comfortable space for female students." text="Female students can request a female Quran teacher through the admission form. We keep teacher identities private while making the preference easy to choose." /><div className="female-actions"><a className="button button-dark" href="#/admission">Request a female teacher <ArrowUpRight size={16} /></a><a className="text-link" href="#/female-teachers">Learn more <ArrowRight size={16} /></a></div></div></div></section>;
}

function WhySection() {
  return <section className="section why-section" id="why-us"><div className="container"><div className="section-topline"><SectionHeading eyebrow="Why choose us" title="A learning experience built on care." text="Qualified teachers, personal attention, and the convenience of home — wherever you are in the world." /><span className="section-number">06 / 06</span></div><div className="benefits-grid">{benefits.map(([Icon, title, text]) => { const BenefitIcon = Icon as typeof ShieldCheck; return <div className="benefit-item" key={title as string}><span className="benefit-icon"><BenefitIcon size={20} /></span><div><h3>{title as string}</h3><p>{text as string}</p></div></div>; })}</div></div></section>;
}

function PricingSection() {
  return <section className="section pricing-section" id="pricing"><div className="container"><SectionHeading eyebrow="Pricing plans" title="Begin with a plan that feels right." text="Every plan includes qualified teachers and one-to-one live classes. Begin with a free trial class before choosing your path." /><div className="pricing-grid">{plans.map(plan => <article className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`} key={plan.label}>{plan.featured && <span className="recommended">Recommended</span>}<span className="pricing-label">{plan.label}</span><h3>{plan.price}<small>/month</small></h3><p>{plan.note}</p><div className="pricing-rule" />{plan.features.map(feature => <span className="pricing-feature" key={feature}><Check size={15} />{feature}</span>)}<a className={`button ${plan.featured ? "button-gold" : "button-outline"}`} href="#/free-trial">Start with a trial <ArrowUpRight size={15} /></a></article>)}</div><p className="pricing-footnote">Prices are a starting guide and may vary by course and schedule. <a href={whatsappUrl} target="_blank" rel="noreferrer">Ask on WhatsApp</a> for a plan tailored to your needs.</p></div></section>;
}

function TestimonialsSection() {
  return <section className="section testimonials-section"><div className="container"><div className="section-topline"><SectionHeading eyebrow="Words from families" title="Small steps. Lasting change." /><span className="quote-mark">“</span></div><div className="testimonial-grid">{testimonials.map(([quote, who, place]) => <figure className="testimonial" key={who}><Quote size={21} /><blockquote>{quote}</blockquote><figcaption><strong>{who}</strong><span>{place}</span></figcaption></figure>)}</div></div></section>;
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return <section className="section faq-section" id="faq"><div className="container faq-grid"><SectionHeading eyebrow="Frequently asked questions" title="Before you begin." text="A few helpful answers for students and families finding their way here." /><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? "faq-open" : ""}`} key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown size={18} /></button>{open === index && <p>{answer}</p>}</div>)}</div></div></section>;
}

function ContactSection() {
  return <section className="contact-section"><div className="container contact-grid"><div><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />Reach out</span><h2>Let’s make room<br /><em>for your learning.</em></h2></div><div className="contact-details"><p>Reach out to our teachers directly — on WhatsApp or through the contact form. We respond promptly, insha’Allah.</p><div className="contact-links"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} />{whatsappLabel}</a><a href="#/contact"><Mail size={17} />Send an inquiry</a></div><a className="button button-gold" href="#/free-trial">Book your free trial <ArrowUpRight size={16} /></a></div></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo light /><p>One-to-one Quran learning<br />from qualified teachers.</p></div><div className="footer-column"><span>Explore</span><a href="#/about">About the academy</a><a href="#/courses">Our courses</a><a href="#/teachers">Our teacher</a><a href="#/pricing">Pricing plans</a></div><div className="footer-column"><span>Begin</span><a href="#/free-trial">Free trial</a><a href="#/admission">Online admission</a><a href="#/registration">Student registration</a><a href="#/contact">Contact us</a></div><div className="footer-column"><span>Keep in touch</span><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="#/faq">FAQ</a><a href="#/privacy">Privacy policy</a><a href="#/terms">Terms & conditions</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Shoaib Online Quran Academy</span><span>Learn with reverence & care <span className="gold-dot">✦</span></span></div></footer>;
}

function InquiryForm({ type = "trial" }: { type?: "trial" | "admission" | "contact" | "registration" }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const isContact = type === "contact";
  const isTrial = type === "trial";
  const title = isContact ? "Send an inquiry" : isTrial ? "Book your free trial" : type === "registration" ? "Register as a student" : "Begin your admission";
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.type = type;
    try {
      const response = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Please check your details and try again.");
      setSubmitted(true);
      form.reset();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }
  if (submitted) return <div className="success-panel"><span className="success-icon"><CircleCheck size={28} /></span><h3>JazakAllahu khairan.</h3><p>Your request has been received. We will reach out with the next available time, insha’Allah.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another request <ArrowRight size={16} /></button></div>;
  return <form className="inquiry-form" onSubmit={handleSubmit}><div className="form-heading"><span className="eyebrow"><span className="eyebrow-line" />{isContact ? "Contact us" : "Your next step"}</span><h3>{title}</h3><p>Required fields are marked with an asterisk. We keep your details private and only use them to arrange your learning request.</p></div><div className="form-grid"><label>Student full name *<input name="studentName" required placeholder="Your name" /></label><label>{isContact ? "Email address *" : "Parent / guardian name *"}<input name={isContact ? "email" : "guardianName"} type={isContact ? "email" : "text"} required placeholder={isContact ? "you@example.com" : "Parent or guardian"} /></label>{!isContact && <><label>Email address *<input name="email" type="email" required placeholder="you@example.com" /></label><label>WhatsApp number *<input name="whatsapp" required placeholder="+92 ..." /></label><label>Country *<input name="country" required placeholder="Country" /></label><label>Student age *<input name="age" required type="number" min="3" max="99" placeholder="Age" /></label><label>Preferred course *<select name="course" required defaultValue=""><option value="" disabled>Select a course</option>{courses.map(course => <option key={course.slug} value={course.title}>{course.title}</option>)}</select></label><label>Preferred class timing *<input name="timing" required placeholder="e.g. 6:00 PM UTC+5" /></label><fieldset><legend>Teacher preference *</legend><div className="radio-row"><label><input type="radio" name="teacherPreference" value="Male teacher" required /> Male teacher</label><label><input type="radio" name="teacherPreference" value="Female teacher" /> Female teacher</label></div></fieldset></>}{isContact && <label className="full-field">WhatsApp number<input name="whatsapp" placeholder="+92 ..." /></label>}<label className="full-field">{isContact ? "How can we help? *" : "Additional message"}<textarea name="message" required={isContact} rows={4} placeholder={isTrial ? "Tell us a little about the learner and what you hope to begin..." : "Anything you would like us to know?"} /></label></div>{error && <p className="form-error">{error}</p>}<button className="button button-dark form-submit" disabled={sending}>{sending ? "Sending..." : `${title} `}<ArrowUpRight size={16} /></button></form>;
}

function PageShell({ children, eyebrow, title, text }: { children: React.ReactNode; eyebrow: string; title: string; text: string }) {
  return <><Header /><main><section className="page-hero"><div className="page-pattern" /><div className="container"><span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>{children}</main><Footer /><a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={21} /></a></>;
}

export default function Home() {
  useEffect(() => { document.title = "Shoaib Online Quran Academy — Learn Quran Online"; }, []);
  return <div className="site"><Header /><main><Hero /><AboutSection /><ReflectionSection /><CoursesSection /><TeacherSection /><FemaleTeachersSection /><WhySection /><PricingSection /><TestimonialsSection /><FAQSection /><ContactSection /></main><Footer /><a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={21} /></a></div>;
}

export function SitePage(props: any) {
  const page = props?.params?.page as string;
  useEffect(() => { document.title = `${page ? page.replaceAll("-", " ") : "Academy"} — Shoaib Online Quran Academy`; }, [page]);
  if (page === "about") return <PageShell eyebrow="About the academy" title="A quieter way to learn what matters." text="Quality Quran education, delivered with experience, patience, and the personal attention that makes learning take root."><section className="section"><div className="container narrow-copy"><p className="lead-paragraph">Shoaib Online Quran Academy is built for learners and families who want a calm, consistent path to Quran education. Our approach is one-to-one, our schedules are flexible, and our teaching is rooted in sincerity.</p><div className="editorial-columns"><p>Whether a student is meeting Arabic letters for the first time or building a disciplined Hifz routine, the lesson stays personal. We make space for questions, correction, reflection, and steady progress.</p><p>Classes happen online so learning can fit around school, work, family, and time zones. Begin with a free trial, then choose a course and plan that feels right for your journey.</p></div><div className="quote-banner"><Quote size={24} /><p>“Every student deserves a teacher who sees where they are — and knows how to guide the next step.”</p></div><a className="button button-dark" href="#/free-trial">Begin with a free trial <ArrowUpRight size={16} /></a></div></section></PageShell>;
  if (page === "courses") return <PageShell eyebrow="Our courses" title="A path for every stage of learning." text="From the first letter to advanced memorisation and understanding, choose the learning path that fits you or your child."><section className="section"><div className="container course-grid">{courses.map(course => <CourseCard key={course.slug} course={course} />)}</div></section></PageShell>;
  if (page === "teachers") return <PageShell eyebrow="Our teacher" title="One main profile. One clear promise." text="Your learning deserves presence, patience, and a teacher who can meet you where you are."><TeacherSection /><FemaleTeachersSection /></PageShell>;
  if (page === "female-teachers") return <PageShell eyebrow="Female teachers available" title="A comfortable space for female students." text="Request a female Quran teacher through admission while keeping teacher identities private."><FemaleTeachersSection /><section className="section"><div className="container narrow-copy"><SectionHeading eyebrow="A thoughtful option" title="Choose the learning environment that feels comfortable." text="Female students and families can select a female teacher preference in the admission and free-trial forms. We will confirm availability and timing directly." /><a className="button button-dark" href="#/admission">Request a female teacher <ArrowUpRight size={16} /></a></div></section></PageShell>;
  if (page === "why-us") return <PageShell eyebrow="Why choose us" title="A learning experience built on care." text="Qualified teachers, personal attention, and the convenience of home — wherever you are in the world."><WhySection /><section className="section"><div className="container"><div className="split-callout"><div><span className="eyebrow"><span className="eyebrow-line" />A gentle beginning</span><h2>Experience the class before you choose the path.</h2></div><a className="button button-gold" href="#/free-trial">Start free trial <ArrowUpRight size={16} /></a></div></div></section></PageShell>;
  if (page === "pricing") return <PageShell eyebrow="Pricing plans" title="A plan that gives your learning room." text="Begin with a free trial, then choose the rhythm and focus that best support your Quran journey."><PricingSection /></PageShell>;
  if (page === "faq") return <PageShell eyebrow="Frequently asked questions" title="Before you begin." text="A few helpful answers for students and families finding their way here."><FAQSection /><ContactSection /></PageShell>;
  if (page === "privacy" || page === "terms") return <PageShell eyebrow={page === "privacy" ? "Privacy policy" : "Terms & conditions"} title={page === "privacy" ? "Your details stay with your request." : "A clear, respectful learning relationship."} text={page === "privacy" ? "We only use the information you share to respond to your academy inquiry or arrange your learning request." : "These simple terms help keep communication, learning, and expectations clear for every family."}><section className="section"><div className="container legal-copy"><p className="lead-paragraph">{page === "privacy" ? "When you submit an admission, trial, registration, or contact form, we collect the details needed to respond. We do not sell your information or use it for unrelated marketing." : "By requesting a trial or enrolling, families agree to share accurate contact details, communicate respectfully, and work with the academy to choose an appropriate course and schedule."}</p><h2>{page === "privacy" ? "What we use your information for" : "Learning and communication"}</h2><p>We use submitted details to understand your course preference, confirm your requested timing, answer questions, and arrange the next step. If you would like your inquiry updated or removed, contact the academy through the contact page.</p><h2>Questions</h2><p>For any clarification, reach out on WhatsApp at {whatsappLabel}. We will respond as soon as possible, insha’Allah.</p></div></section></PageShell>;
  if (page === "free-trial" || page === "admission" || page === "registration" || page === "contact") {
    const config: readonly [string, string, string, "trial" | "admission" | "registration" | "contact"] = page === "free-trial" ? ["Free trial", "Begin with a live class, at no cost.", "Attend a live one-to-one class with a qualified teacher — no cost, no obligation.", "trial"] : page === "admission" ? ["Online admission", "Your Quran journey starts here.", "Tell us a little about the learner, and we will help arrange the right next step.", "admission"] : page === "registration" ? ["Student registration", "Make your learning routine official.", "Share your details so we can keep your course, timing, and teacher preference in one place.", "registration"] : ["Contact us", "We are here to help.", "Reach out to our teachers directly — on WhatsApp or through the form below.", "contact"];
    return <PageShell eyebrow={config[0]} title={config[1]} text={config[2]}><section className="section form-section"><div className="container form-layout"><InquiryForm type={config[3]} /><aside className="form-aside"><span className="aside-number">01</span><h2>Learning is a conversation.</h2><p>Ask about course levels, preferred timings, or a female teacher request. We will respond with care.</p><div className="aside-details"><span><MessageCircle size={16} />{whatsappLabel}</span><span><Clock3 size={16} />Flexible worldwide timings</span><span><ShieldCheck size={16} />Your details stay private</span></div><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Message us directly <ArrowRight size={16} /></a></aside></div></section></PageShell>;
  }
  return <PageShell eyebrow="Shoaib Online Quran Academy" title="A thoughtful path to Quran learning." text="The page you are looking for is not available yet."><section className="section"><div className="container narrow-copy"><a className="button button-dark" href="#/">Return home <ArrowRight size={16} /></a></div></section></PageShell>;
}

export function CourseDetailPage(props: any) {
  const slug = props?.params?.slug as string;
  const course = courses.find(item => item.slug === slug) ?? courses[0];
  useEffect(() => { document.title = `${course.title} — Shoaib Online Quran Academy`; }, [course.title]);
  const Icon = course.icon;
  return <PageShell eyebrow={`Course ${course.number}`} title={course.title} text={course.description}><section className="section"><div className="container course-detail-grid"><div className="course-detail-art"><div className="course-detail-icon"><Icon size={46} strokeWidth={1.1} /></div><span>One-to-one learning path</span></div><div className="course-detail-copy"><span className="eyebrow"><span className="eyebrow-line" />What you will learn</span><h2>A steady path, shaped around the student.</h2><p>{course.description}</p><div className="detail-outcomes">{course.outcomes.map(item => <span key={item}><Check size={15} />{item}</span>)}</div><div className="detail-meta"><span><Clock3 size={17} /><strong>Duration</strong>{course.duration}</span><span><UsersRound size={17} /><strong>Suitable for</strong>{course.age}</span></div><div className="hero-actions"><a className="button button-dark" href="#/free-trial">Try a free class <ArrowUpRight size={16} /></a><a className="text-link" href="#/admission">Enroll now <ArrowRight size={16} /></a></div></div></div></section><section className="section soft-section"><div className="container split-callout"><div><span className="eyebrow"><span className="eyebrow-line" />Questions?</span><h2>Ask for a timing that fits your family.</h2></div><WhatsAppButton /></div></section></PageShell>;
}

export function AdminDashboardPage() {
  useEffect(() => { document.title = "Academy Admin — Shoaib Online Quran Academy"; }, []);
  const stats = [["Total students", "128", "+12 this month", UsersRound], ["Active courses", "07", "All learning paths", BookOpen], ["New admissions", "14", "Needs review", FileText], ["Trial requests", "09", "This week", CalendarDays]] as const;
  const areas = [["Website management", "Edit homepage content, images, settings", PanelTop], ["Course management", "Add, edit, price, and feature courses", BookOpen], ["Teacher profile", "Update photo and verified profile details", UserRound], ["Student management", "View registrations and student status", UsersRound], ["Admissions & trials", "Review new requests and next steps", FileText], ["Testimonials & pricing", "Manage social proof and plan features", Star], ["Messages", "View contact inquiries and WhatsApp preference", MessageCircle], ["Settings", "WhatsApp number, SEO, and page controls", Settings2]] as const;
  return <div className="admin-page"><div className="admin-sidebar"><Logo light /><div className="admin-nav"><span className="admin-nav-label">Workspace</span><a className="admin-nav-active" href="#/admin"><LayoutDashboard size={17} />Overview</a><a href="#/admin"><BookOpen size={17} />Courses</a><a href="#/admin"><UsersRound size={17} />Students</a><a href="#/admin"><FileText size={17} />Applications</a><span className="admin-nav-label">Site</span><a href="#/"><ArrowUpRight size={17} />View website</a></div><div className="admin-sidebar-bottom"><span>Admin-ready workspace</span><small>Role-based access should be enabled before production use.</small></div></div><main className="admin-main"><div className="admin-topbar"><div><span className="eyebrow"><span className="eyebrow-line" />Academy control room</span><h1>Good morning, admin.</h1></div><div className="admin-user"><span className="admin-avatar">SO</span><span><strong>Shoaib Academy</strong><small>Owner account</small></span></div></div><div className="admin-note"><ShieldCheck size={18} /><span><strong>Content-first preview.</strong> This dashboard is structured for protected role-based management; connect the managed records before inviting staff.</span></div><div className="stats-grid">{stats.map(([label, value, note, Icon]) => <div className="stat-card" key={label}><span className="stat-icon"><Icon size={18} /></span><span className="stat-label">{label}</span><strong>{value}</strong><small>{note}</small></div>)}</div><div className="admin-section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />Management</span><h2>Keep the academy moving.</h2></div><button className="button button-dark button-small"><Settings2 size={15} />Settings</button></div><div className="admin-areas">{areas.map(([title, desc, Icon]) => <div className="admin-area" key={title}><span className="admin-area-icon"><Icon size={19} /></span><div><h3>{title}</h3><p>{desc}</p></div><ChevronRight size={17} /></div>)}</div><div className="recent-panel"><div className="admin-section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />Recent applications</span><h2>Latest requests</h2></div><a className="text-link" href="#/admission">Open admission form <ArrowRight size={16} /></a></div><div className="recent-list"><div><span className="recent-avatar">AN</span><span><strong>New admission request</strong><small>Course preference: Nazra Quran · 12 minutes ago</small></span><span className="status-pill">Needs review</span></div><div><span className="recent-avatar">MH</span><span><strong>Free trial request</strong><small>Teacher preference: Female teacher · 1 hour ago</small></span><span className="status-pill status-soft">New</span></div><div><span className="recent-avatar">RS</span><span><strong>Contact inquiry</strong><small>Asked about Hifz-ul-Quran · Yesterday</small></span><span className="status-pill status-soft">New</span></div></div></div></main></div>;
}
