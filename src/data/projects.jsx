export const projects = [
  {
    id: 1,
    title: "Booroad",
    image: "/images/booroad.png",
    description: "Sito creato per simulare la gestione dei viaggi per un'agenzia.",
    technologies: [
      "react",
      "css",
      "bootstrap",
      "radix",
      "javascript"
    ],
    github: "https://github.com/SamirSadriu-24/booroad-cs5-main/"
  },
  {
    id: 2,
    title: "NeonPress",
    image: "/images/neonpress.png",
    description: "Sito che simula un giornale digitale che permette di accedere a determinati servizi (aggiungere, eliminare o modificare articoli e giornalisti) a seconda del ruolo assegnato.",
    technologies: [
      "java",
      "css",
      "bootstrap",
      "spring",
      "thymeleaf",
      "mysql"
    ],
    github: "https://github.com/SamirSadriu-24/Neon-Press-Journal-Site"
  },
  {
    id: 3,
    title: "Boolflix",
    image: "/images/matrix.png",
    description: "Sito che tramite una api esterna si occupa di caricare titoli di film richiesti dall'utente nella barra di ricerca.",
    technologies: [
      "html",
      "css",
      "bootstrap",
      "javascript",
      "node",
      "express"
    ],
    github: "https://github.com/SamirSadriu-24/react-boolflix"
  }
];

export const techIcons = {
  html: <i class="devicon-html5-plain"></i>,
  react: <i className="devicon-react-original colored"></i>,
  css: <i className="devicon-css3-plain colored"></i>,
  bootstrap: <i className="devicon-bootstrap-plain colored"></i>,
  javascript: <i className="devicon-javascript-plain colored"></i>,
  java: <i className="devicon-java-plain colored"></i>,
  spring: <i className="devicon-spring-original colored"></i>,
  node: <i class="devicon-nodejs-plain colored"></i>,
  express: <i class="devicon-express-original"></i>,
  mysql: <i className="devicon-mysql-plain colored"></i>,
  thymeleaf: <i class="devicon-thymeleaf-plain"></i>,
  radix: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.6 22c-3.53 0-6.4-2.87-6.4-6.4s2.87-6.4 6.4-6.4zm0-20H5.2v6.4h6.4zm4 6.4c1.77 0 3.2-1.43 3.2-3.2S17.37 2 15.6 2s-3.2 1.43-3.2 3.2 1.43 3.2 3.2 3.2" />
    </svg>
  )
};

export default projects;