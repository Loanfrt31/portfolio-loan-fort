function Contact({ t }) {
  const contact = t.contact;

  return (
    <div className="page page-contact">
      <div className="contact-card">
        <h1>{contact.title}</h1>
        <p>{contact.text}</p>

        <div className="contact-methods">
          <a className="contact-method" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a className="contact-method" href={contact.phoneHref}>
            {contact.phone}
          </a>
          <a
            className="contact-method"
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.linkedinLabel}
          </a>
        </div>

        <span className="contact-location">{contact.location}</span>
      </div>
    </div>
  );
}

export default Contact;
