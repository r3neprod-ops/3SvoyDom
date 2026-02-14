'use client';

import { useEffect, useMemo, useState } from 'react';
import brand from '../data/brand';
import complexes from '../data/complexes';
import faq from '../data/faq';
import reviews from '../data/reviews';
import services from '../data/services';
import LeadModal from '../components/modals/LeadModal';
import SlotBox from '../components/slots/SlotBox';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import IconButton from '../components/ui/IconButton';
import Section from '../components/ui/Section';
import TopSceneWrapper from '../components/ui/TopSceneWrapper';

const navItems = [
  { href: '#about', label: 'О нас' },
  { href: '#steps', label: 'Как работаем' },
  { href: '#complexes', label: 'ЖК' },
  { href: '#services', label: 'Услуги' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contacts', label: 'Контакты' },
];

const directions = [
  { id: 1, title: 'Новостройки', desc: 'Актуальные объекты в вашем бюджете.' },
  { id: 2, title: 'ЖК-партнёры', desc: 'Подберём проверенные комплексы.' },
  { id: 3, title: 'Семейная ипотека', desc: 'Разбираем условия и лимиты.' },
  { id: 4, title: 'Господдержка', desc: 'Смотрим доступные программы.' },
  { id: 5, title: 'Рефинансирование', desc: 'Оцениваем выгоду по ставке.' },
  { id: 6, title: 'Консультация', desc: 'Личный план по шагам сделки.' },
];

const steps = [
  'Уточняем параметры',
  'Подбираем ЖК',
  'Сравниваем банки',
  'Готовим документы',
  'Сопровождаем сделку',
  'Выход на ключи/договор',
];

function useRevealOnScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header({ onLeadOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ background: 'rgba(255,255,255,0.70)', borderColor: 'var(--border)' }}>
      <Container>
        <div className="flex h-16 items-center justify-between md:h-[72px]">
          <a href="#about" className="text-base font-semibold">СвойДом Луганск</a>

          <nav className="hidden items-center gap-5 text-sm text-[var(--muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--text)]">{item.label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <IconButton icon="TG" label="Telegram" onClick={() => window.open(brand.telegram, '_blank')} />
            <IconButton icon="WA" label="WhatsApp" onClick={() => window.open('https://wa.me/79590260036', '_blank')} />
            <Button onClick={onLeadOpen}>Подобрать варианты</Button>
            <Button as="a" href={`tel:${brand.phone}`} variant="secondary">Позвонить</Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button onClick={onLeadOpen} size="sm">Подобрать варианты</Button>
            <Button aria-label="Меню" onClick={() => setMenuOpen((prev) => !prev)} size="icon" variant="icon">☰</Button>
          </div>
        </div>

        {menuOpen && (
          <div className="grid gap-2 pb-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg border bg-white px-3 py-2" style={{ borderColor: 'var(--border)' }} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero({ onLeadOpen }) {
  return (
    <Section id="about" className="pt-[104px]">
      <Container className="max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--muted)]">ИПОТЕЧНЫЙ БРОКЕР • ЛУГАНСК</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.08] md:text-[52px]">Подберём ЖК и поможем с ипотекой</h1>
            <p className="mt-4 max-w-xl text-base text-[var(--muted)] md:text-lg">Подскажем условия, соберём документы и сопроводим сделку.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button onClick={onLeadOpen}>Подобрать варианты</Button>
              <Button as="a" href={brand.telegram} target="_blank" rel="noreferrer" variant="ghost">Написать в Telegram</Button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Telegram', href: brand.telegram },
                { label: 'WhatsApp', href: 'https://wa.me/79590260036' },
                { label: 'Телефон', href: `tel:${brand.phone}` },
              ].map((item) => (
                <a key={item.label} href={item.href} className="hover-lift rounded-xl border bg-[var(--surface2)] px-3 py-3 text-sm font-medium" style={{ borderColor: 'var(--border)' }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative h-[540px] w-full">
              <SlotBox className="absolute right-0 top-0 h-[240px] w-full max-w-[360px] bg-[var(--surface2)] shadow-soft" kind="image" slotKey="hero-photo-1" />
              <SlotBox className="absolute left-0 top-[170px] h-[200px] w-full max-w-[360px] bg-[var(--surface2)] shadow-soft" kind="image" slotKey="hero-photo-2" />
              <SlotBox className="absolute bottom-0 right-6 h-[260px] w-[220px] bg-[var(--surface2)] shadow-soft" kind="mascot" slotKey="mascot-hero" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Advantages() {
  const items = ['Подбор ЖК под бюджет', 'Сопровождение ипотеки', 'Коммуникация с застройщиком', 'Экономим ваше время'];
  return (
    <Section>
      <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((title) => (
          <Card key={title} className="hover-lift reveal p-5" style={{ borderColor: 'var(--border)' }}>
            <h3 className="text-lg font-semibold">{title}</h3>
          </Card>
        ))}
      </Container>
    </Section>
  );
}

function TrustMetrics() {
  const metrics = ['Ответ в течение 10 минут', 'Подбор вариантов за день', 'Сопровождение до сделки'];
  return (
    <Section>
      <Container className="grid gap-3 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric} className="reveal rounded-xl border bg-white px-4 py-3 text-sm font-medium" style={{ borderColor: 'var(--borderStrong)' }}>
            {metric}
          </div>
        ))}
      </Container>
    </Section>
  );
}

function Directions() {
  return (
    <Section>
      <Container>
        <h2 className="mb-5 text-3xl font-semibold">Направления</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {directions.map((tile, index) => (
            <Card
              key={tile.id}
              className={`hover-lift reveal relative min-h-[140px] p-5 ${index < 2 ? 'lg:col-span-2' : ''}`}
              style={{ borderColor: 'var(--borderStrong)' }}
            >
              {index === 0 && <SlotBox className="mb-3 h-20 w-[120px] bg-[var(--surface2)]" kind="image" slotKey="tile-illustration-1" />}
              {index === 1 && <SlotBox className="mb-3 h-20 w-[120px] bg-[var(--surface2)]" kind="image" slotKey="tile-illustration-2" />}
              <h3 className="text-xl font-semibold">{tile.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{tile.desc}</p>
              <span className="absolute bottom-4 right-4 text-xl">↗</span>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function TelegramBanner({ onLeadOpen }) {
  return (
    <Section>
      <Container>
        <div
          className="reveal flex min-h-[160px] flex-col justify-between gap-4 rounded-2xl border p-6 md:flex-row md:items-center"
          style={{
            borderColor: 'var(--borderStrong)',
            background:
              'linear-gradient(120deg, rgba(111,168,161,0.20), rgba(191,166,214,0.16), rgba(242,198,180,0.12))',
          }}
        >
          <h2 className="text-2xl font-semibold">Получите расчёт в Telegram за 10 минут</h2>
          <div className="flex flex-wrap gap-2">
            <Button as="a" href={brand.telegram} target="_blank" rel="noreferrer">Telegram</Button>
            <Button onClick={onLeadOpen} variant="secondary">Подобрать варианты</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Steps() {
  return (
    <Section id="steps">
      <Container>
        <h2 className="mb-5 text-3xl font-semibold">Как мы работаем</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((title, index) => (
            <Card key={title} className="hover-lift reveal p-5">
              <p className="text-sm text-[var(--muted)]">Этап {index + 1}</p>
              <p className="mt-2 text-lg font-semibold">{title}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Complexes() {
  const [index, setIndex] = useState(0);
  const cardsPerView = 3;

  const maxIndex = useMemo(() => Math.max(0, complexes.length - cardsPerView), []);

  return (
    <Section id="complexes">
      <Container>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-semibold">Жилые комплексы</h2>
          <div className="flex gap-2">
            <Button size="icon" variant="icon" onClick={() => setIndex((prev) => Math.max(0, prev - 1))}>←</Button>
            <Button size="icon" variant="icon" onClick={() => setIndex((prev) => Math.min(maxIndex, prev + 1))}>→</Button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 transition-transform duration-300" style={{ transform: `translateX(-${index * 336}px)` }}>
            {complexes.map((complex) => (
              <Card key={complex.id} className="hover-lift w-[280px] shrink-0 p-4 md:w-[320px]">
                <SlotBox className="h-[180px] w-full bg-[var(--surface2)]" kind="image" slotKey={`complex-${complex.id}-cover`} />
                <h3 className="mt-3 text-lg font-semibold">{complex.name}</h3>
                <p className="text-sm text-[var(--muted)]">{complex.location}</p>
                <p className="mt-2 font-semibold">{complex.priceFrom}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {complex.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[rgba(191,166,214,0.22)] px-3 py-1 text-xs">{tag}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services">
      <Container>
        <h2 className="mb-5 text-3xl font-semibold">Услуги</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id} className="hover-lift reveal p-5">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Reviews() {
  return (
    <Section id="reviews">
      <Container>
        <h2 className="mb-5 text-3xl font-semibold">Отзывы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="hover-lift p-5">
              <div className="mb-3 flex items-center gap-3">
                <SlotBox className="h-12 w-12 rounded-full bg-[var(--surface2)]" kind="avatar" slotKey={`review-${review.id}-avatar`} />
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <span className="inline-flex rounded-full bg-[rgba(111,168,161,0.2)] px-2.5 py-0.5 text-xs">{review.sourceLabel}</span>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">{review.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Faq() {
  const [opened, setOpened] = useState(faq[0]?.id);

  return (
    <Section id="faq">
      <Container>
        <h2 className="mb-5 text-3xl font-semibold">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item) => {
            const isOpen = opened === item.id;
            return (
              <Card key={item.id} className="p-4">
                <button type="button" className="flex w-full items-center justify-between text-left" onClick={() => setOpened(isOpen ? '' : item.id)}>
                  <span className="font-semibold">{item.question}</span>
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="mt-3 text-sm text-[var(--muted)]">{item.answer}</p>}
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function Contacts({ onLeadOpen }) {
  return (
    <Section id="contacts">
      <Container className="grid gap-4 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-3xl font-semibold">Оставьте заявку</h2>
          <p className="mt-2 text-[var(--muted)]">Напишите удобный способ связи — подготовим подборку и расчёт.</p>
          <form className="mt-5 space-y-3" onSubmit={(event) => event.preventDefault()}>
            <input className="w-full rounded-xl border px-3 py-2.5" style={{ borderColor: 'var(--borderStrong)' }} placeholder="Имя" />
            <input className="w-full rounded-xl border px-3 py-2.5" style={{ borderColor: 'var(--borderStrong)' }} placeholder="Телефон" />
            <textarea className="w-full rounded-xl border px-3 py-2.5" style={{ borderColor: 'var(--borderStrong)' }} placeholder="Комментарий" rows={3} />
            <div className="flex gap-2">
              <Button type="submit">Отправить</Button>
              <Button onClick={onLeadOpen} type="button" variant="secondary">Получить подборку</Button>
            </div>
          </form>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-semibold">Контакты</h3>
          <div className="mt-4 space-y-2 text-[var(--muted)]">
            <a href={brand.telegram} className="block">Telegram: {brand.telegram}</a>
            <a href="https://wa.me/79590260036" className="block">WhatsApp: +7 959 026 0036</a>
            <a href={`tel:${brand.phone}`} className="block">Телефон: {brand.phoneDisplay}</a>
          </div>
          <div className="mt-6 rounded-xl border bg-[var(--surface2)] p-4 text-sm" style={{ borderColor: 'var(--border)' }}>
            <p>ИП Иванов И.И.</p>
            <p>ИНН: 123456789012</p>
            <p>ОГРНИП: 123456789000001</p>
          </div>
        </Card>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="mt-4 border-t py-8" style={{ borderColor: 'var(--border)' }}>
      <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="font-semibold">{brand.name}</p>
          <p className="text-sm text-[var(--muted)]">Ипотечный брокер в Луганске</p>
        </div>
        <SlotBox className="h-10 w-32 bg-[var(--surface2)]" kind="image" slotKey="footer-logo" />
      </Container>
    </footer>
  );
}

export default function Page() {
  const [leadOpen, setLeadOpen] = useState(true);
  useRevealOnScroll();

  return (
    <>
      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
      <Header onLeadOpen={() => setLeadOpen(true)} />
      <TopSceneWrapper>
        <Hero onLeadOpen={() => setLeadOpen(true)} />
        <Advantages />
        <TrustMetrics />
      </TopSceneWrapper>
      <Directions />
      <TelegramBanner onLeadOpen={() => setLeadOpen(true)} />
      <Steps />
      <Complexes />
      <Services />
      <Reviews />
      <Faq />
      <Contacts onLeadOpen={() => setLeadOpen(true)} />
      <Footer />
    </>
  );
}
