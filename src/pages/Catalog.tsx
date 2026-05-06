import { useRef } from "react";

const COMPLECT_SUHOY = [
  "Материал: Брус сухой профилированный сосна. 150х100",
  "Металлокровля двускатная: Проф лист МП20, 0.45мм ГОСТ, оцинкованный.",
  "Утепление кровли: Минеральная вата Knauf insulation ts 037 Aquastatik 100мм.",
  "Ветрозащита: Мембрана влаго-ветрозащитная супердиффузионная Knauf Защита АХ.",
  "Пароизоляция: Ondutis smart termo.",
  "Утепление пола: парное отделение — Пеноплекс 50мм, комната отдыха — Минеральная вата Knauf insulation ts 037. Доска половая сухая 35×140 (сосна).",
  "Дровяная печь — Kennet Пропар 10. Бак на 50л, изоляция дымоходной системы огнеупорная каолиновая вата.",
  "Окно в парном помещении 30×30 (рама из липы).",
  "Окно в комнате отдыха 50×50 (рама из липы).",
  "Деревянные сухие двери (входная/парная/помывочная) материал сосна, 180×80 (180×70).",
  "Потолок в парном помещении (вагонка липа), в комнате отдыха (вагонка сосна).",
  "Электропроводка, освещение, розетки.",
  "Фундамент: Блоки бетонные (временный фундамент), входят в стоимость.",
  "Винтовые сваи оплачиваются отдельно.",
];

const DOPOLN_SUHOY = [
  "Дровяная печь повышенной производительности.",
  "Дверь стеклянная в парную (помывочную).",
  "Дверь ПВХ входная.",
  "Окна ПВХ в комнате отдыха.",
  "Пол лиственница.",
  "Вывод горячей воды к полку.",
  "Угловой полог.",
  "Покраска бани.",
  "Дополнительное утепление пола.",
  "Шпунтованный пол в комнату отдыха.",
  "Мебель (стол, 2 лавки).",
  "Строительство веранды (рассчитывается индивидуально).",
];

const COMPLECT_USADKA = [
  "Металлокровля: Проф лист МП20, 0.45мм ГОСТ, оцинкованный.",
  "Утепление кровли: Минеральная вата Knauf insulation ts 037 Aquastatik 100мм.",
  "Ветрозащита: Мембрана влаго-ветрозащитная супердиффузионная Knauf Защита АХ.",
  "Пароизоляция: Ondutis smart termo.",
  "Утепление пола: Пеноплекс 50мм (либо Минеральная вата Knauf insulation ts 037). Доска половая естественной влажности / либо сухая 35×140 (сосна).",
  "Дровяная печь — Kennet Пропар 10. Бак на 50л, изоляция дымоходной системы огнеупорная каолиновая вата.",
  "Окно в парном помещении 30×30 (рама из липы).",
  "Окно в комнате отдыха 50×50 (рама из липы).",
  "Деревянные сухие двери (входная/парная/помывочная) материал сосна, 180×80 (180×70).",
  "Потолок в парном помещении (вагонка липа), в комнате отдыха (вагонка сосна).",
  "Электропроводка, освещение, розетки.",
  "Фундамент: Блоки бетонные (временный фундамент), входят в стоимость.",
  "Винтовые сваи оплачиваются отдельно.",
];

const DOPOLN_USADKA = [
  "Дровяная печь повышенной производительности.",
  "Дверь стеклянная в парную (помывочную).",
  "Дверь ПВХ входная.",
  "Окна ПВХ в комнате отдыха.",
  "Пол лиственница.",
  "Двухскатная крыша.",
  "Вывод горячей воды к полку.",
  "Угловой полог.",
  "Покраска бани.",
  "Дополнительное утепление пола.",
  "Шпунтованный пол в комнату отдыха.",
  "Мебель (стол, 2 лавки).",
  "Строительство веранды (рассчитывается индивидуально).",
];

