import "./homePage.scss";

export const HomePage = () => {
  return (
    <>
      <header className="header border-bottom">
        <nav className="navbar">
          <a>Home</a>
          <a>About</a>
          <a>Blog</a>
          <a>Resume</a>
          <a>Contact</a>
        </nav>
      </header>
      <main className="main">
        <section className="home-section">
          <section className="article-header border-bottom">
            <h1>Lorem Ipsum Dolor Long Heading</h1>
          </section>
          <article className="article-body">
            <div className="article-metadata border-bottom"></div>
            <div className="article-content">
              <p></p>
            </div>
          </article>
        </section>
        <aside className="sidebar border-left">
          <div className="avatar border"></div>
          <h1 className="border">Zeyaam Shahid</h1>
          <div>
            <section className="sidebar-section border">
              <h2>Skills</h2>
            </section>
            <section className="sidebar-section border">
              <h2>Latest</h2>
            </section>
          </div>
        </aside>
      </main>
      <footer className="footer border-top"></footer>
    </>
  );
};
