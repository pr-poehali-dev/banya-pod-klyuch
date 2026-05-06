import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/bd914254-0785-47a3-bbe0-7ee782a94012.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/e8350372-abb4-4818-af57-c7b95e787207.jpg";
const RENDER_IMG = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/691a5109-16b3-4fdd-a513-2851c93dc262.jpg";

const NAV_ITEMS = ["Главная", "Каталог", "Проекты", "О компании", "Контакты"];

const CATALOG_ITEMS = [
  {
    id: 1,
    name: "«Таёжная»",
    area: "48 м²",
    style: "Классическая",
    price: "от 2 400 000 ₽",
    img: HERO_IMG,
    tags: ["Брус 200×200", "Парная + предбанник", "Терраса"],
    has3d: true,
  },
  {
    id: 2,
    name: "«Скандинавия»",
    area: "72 м²",
    style: "Современная",
    price: "от 3 800 000 ₽",
    img: RENDER_IMG,
    tags: ["Клеёный брус", "Панорамное остекление", "Бассейн"],
    has3d: true,
  },
  {
    id: 3,
    name: "«Купеческая»",
    area: "96 м²",
    style: "Премиум",
    price: "от 5 200 000 ₽",
    img: INTERIOR_IMG,
    tags: ["Кедр", "2 этажа", "Зона отдыха"],
    has3d: true,
  },
  {
    id: 4,
    name: "«Уральская»",
    area: "36 м²",
    style: "Компактная",
    price: "от 1 600 000 ₽",
    img: HERO_IMG,
    tags: ["Бревно", "Мини-формат", "Экономичная"],
    has3d: false,
  },
  {
    id: 5,
    name: "«Боярская»",
    area: "120 м²",
    style: "Люкс",
    price: "от 7 500 000 ₽",
    img: RENDER_IMG,
    tags: ["Лиственница", "Хаммам + сауна", "VIP"],
    has3d: true,
  },
  {
    id: 6,
    name: "«Берёзовая»",
    area: "54 м²",
    style: "Деревенская",
    price: "от 2 900 000 ₽",
    img: INTERIOR_IMG,
    tags: ["Берёза", "Открытая веранда", "Купель"],
    has3d: false,
  },
];

const PROJECTS = [
  { title: "Проект в Подмосковье", area: "72 м²", year: "2024", img: HERO_IMG },
  { title: "Баня у озера", area: "48 м²", year: "2024", img: INTERIOR_IMG },
  { title: "Усадьба «Сосновый бор»", area: "120 м²", year: "2023", img: RENDER_IMG },
];