// Section 1: Сухой профилированный брус
const SUHOY_BANI = [
  {
    size: "4×2.5 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png",
    imgFocus: "top left",
    description: "Компактная баня для небольшого участка. Включает парную и комнату отдыха. Отличное решение для дачи.",
  },
  {
    size: "4×4 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png",
    imgFocus: "top right",
    description: "Просторная квадратная баня. Удобная планировка: парная, помывочная, комната отдыха.",
  },
  {
    size: "5×3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png",
    imgFocus: "center left",
    description: "Популярная модель с оптимальным соотношением площади и стоимости. Вместительная парная.",
  },
  {
    size: "6×2.5 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png",
    imgFocus: "center right",
    description: "Вытянутая планировка — удобна для узких участков. Все функциональные зоны в ряд.",
  },
  {
    size: "6×3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png",
    imgFocus: "bottom",
    description: "Флагман линейки из сухого бруса. Большая комната отдыха, просторная парная, отдельная помывочная.",
  },
];

// Section 2: Брус под усадку
const USADKA_BANI = [
  {
    size: "3×2.3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "top left",
    description: "Минимальный размер — максимальная функциональность. Идеальна для небольших дач.",
  },
  {
    size: "3.7×2.3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "top right",
    description: "Немного больше пространства для комфортного отдыха. Классическая компоновка помещений.",
  },
  {
    size: "4×2.3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "center left",
    description: "Одна из самых востребованных моделей. Три зоны: парная, помывочная, предбанник.",
  },
  {
    size: "5×2.3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "center right",
    description: "Просторный вариант для семейного отдыха. Большая комната отдыха с возможностью установки мебели.",
  },
  {
    size: "6×2.3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "bottom left",
    description: "Вытянутая модель для длинных участков. Отличная вместимость при компактной ширине.",
  },
  {
    size: "6×3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png",
    imgFocus: "bottom right",
    description: "Максимальный комфорт в линейке под усадку. Вместительная парная, большой предбанник.",
  },
];

// Section 3: Бани под усадку (второй набор - 3.png)
const USADKA_BANI_2 = [
  {
    size: "6×3 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png",
    imgFocus: "top left",
    description: "Просторная баня с традиционной отделкой. Вместительная парная с полками в два яруса.",
  },
  {
    size: "5×4 м",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png",
    imgFocus: "top right",
    description: "Увеличенная баня для большой компании. Двускатная кровля, просторные помещения.",
  },
  {
    size: "5×4 м (вариант)",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png",
    imgFocus: "center left",
    description: "Тёмная отделка фасада. Уютная атмосфера, интегрированное освещение крыльца.",
  },
  {
    size: "5×4 м (светлый брус)",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png",
    imgFocus: "center right",
    description: "Классический светлый брус, двускатная кровля. Традиционный русский стиль.",
  },
  {
    size: "5×2.3 м + веранда 5×2.3",
    img: "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png",
    imgFocus: "bottom",
    description: "Баня с открытой верандой — идеально для летнего отдыха на свежем воздухе.",
  },
];

// Reusable page styles
const PAGE_STYLE: React.CSSProperties = {
  width: "210mm",
  minHeight: "297mm",
  padding: "14mm 14mm 14mm 14mm",
  background: "#fff",
  boxSizing: "border-box",
  position: "relative",
  pageBreakAfter: "always",
  breakAfter: "page",
  fontFamily: "'Golos Text', 'Arial', sans-serif",
  color: "#1a1a1a",
};

