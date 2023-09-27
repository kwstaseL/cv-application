import "./CV.css";

function CV() {
  return (
    <section className="cv">
      <header className="cv__header">
        <h1 className="cv__name">John Doe</h1>
        <h1 className="cv__role">Office Manager</h1>
      </header>
      <main className="cv__main">
        <section className="main__content">
          <p className="cv__professional-summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            voluptate, velit dolorum aliquam officiis eos ad aspernatur ratione
            praesentium fuga quasi consequatur dolorem laborum quis!
          </p>
          <section className="cv__section">
            <h1 className="section__title">Education</h1>
          </section>
        </section>
        <aside className="cv__aside">
          <h1 className="cv__aside-title">Personal Info</h1>
        </aside>
      </main>
    </section>
  );
}

export default CV;