const STATS = [
  { num: "12+", label: "лет опыта" },
  { num: "340+", label: "реализованных проектов" },
  { num: "98%", label: "довольных клиентов" },
  { num: "47", label: "регионов России" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function GalleryModal({ item, onClose }: { item: typeof CATALOG_ITEMS[0]; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<"photo" | "3d">("photo");
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-sm overflow-hidden animate-fade-in-up"
        style={{ background: "var(--dark-2)", border: "1px solid var(--border)" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-8 py-5" style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <p className="text-xs text-gold font-body tracking-widest uppercase mb-1">{item.style}</p>
            <h3 className="font-display text-2xl text-foreground">{item.name}</h3>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-gold transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {item.has3d && (
          <div className="flex" style={{ borderBottom: "1px solid var(--border)" }}>
            {(["photo", "3d"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 text-xs tracking-widest uppercase font-body transition-colors ${
                  activeTab === tab ? "text-gold border-b-2 border-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "photo" ? "Фотогалерея" : "3D-визуализация"}
              </button>
            ))}
          </div>
        )}

        <div className="p-8">
          {activeTab === "photo" ? (
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 img-zoom rounded-sm overflow-hidden" style={{ height: 300 }}>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              {[INTERIOR_IMG, RENDER_IMG].map((img, i) => (
                <div key={i} className="img-zoom rounded-sm overflow-hidden" style={{ height: 180 }}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-sm" style={{ height: 360, background: "var(--dark-3)" }}>
              <Icon name="Box" size={48} className="text-gold mb-4" />
              <p className="font-display text-xl text-foreground mb-2">3D-визуализация проекта</p>
              <p className="text-sm text-muted-foreground font-body">Интерактивная модель доступна при запросе</p>
            </div>
          )}

          <div className="mt-6 grid grid-cols-3 gap-6">
            <div>
              <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mb-1">Площадь</p>
              <p className="font-display text-xl text-foreground">{item.area}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mb-1">Стиль</p>
              <p className="font-display text-xl text-foreground">{item.style}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body tracking-widest uppercase mb-1">Стоимость</p>
              <p className="font-display text-xl text-gold">{item.price}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-body text-muted-foreground rounded-sm" style={{ border: "1px solid var(--border)" }}>
                {tag}
              </span>
            ))}
          </div>

          <button className="mt-6 w-full py-3 bg-gold font-body text-sm tracking-widest uppercase hover:bg-gold-light transition-colors" style={{ color: "var(--dark)" }}>
            Запросить расчёт стоимости
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [activeNav, setActiveNav] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof CATALOG_ITEMS[0] | null>(null);
  const [filterStyle, setFilterStyle] = useState("Все");

  const heroSection = useRef<HTMLElement>(null);
  const catalogSection = useRef<HTMLElement>(null);
  const projectsSection = useRef<HTMLElement>(null);
  const aboutSection = useRef<HTMLElement>(null);
  const contactSection = useRef<HTMLElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    "Главная": heroSection,
    "Каталог": catalogSection,
    "Проекты": projectsSection,
    "О компании": aboutSection,
    "Контакты": contactSection,
  };

  const scrollTo = (name: string) => {
    setActiveNav(name);
    setMenuOpen(false);
    const ref = sectionRefs[name];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroAnim = useInView(0.1);
  const catalogAnim = useInView(0.1);
  const projectsAnim = useInView(0.1);
  const aboutAnim = useInView(0.1);
  const contactAnim = useInView(0.1);

  const styles = ["Все", "Классическая", "Современная", "Премиум", "Компактная", "Люкс", "Деревенская"];
  const filtered = filterStyle === "Все"
    ? CATALOG_ITEMS
    : CATALOG_ITEMS.filter(i => i.style === filterStyle);

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)" }}>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5"
        style={{ background: "rgba(15,13,11,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,169,110,0.1)" }}>
        <div className="font-display text-2xl text-foreground tracking-wide cursor-pointer" onClick={() => scrollTo("Главная")}>
          <span className="text-gold">Баня</span>Про
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`font-body text-xs tracking-widest uppercase gold-link transition-colors ${
                activeNav === item ? "text-gold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo("Контакты")}
          className="hidden md:block px-6 py-2 font-body text-xs tracking-widest uppercase transition-all"
          style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLElement).style.color = "var(--dark)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--gold)";
          }}
        >
          Связаться
        </button>

        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 pt-20 px-8 flex flex-col gap-8 justify-center"
          style={{ background: "rgba(15,13,11,0.97)" }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="font-display text-4xl text-foreground text-left hover:text-gold transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section ref={heroSection as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Баня" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,13,11,0.97) 0%, rgba(15,13,11,0.55) 50%, rgba(15,13,11,0.15) 100%)" }} />
        </div>

        <div ref={heroAnim.ref} className="relative z-10 container mx-auto px-8 pb-24 pt-32">
          <p className={`font-body text-xs tracking-widest uppercase text-gold mb-6 ${heroAnim.inView ? "animate-fade-in-up delay-100" : "opacity-0"}`}>
            Производство и строительство
          </p>
          <h1 className={`font-display text-6xl md:text-8xl text-foreground mb-6 ${heroAnim.inView ? "animate-fade-in-up delay-200" : "opacity-0"}`} style={{ lineHeight: 1.05 }}>
            Бани с душой,<br />
            <span className="text-gold italic">созданные</span> для вас
          </h1>
          <p className={`font-body text-base text-muted-foreground max-w-md mb-10 ${heroAnim.inView ? "animate-fade-in-up delay-300" : "opacity-0"}`}>
            Проектируем и строим премиальные бани по всей России. Каждый проект — индивидуальная история.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 ${heroAnim.inView ? "animate-fade-in-up delay-400" : "opacity-0"}`}>
            <button
              onClick={() => scrollTo("Каталог")}
              className="px-10 py-4 font-body text-sm tracking-widest uppercase transition-all"
              style={{ background: "var(--gold)", color: "var(--dark)" }}
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollTo("Контакты")}
              className="px-10 py-4 font-body text-sm tracking-widest uppercase transition-all text-foreground hover:text-gold"
              style={{ border: "1px solid rgba(255,255,255,0.25)" }}
            >
              Получить консультацию
            </button>
          </div>

          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 ${heroAnim.inView ? "animate-fade-in-up delay-500" : "opacity-0"}`}
            style={{ borderTop: "1px solid rgba(201,169,110,0.2)" }}>
            {STATS.map(s => (
              <div key={s.num}>
                <p className="font-display text-4xl text-gold">{s.num}</p>
                <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section ref={catalogSection as React.RefObject<HTMLElement>} className="py-24" style={{ background: "var(--dark)" }}>
        <div ref={catalogAnim.ref} className="container mx-auto px-8">
          <div className={`mb-12 ${catalogAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Наш каталог</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">Готовые проекты бань</h2>
          </div>

          <div className={`flex flex-wrap gap-3 mb-10 ${catalogAnim.inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            {styles.map(s => (
              <button
                key={s}
                onClick={() => setFilterStyle(s)}
                className="px-5 py-2 font-body text-xs tracking-widest uppercase transition-all rounded-sm"
                style={filterStyle === s
                  ? { background: "var(--gold)", color: "var(--dark)" }
                  : { border: "1px solid var(--border)", color: "var(--muted-foreground)" }
                }
              >
                {s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`group cursor-pointer ${catalogAnim.inView ? `animate-fade-in-up` : "opacity-0"}`}
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="img-zoom relative rounded-sm overflow-hidden mb-4" style={{ height: 280 }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: "rgba(15,13,11,0.6)" }}>
                    <div className="flex flex-col items-center gap-2">
                      <Icon name="Eye" size={28} className="text-gold" />
                      <span className="font-body text-xs tracking-widest uppercase text-foreground">Открыть галерею</span>
                    </div>
                  </div>
                  {item.has3d && (
                    <div className="absolute top-3 right-3 px-2 py-1 font-body text-xs tracking-widest" style={{ background: "var(--gold)", color: "var(--dark)" }}>
                      3D
                    </div>
                  )}
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors">{item.name}</h3>
                  <span className="font-body text-xs text-muted-foreground mt-1">{item.area}</span>
                </div>
                <p className="font-body text-sm text-gold mb-2">{item.price}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs font-body text-muted-foreground px-2 py-0.5 rounded-sm" style={{ border: "1px solid var(--border)" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section ref={projectsSection as React.RefObject<HTMLElement>} className="py-24" style={{ background: "var(--dark-2)" }}>
        <div ref={projectsAnim.ref} className="container mx-auto px-8">
          <div className={`mb-12 ${projectsAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Реализованные объекты</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground">Проекты</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden rounded-sm cursor-pointer ${projectsAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ height: 420, animationDelay: `${(i + 1) * 0.2}s` }}
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,13,11,0.9) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-body text-xs text-gold tracking-widest uppercase mb-2">{p.year} · {p.area}</p>
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutSection as React.RefObject<HTMLElement>} className="py-24" style={{ background: "var(--dark)" }}>
        <div ref={aboutAnim.ref} className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={aboutAnim.inView ? "animate-fade-in-up" : "opacity-0"}>
              <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">О компании</p>
              <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
                Мы строим<br /><span className="text-gold italic">с 2012 года</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                БаняПро — команда архитекторов, инженеров и мастеров-плотников, влюблённых в своё дело. Мы создаём бани, которые служат десятилетиями и становятся центром жизни загородного дома.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-10">
                Каждый проект разрабатывается индивидуально с учётом рельефа участка, архитектуры дома и пожеланий заказчика. От эскиза до сдачи объекта — мы рядом.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: "Leaf", text: "Экологичные материалы" },
                  { icon: "Shield", text: "Гарантия 10 лет" },
                  { icon: "Ruler", text: "Авторское проектирование" },
                  { icon: "Truck", text: "Строительство под ключ" },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3">
                    <Icon name={item.icon as "Leaf"} size={18} className="text-gold shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`img-zoom rounded-sm overflow-hidden ${aboutAnim.inView ? "animate-fade-in-up delay-300" : "opacity-0"}`} style={{ height: 500 }}>
              <img src={INTERIOR_IMG} alt="Интерьер бани" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section ref={contactSection as React.RefObject<HTMLElement>} className="py-24" style={{ background: "var(--dark-2)" }}>
        <div ref={contactAnim.ref} className="container mx-auto px-8">
          <div className={`max-w-2xl mx-auto text-center mb-12 ${contactAnim.inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <p className="font-body text-xs tracking-widest uppercase text-gold mb-3">Контакты</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">Начнём ваш проект?</h2>
            <p className="font-body text-muted-foreground">Оставьте заявку — мы свяжемся в течение часа и ответим на все вопросы</p>
          </div>

          <div className={`max-w-xl mx-auto ${contactAnim.inView ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none w-full bg-transparent focus:outline-none"
                  style={{ background: "var(--dark-3)", border: "1px solid var(--border)" }}
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none w-full bg-transparent"
                  style={{ background: "var(--dark-3)", border: "1px solid var(--border)" }}
                />
              </div>
              <select
                className="w-full px-4 py-3 font-body text-sm outline-none"
                style={{ background: "var(--dark-3)", border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
              >
                <option value="">Вас интересует...</option>
                <option>Готовый проект из каталога</option>
                <option>Индивидуальный проект</option>
                <option>Консультация архитектора</option>
                <option>Другое</option>
              </select>
              <textarea
                placeholder="Расскажите о вашем участке и пожеланиях..."
                rows={4}
                className="w-full px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none"
                style={{ background: "var(--dark-3)", border: "1px solid var(--border)" }}
              />
              <button
                type="submit"
                className="w-full py-4 font-body text-sm tracking-widest uppercase transition-colors hover:opacity-90"
                style={{ background: "var(--gold)", color: "var(--dark)" }}
              >
                Отправить заявку
              </button>
            </form>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              {[
                { icon: "Phone", label: "+7 (800) 000-00-00" },
                { icon: "Mail", label: "info@banyapro.ru" },
                { icon: "MapPin", label: "Москва и регионы" },
              ].map(c => (
                <div key={c.label}>
                  <Icon name={c.icon as "Phone"} size={20} className="text-gold mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "var(--dark)", borderTop: "1px solid rgba(201,169,110,0.12)" }}>
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl text-foreground cursor-pointer" onClick={() => scrollTo("Главная")}>
            <span className="text-gold">Баня</span>Про
          </div>
          <p className="font-body text-xs text-muted-foreground">© 2024 БаняПро. Все права защищены.</p>
          <div className="flex gap-6">
            {["Каталог", "Проекты", "Контакты"].map(item => (
              <button key={item} onClick={() => scrollTo(item)} className="font-body text-xs text-muted-foreground hover:text-gold transition-colors uppercase tracking-widest">
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {selectedItem && <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