function CoverPage() {
  return (
    <div style={PAGE_STYLE}>
      {/* Dark header */}
      <div style={{ background: "#2a2a2a", margin: "-14mm -14mm 0 -14mm", padding: "20mm 14mm 14mm", textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#C9A96E", textTransform: "uppercase", marginBottom: 10 }}>
          Каталог проектов
        </div>
        <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 38, fontWeight: 600, color: "#fff", lineHeight: 1.15 }}>
          БаняПро
        </div>
        <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 20, color: "#C9A96E", marginTop: 6, fontStyle: "italic" }}>
          Строим бани с душой с 2012 года
        </div>
      </div>

      {/* Cover photo */}
      <div style={{ margin: "0 -14mm", height: 140, overflow: "hidden" }}>
        <img
          src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/bd914254-0785-47a3-bbe0-7ee782a94012.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          alt="Баня"
        />
      </div>

      {/* Intro */}
      <div style={{ marginTop: 18, padding: "0 4mm" }}>
        <p style={{ fontSize: 11, lineHeight: 1.7, color: "#333", marginBottom: 16 }}>
          Мы проектируем и строим бани под ключ по всей России. В каталоге представлены проверенные модели
          из двух материалов — каждая с индивидуальной комплектацией и возможностью доработки под ваш участок.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
          {[["340+", "проектов сдано"], ["12+", "лет на рынке"], ["47", "регионов России"], ["98%", "довольных клиентов"]].map(([n, l]) => (
            <div key={n} style={{ flex: 1, textAlign: "center", padding: "10px 6px", background: "#f8f6f2", borderTop: "3px solid #C9A96E" }}>
              <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 26, fontWeight: 700, color: "#2a2a2a" }}>{n}</div>
              <div style={{ fontSize: 8.5, color: "#666", textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* TOC */}
        <div style={{ border: "1px solid #e0d8cc", padding: "12px 16px" }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#C9A96E", marginBottom: 10 }}>Содержание</div>
          {[
            ["01", "Раздел I — Бани из сухого профилированного бруса"],
            ["02", "Комплектация и опции (сухой брус)"],
            ["03–07", "Проекты: 4×2.5 м, 4×4 м, 5×3 м, 6×2.5 м, 6×3 м"],
            ["08", "Раздел II — Бани из бруса под усадку"],
            ["09", "Комплектация и опции (брус под усадку)"],
            ["10–18", "Проекты: 3×2.3 м — 6×3 м"],
            ["19", "Отделочные работы"],
          ].map(([n, t]) => (
            <div key={n} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dotted #ddd", padding: "5px 0", fontSize: 9.5 }}>
              <span style={{ color: "#444" }}>{t}</span>
              <span style={{ color: "#C9A96E", fontWeight: 600, minWidth: 24, textAlign: "right" }}>{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, borderTop: "1px solid #e0d8cc", paddingTop: 8, display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#999" }}>
        <span>БаняПро — Строительство бань под ключ</span>
        <span>+7 (800) 000-00-00 · info@banyapro.ru</span>
      </div>
    </div>
  );
}

function SectionDivider({ num, title, subtitle }: { num: string; title: string; subtitle: string }) {
  return (
    <div style={{ ...PAGE_STYLE, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#2a2a2a", width: "100%", padding: "60px 30px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 5, textTransform: "uppercase", color: "#C9A96E", marginBottom: 20 }}>Раздел {num}</div>
        <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 40, fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 14 }}>
          {title}
        </div>
        <div style={{ fontSize: 13, color: "#aaa", fontStyle: "italic" }}>{subtitle}</div>
        <div style={{ width: 60, height: 2, background: "#C9A96E", margin: "30px auto 0" }} />
      </div>

      <div style={{ padding: "20px 0", width: "100%", textAlign: "center" }}>
        <img
          src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/bd914254-0785-47a3-bbe0-7ee782a94012.jpg"
          style={{ width: "100%", height: 180, objectFit: "cover" }}
          alt=""
        />
      </div>

      <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, borderTop: "1px solid #e0d8cc", paddingTop: 8, display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#999" }}>
        <span>БаняПро — Строительство бань под ключ</span>
        <span>+7 (800) 000-00-00</span>
      </div>
    </div>
  );
}

function ComplectPage({ type }: { type: "suhoy" | "usadka" }) {
  const complect = type === "suhoy" ? COMPLECT_SUHOY : COMPLECT_USADKA;
  const dopoln = type === "suhoy" ? DOPOLN_SUHOY : DOPOLN_USADKA;
  const title = type === "suhoy"
    ? "Брус сухой профилированный сосна 150×100"
    : "Брус естественной влажности (под усадку) 150×100";

  return (
    <div style={PAGE_STYLE}>
      <div style={{ background: "#2a2a2a", margin: "-14mm -14mm 0 -14mm", padding: "12mm 14mm 10mm" }}>
        <div style={{ fontSize: 9, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 6 }}>Комплектация</div>
        <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 22, color: "#fff", fontWeight: 600 }}>{title}</div>
      </div>

      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {/* Комплектация */}
        <div>
          <div style={{ background: "#3a3a3a", color: "#fff", fontSize: 13, fontWeight: 700, padding: "7px 12px", marginBottom: 8, textAlign: "center" }}>
            Комплектация:
          </div>
          {complect.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, fontSize: 8.5, lineHeight: 1.55, marginBottom: 5, color: "#222" }}>
              <span style={{ color: "#C9A96E", fontWeight: 700, marginTop: 1 }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Дополнения */}
        <div>
          <div style={{ background: "#3a3a3a", color: "#fff", fontSize: 13, fontWeight: 700, padding: "7px 12px", marginBottom: 8, textAlign: "center" }}>
            Можно дополнить баню:
          </div>
          {dopoln.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 6, fontSize: 8.5, lineHeight: 1.55, marginBottom: 5, color: "#222" }}>
              <span style={{ color: "#C9A96E", fontWeight: 700, marginTop: 1 }}>•</span>
              <span>{item}</span>
            </div>
          ))}

          {/* Фото отделки */}
          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 6 }}>Отделочные работы</div>
            <img
              src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/be112094-2b3c-4087-a427-e809ef2542e2.png"
              style={{ width: "100%", height: 110, objectFit: "cover", borderRadius: 2 }}
              alt="Отделка"
            />
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, borderTop: "1px solid #e0d8cc", paddingTop: 8, display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#999" }}>
        <span>БаняПро — Строительство бань под ключ</span>
        <span>+7 (800) 000-00-00 · info@banyapro.ru</span>
      </div>
    </div>
  );
}

