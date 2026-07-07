import { useState } from "react";
import { FORMSPREE_FORM_ID } from "../content.js";

// Formulaire de contact natif, envoyé via l'API Formspree (fetch + JSON),
// sans aucune librairie de formulaire.

function ContactForm({ t }) {
  const form = t.contact.form;
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    // Honeypot anti-spam : un robot qui remplit tous les champs remplira
    // aussi celui-ci, invisible pour un humain — on abandonne silencieusement.
    if (data.get("_gotcha")) return;

    setStatus("sending");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="contact-form-success">{form.success}</p>;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="_gotcha"
        className="contact-form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="contact-form-field">
        <label htmlFor="contact-name">{form.nameLabel}</label>
        <input id="contact-name" name="name" type="text" required />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-email">{form.emailLabel}</label>
        <input id="contact-email" name="email" type="email" required />
      </div>

      <div className="contact-form-field">
        <label htmlFor="contact-message">{form.messageLabel}</label>
        <textarea id="contact-message" name="message" rows="4" required />
      </div>

      <button
        type="submit"
        className="btn btn-primary contact-form-submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? form.sending : form.submit}
      </button>

      {status === "error" && <p className="contact-form-error">{form.error}</p>}
    </form>
  );
}

export default ContactForm;
