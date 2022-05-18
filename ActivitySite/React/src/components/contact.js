export default function ContactPage(props) {
  return (
    <main className="page-content">
      <section className="contact-form">
        <header className="main-header">
          <h1>Kontakta oss!</h1>
        </header>

        <form action="#">
          <p className="form-group">
            <label htmlFor="question">Din fråga</label>
            <input id="question" type="text" placeholder="Skriv din fråga" />
          </p>
          <p className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="adress@domain" />
          </p>
          <p className="form-group">
            <label htmlFor="description">Förklaring av problemet</label>
            <textarea id="description"></textarea>
          </p>
          <button>Skicka in frågan</button>
        </form>
      </section>
    </main>
  )
}