function PageFooter() {
  return (
    <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, borderTop: "1px solid #e0d8cc", paddingTop: 8, display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#999" }}>
      <span>БаняПро — Строительство бань под ключ</span>
      <span>info@banyapro.ru · +7 (800) 000-00-00</span>
    </div>
  );
}

function BanyaPage({
  banya,
  section,
  pageNum,
  srcImg,
  complect,
  dopoln,
}: {
  banya: { size: string; img: string; imgFocus: string; description: string };
  section: string;
  pageNum: number;
  srcImg: string;
  complect: string[];
  dopoln: string[];
}) {
  const isSuhoy = section.includes("сухого") || section.includes("Сухой");

  return (
    <>
      {/* ── Страница 1: Фото + характеристики + чертёж ── */}
      <div style={PAGE_STYLE}>
        {/* Header */}
        <div style={{ background: "#2a2a2a", margin: "-14mm -14mm 0 -14mm", padding: "7mm 14mm 7mm", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 3 }}>{section}</div>
            <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 28, fontWeight: 600, color: "#fff" }}>
              Баня {banya.size}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 8, color: "#aaa", marginBottom: 2 }}>Стр.</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#C9A96E" }}>{String(pageNum).padStart(2, "0")}</div>
          </div>
        </div>

        {/* Main photo */}
        <div style={{ margin: "10px -14mm 0", height: 150, overflow: "hidden", position: "relative" }}>
          <img src={srcImg} alt={`Баня ${banya.size}`} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.55))", height: 50 }} />
          <div style={{ position: "absolute", bottom: 8, left: 14, background: "#C9A96E", color: "#1a1a1a", fontSize: 10, fontWeight: 700, padding: "3px 10px", letterSpacing: 1 }}>
            РАЗМЕР: {banya.size}
          </div>
        </div>

        {/* Description + specs */}
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 9.5, lineHeight: 1.65, color: "#444", marginBottom: 10 }}>{banya.description}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 5 }}>Интерьер</div>
              <img
                src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/files/e8350372-abb4-4818-af57-c7b95e787207.jpg"
                style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: 2 }}
                alt="Интерьер"
              />
            </div>
            <div>
              <div style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 5 }}>Характеристики</div>
              {[
                ["Размер", banya.size],
                ["Материал", isSuhoy ? "Брус сухой 150×100" : "Брус под усадку 150×100"],
                ["Кровля", "Металлопрофиль МП20, 0.45мм"],
                ["Печь", "Kennet Пропар 10, бак 50л"],
                ["Фундамент", "Блоки бетонные (в стоимости)"],
                ["Электрика", "Проводка, освещение, розетки"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f0ebe3", padding: "3.5px 0", fontSize: 8 }}>
                  <span style={{ color: "#888" }}>{k}</span>
                  <span style={{ color: "#1a1a1a", fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blueprint placeholder */}
        <div style={{
          border: "1.5px dashed #C9A96E",
          borderRadius: 3,
          height: 112,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fdf9f4",
          marginBottom: 10,
        }}>
          <div style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase", color: "#C9A96E", marginBottom: 5 }}>Место для чертежа</div>
          <div style={{ fontSize: 8, color: "#bbb" }}>Планировка · Баня {banya.size}</div>
        </div>

        {/* Price bar */}
        <div style={{ background: "#f8f6f2", padding: "9px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 7.5, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>Стоимость</div>
            <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 17, fontWeight: 700, color: "#2a2a2a" }}>По запросу</div>
          </div>
          <div style={{ fontSize: 8.5, color: "#444" }}>
            Звоните: <span style={{ color: "#C9A96E", fontWeight: 700 }}>+7 (800) 000-00-00</span>
          </div>
        </div>

        <PageFooter />
      </div>

      {/* ── Страница 2: Комплектация + Дополнения ── */}
      <div style={PAGE_STYLE}>
        {/* Header */}
        <div style={{ background: "#2a2a2a", margin: "-14mm -14mm 0 -14mm", padding: "7mm 14mm 7mm", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 8, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 3 }}>{section}</div>
            <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 24, fontWeight: 600, color: "#fff" }}>
              Баня {banya.size} — комплектация
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 8, color: "#aaa", marginBottom: 2 }}>Стр.</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#C9A96E" }}>{String(pageNum + 0.5).replace(".", ",")}</div>
          </div>
        </div>

        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {/* Комплектация */}
          <div>
            <div style={{ background: "#3a3a3a", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 12px", marginBottom: 10, textAlign: "center", letterSpacing: 0.5 }}>
              Комплектация:
            </div>
            {complect.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 6, fontSize: 8.5, lineHeight: 1.6, marginBottom: 6, color: "#222" }}>
                <span style={{ color: "#C9A96E", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Дополнения */}
          <div>
            <div style={{ background: "#3a3a3a", color: "#fff", fontSize: 12, fontWeight: 700, padding: "7px 12px", marginBottom: 10, textAlign: "center", letterSpacing: 0.5 }}>
              Можно дополнить баню:
            </div>
            {dopoln.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 6, fontSize: 8.5, lineHeight: 1.6, marginBottom: 6, color: "#222" }}>
                <span style={{ color: "#C9A96E", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>•</span>
                <span>{item}</span>
              </div>
            ))}

            {/* Отделка фото */}
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 8, letterSpacing: 2, textTransform: "uppercase", color: "#888", marginBottom: 6 }}>Пример отделки</div>
              <img
                src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/be112094-2b3c-4087-a427-e809ef2542e2.png"
                style={{ width: "100%", height: 115, objectFit: "cover", borderRadius: 2 }}
                alt="Отделка"
              />
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid #e8e2d9" }}>
          <div style={{ background: "#f8f6f2", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: 9, color: "#666", fontStyle: "italic" }}>
              Комплектация может быть скорректирована по желанию заказчика.
            </div>
            <div style={{ fontSize: 8.5, color: "#C9A96E", fontWeight: 700 }}>+7 (800) 000-00-00</div>
          </div>
        </div>

        <PageFooter />
      </div>
    </>
  );
}

