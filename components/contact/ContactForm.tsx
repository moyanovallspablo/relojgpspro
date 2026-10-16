"use client";

import { useState } from "react";
import { LEGAL_OWNER } from "@/lib/legal";

// Formulario sin backend: al enviarlo abre el programa de correo del
// usuario con el mensaje ya redactado (mailto:). La web no envía ni
// guarda nada; los datos solo viajan en el email que el usuario decide
// mandar. Por eso el botón dice "Preparar email" y no "Enviar".

const inputClass =
  "mt-1.5 w-full rounded-card border border-line bg-base px-4 py-3 text-sm text-ink placeholder:text-ink-300 transition-colors focus:border-accent focus:bg-surface focus:outline-none";
const labelClass = "block text-sm font-semibold text-ink";

export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = `${message}\n\n—\nNombre: ${name}\nEmail de respuesta: ${email}`;
    const href = `mailto:${LEGAL_OWNER.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setPrepared(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Nombre
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className={labelClass}>
          Asunto
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-500 sm:max-w-xs">
          Se abrirá tu programa de correo con el mensaje listo para enviar.
          Esta web no guarda los datos del formulario.
        </p>
        <button type="submit" className="btn-primary shrink-0">
          Preparar email
        </button>
      </div>

      {prepared && (
        <p
          role="status"
          className="rounded-card bg-accent-tint px-4 py-3 text-sm text-ink-700"
        >
          Si no se ha abierto tu programa de correo, escribe directamente a{" "}
          <a
            href={`mailto:${LEGAL_OWNER.email}`}
            className="font-semibold text-accent-dark hover:underline"
          >
            {LEGAL_OWNER.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
