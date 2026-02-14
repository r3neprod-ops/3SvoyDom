'use client';

import { useEffect, useState } from 'react';
import Button from '../ui/Button';

const steps = [
  'Тип недвижимости',
  'Бюджет',
  'Первоначальный взнос',
  'Доход',
  'Срок ипотеки',
  'Контакты',
];

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleChange = (step, value) => {
    setFormData((prev) => ({ ...prev, [step]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Подобрать варианты:', formData);
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-soft bg-surface p-6 shadow-glow">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-text">Подобрать варианты</h3>
            <p className="text-sm text-text/70">Ответьте на 6 шагов и мы подготовим персональные предложения.</p>
          </div>
          <button className="text-text/70" onClick={() => setIsOpen(false)} type="button">
            ✕
          </button>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {steps.map((step, index) => (
            <label className="block" key={step}>
              <span className="mb-1 block text-sm text-text/80">
                Шаг {index + 1}: {step}
              </span>
              <input
                className="w-full rounded-lg border border-soft bg-bg px-3 py-2 text-sm text-text outline-none focus:border-primary"
                onChange={(e) => handleChange(step, e.target.value)}
                placeholder={`Введите: ${step.toLowerCase()}`}
                type="text"
              />
            </label>
          ))}
          <Button className="w-full" type="submit">
            Отправить заявку
          </Button>
        </form>
      </div>
    </div>
  );
}