function FinishPage() {
  return (
    <div style={PAGE_STYLE}>
      <div style={{ background: "#2a2a2a", margin: "-14mm -14mm 0 -14mm", padding: "10mm 14mm 10mm" }}>
        <div style={{ fontSize: 9, letterSpacing: 3, color: "#C9A96E", textTransform: "uppercase", marginBottom: 6 }}>Отделочные работы</div>
        <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 26, color: "#fff", fontWeight: 600 }}>
          Внутренняя отделка бань
        </div>
      </div>

      <div style={{ margin: "12px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src="https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/be112094-2b3c-4087-a427-e809ef2542e2.png"
              style={{ width: "100%", height: 90, objectFit: "cover", objectPosition: i % 2 === 0 ? "left" : "right", filter: `brightness(${0.9 + i * 0.03})` }}
              alt="Отделка"
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10 }}>
        <p style={{ fontSize: 10, lineHeight: 1.7, color: "#444", marginBottom: 10 }}>
          Внутренняя отделка выполняется качественными материалами: вагонка липа в парной, вагонка сосна в комнате отдыха.
          Все работы производятся нашими мастерами по согласованным технологиям.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
          {[
            ["Парная", "Вагонка липа, полки из осины/липы, печь Kennet"],
            ["Помывочная", "Влагостойкая отделка, поддон, слив"],
            ["Комната отдыха", "Вагонка сосна, напольная доска, освещение"],
            ["Кровля и утепление", "Минвата 100мм, пароизоляция, ветрозащита"],
          ].map(([t, d]) => (
            <div key={t} style={{ padding: "10px 12px", background: "#f8f6f2", borderLeft: "3px solid #C9A96E" }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#2a2a2a", marginBottom: 4 }}>{t}</div>
              <div style={{ fontSize: 8.5, color: "#666", lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts block */}
      <div style={{ marginTop: 20, background: "#2a2a2a", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant', 'Georgia', serif", fontSize: 22, color: "#fff" }}>Свяжитесь с нами</div>
          <div style={{ fontSize: 9, color: "#aaa", marginTop: 4 }}>Рассчитаем стоимость вашего проекта бесплатно</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#C9A96E" }}>+7 (800) 000-00-00</div>
          <div style={{ fontSize: 9, color: "#aaa", marginTop: 2 }}>info@banyapro.ru</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 10, left: 14, right: 14, borderTop: "1px solid #e0d8cc", paddingTop: 8, display: "flex", justifyContent: "space-between", fontSize: 8.5, color: "#999" }}>
        <span>БаняПро — Строительство бань под ключ</span>
        <span>Москва и регионы России</span>
      </div>
    </div>
  );
}

const SUHOY_SRC = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/343cfae1-2956-4e5d-b4ad-05a763c0aae6.png";
const USADKA_SRC_1 = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/dedef366-dfdb-4421-b0e7-be1d1f1a1533.png";
const USADKA_SRC_2 = "https://cdn.poehali.dev/projects/42eb0f8a-df19-4a74-b859-b251f6cb05ef/bucket/d05a31b3-74c8-4e65-a849-d72b14a70455.png";

export default function Catalog() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  return (
    <div style={{ background: "#e8e4de", minHeight: "100vh" }}>
      {/* Print button - hidden when printing */}
      <div className="no-print" style={{
        position: "fixed", top: 20, right: 20, zIndex: 100,
        display: "flex", flexDirection: "column", gap: 8
      }}>
        <button
          onClick={handlePrint}
          style={{
            padding: "12px 24px",
            background: "#C9A96E",
            color: "#1a1a1a",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Golos Text', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 1,
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          ⬇ Скачать PDF
        </button>
        <a
          href="/"
          style={{
            padding: "8px 16px",
            background: "#2a2a2a",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Golos Text', sans-serif",
            fontSize: 11,
            textAlign: "center",
            textDecoration: "none",
            letterSpacing: 0.5,
          }}
        >
          ← На сайт
        </a>
      </div>

      {/* Pages */}
      <div ref={printRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 0", gap: 20 }}>
        <CoverPage />

        {/* SECTION I */}
        <SectionDivider
          num="I"
          title="Бани из сухого профилированного бруса"
          subtitle="Брус сухой профилированный сосна 150×100. В чашу."
        />
        <ComplectPage type="suhoy" />
        {SUHOY_BANI.map((b, i) => (
          <BanyaPage
            key={b.size}
            banya={b}
            section="Раздел I — Сухой профилированный брус"
            pageNum={i + 4}
            srcImg={SUHOY_SRC}
            complect={COMPLECT_SUHOY}
            dopoln={DOPOLN_SUHOY}
          />
        ))}

        {/* SECTION II */}
        <SectionDivider
          num="II"
          title="Бани из бруса под усадку"
          subtitle="Брус естественной влажности 150×100. Традиционное строительство."
        />
        <ComplectPage type="usadka" />
        {USADKA_BANI.map((b, i) => (
          <BanyaPage
            key={b.size + "a"}
            banya={b}
            section="Раздел II — Брус под усадку"
            pageNum={i + 10}
            srcImg={USADKA_SRC_1}
            complect={COMPLECT_USADKA}
            dopoln={DOPOLN_USADKA}
          />
        ))}
        {USADKA_BANI_2.map((b, i) => (
          <BanyaPage
            key={b.size + "b"}
            banya={b}
            section="Раздел II — Брус под усадку"
            pageNum={i + 16}
            srcImg={USADKA_SRC_2}
            complect={COMPLECT_USADKA}
            dopoln={DOPOLN_USADKA}
          />
        ))}

        <FinishPage />
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          @page { size: A4; margin: 0; }
        }
      `}</style>
    </div>
  );
}