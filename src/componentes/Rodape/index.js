import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a
              href="https://github.com/renato-luz"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/github.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/renatoluz21/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/linkedin.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Rodape;
