'use client';

import { useMemo, useState } from 'react';
import Button from '../ui/Button';

const stepConfig = [
  { key: 'layout', label: 'Тип квартиры по метражам', placeholder: 'Например: 1-комн. 38–45 м²' },
  { key: 'budget', label: 'Бюджет', placeholder: 'Например: до 5 000 000 ₽' },
  { key: 'finish', label: 'Отделка', placeholder: 'Например: предчистовая / с ремонтом' },
  { key: 'contact', label: 'Контакты', placeholder: 'Телефон или Telegram' },
];

export default function LeadModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [values, setValues] = useState({ layout: '', budget: '', finish: '', contact: '' });

  const progress = useMemo(() => ((step + 1) / stepConfig.length) * 100, [step]);
  const current = stepConfig[step];

  if (!open) return null;

  const submitStep = (event) => {
    event.preventDefault();
    if (step < stepConfig.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    const payload = { ...values, sentAt: new Date().toISOString() };
    console.log('Подобрать варианты', payload);
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(17,24,39,0.35)] p-4">
      <div className="w-full max-w-xl rounded-2xl border bg-white p-5 shadow-hover md:p-6" style={{ borderColor: 'var(--border)' }}>
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold">Подобрать варианты</h3>
            <p className="text-sm text-[var(--muted)]">Мы уточним детали и предложим подходящие решения.</p>
          </div>
          <button className="text-lg text-[var(--muted)]" onClick={onClose} type="button" aria-label="Закрыть">×</button>
        </div>

        {!done && (
          <>
            <div className="mb-5 h-1.5 rounded-full bg-[rgba(17,24,39,0.08)]">
              <div className="h-full rounded-full bg-[var(--primary)] transition-all" style={{ width: `${progress}%` }} />
            </div>
            <form onSubmit={submitStep} className="space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Шаг {step + 1}. {current.label}</span>
                <input
                  value={values[current.key]}
                  onChange={(event) => setValues((prev) => ({ ...prev, [current.key]: event.target.value }))}
                  className="w-full rounded-xl border px-3 py-2.5 outline-none focus-visible:[box-shadow:0_0_0_4px_var(--ring)]"
                  style={{ borderColor: 'var(--borderStrong)' }}
                  placeholder={current.placeholder}
                  required
                />
              </label>
              <div className="flex gap-2">
                {step > 0 && (
                  <Button type="button" variant="secondary" onClick={() => setStep((prev) => prev - 1)}>
                    Назад
                  </Button>
                )}
                <Button className="ml-auto" type="submit">{step === stepConfig.length - 1 ? 'Отправить' : 'Далее'}</Button>
              </div>
            </form>
          </>
        )}

        {done && (
          <div className="space-y-4 py-3">
            <p className="text-lg font-semibold">Спасибо, мы свяжемся</p>
            <p className="text-sm text-[var(--muted)]">Подборка вариантов уже готовится. Мы скоро выйдем на связь.</p>
            <Button onClick={onClose} variant="secondary">Закрыть</Button>
          </div>
        )}
      </div>
    </div>
  );
}
