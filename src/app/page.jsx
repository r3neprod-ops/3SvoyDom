'use client';

import brand from '../data/brand';
import services from '../data/services';
import complexes from '../data/complexes';
import reviews from '../data/reviews';
import faq from '../data/faq';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import IconButton from '../components/ui/IconButton';
import SlotBox from '../components/slots/SlotBox';
import LeadModal from '../components/modals/LeadModal';

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-soft bg-bg/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm text-text/70">Ипотечный брокер</p>
          <p className="font-semibold">{brand.name}</p>
        </div>
        <div className="flex items-center gap-2">
          <IconButton icon="☎" onClick={() => window.open(`tel:${brand.phone}`)}>
            {brand.phoneDisplay}
          </IconButton>
          <Button as="a" href={brand.telegram}>
            Telegram
          </Button>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <Section className="pt-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="relative overflow-hidden">
            <SlotBox className="mb-6 min-h-36" kind="background" slotKey="hero-bg" />
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">Ипотека в Луганске под ключ — от заявки до сделки</h1>
            <p className="mt-4 max-w-lg text-text/75">
              Подбираем программы банков и новостройки с максимальной выгодой. Работаем быстро, прозрачно и результативно.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href="#contact">
                Получить консультацию
              </Button>
              <IconButton icon="✉" onClick={() => window.open(brand.telegram, '_blank')}>
                Написать в Telegram
              </IconButton>
            </div>
          </Card>
          <Card>
            <SlotBox className="h-full min-h-80" kind="image" slotKey="mascot-hero">
              Маскот / эксперт компании
            </SlotBox>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function QuickContacts() {
  return (
    <Section>
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm text-text/70">Телефон</p>
            <a className="mt-2 block text-xl font-semibold" href={`tel:${brand.phone}`}>
              {brand.phoneDisplay}
            </a>
          </Card>
          <Card>
            <p className="text-sm text-text/70">Telegram</p>
            <a className="mt-2 block text-xl font-semibold text-primary" href={brand.telegram}>
              @svoydom
            </a>
          </Card>
          <Card>
            <p className="text-sm text-text/70">Режим работы</p>
            <p className="mt-2 text-xl font-semibold">Ежедневно 09:00–20:00</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

function Tiles() {
  const stats = ['11+ банков-партнеров', '93% одобрений', '500+ семей с ипотекой'];
  return (
    <Section>
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <Card key={item}>
              <p className="text-lg font-semibold">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CtaTelegram() {
  return (
    <Section>
      <Container>
        <Card className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-primary">Быстрый контакт</p>
            <h2 className="text-2xl font-semibold">Получите расчет в Telegram за 10 минут</h2>
          </div>
          <Button as="a" href={brand.telegram}>
            Перейти в Telegram
          </Button>
        </Card>
      </Container>
    </Section>
  );
}

function Steps() {
  const steps = ['Бриф и расчет бюджета', 'Подача заявки', 'Одобрение', 'Выбор объекта', 'Сделка и ключи'];
  return (
    <Section>
      <Container>
        <h2 className="mb-6 text-2xl font-semibold">Как мы работаем</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {steps.map((step, idx) => (
            <Card key={step}>
              <p className="text-sm text-primary">0{idx + 1}</p>
              <p className="mt-2 font-semibold">{step}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ComplexesCarousel() {
  return (
    <Section>
      <Container>
        <h2 className="mb-6 text-2xl font-semibold">Актуальные жилые комплексы</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {complexes.map((complex) => (
            <Card key={complex.id}>
              <SlotBox className="mb-4 min-h-40" kind="image" slotKey={`complex-${complex.id}-cover`} />
              <h3 className="text-lg font-semibold">{complex.name}</h3>
              <p className="text-text/70">{complex.location}</p>
              <p className="mt-2 font-semibold text-primary">{complex.priceFrom}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Services() {
  return (
    <Section>
      <Container>
        <h2 className="mb-6 text-2xl font-semibold">Услуги</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.id}>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-text/70">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Reviews() {
  return (
    <Section>
      <Container>
        <h2 className="mb-6 text-2xl font-semibold">Отзывы клиентов</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id}>
              <SlotBox className="mb-4 min-h-20" kind="avatar" slotKey={`review-${review.id}-avatar`} />
              <p className="font-semibold">{review.name}</p>
              <p className="mt-2 text-text/70">{review.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Faq() {
  return (
    <Section>
      <Container>
        <h2 className="mb-6 text-2xl font-semibold">FAQ</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <Card key={item.id}>
              <p className="font-semibold">{item.question}</p>
              <p className="mt-2 text-text/70">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ContactForm() {
  return (
    <Section id="contact">
      <Container>
        <Card>
          <h2 className="text-2xl font-semibold">Оставьте заявку</h2>
          <p className="mt-2 text-text/70">Мы свяжемся с вами и подберем оптимальные ипотечные решения.</p>
          <form className="mt-6 grid gap-3 md:grid-cols-3">
            <input className="rounded-lg border border-soft bg-bg px-3 py-2" placeholder="Имя" type="text" />
            <input className="rounded-lg border border-soft bg-bg px-3 py-2" placeholder="Телефон" type="tel" />
            <Button type="submit">Отправить</Button>
          </form>
        </Card>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-soft py-8">
      <Container className="flex flex-col gap-2 text-sm text-text/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {brand.name}</p>
        <p>Ипотечный брокер в Луганске</p>
      </Container>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <LeadModal />
      <Header />
      <Hero />
      <QuickContacts />
      <Tiles />
      <CtaTelegram />
      <Steps />
      <ComplexesCarousel />
      <Services />
      <Reviews />
      <Faq />
      <ContactForm />
      <Footer />
    </>
  );
}
