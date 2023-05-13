import { LandingButton, Lbtncss } from "~components/LandingButton";
import { Card, cssCard } from "~components/Card";

export const links = () => {
  return [
    ...Lbtncss(),
    ...cssCard(),
    {
      rel: "stylesheet",
      href: require("~styles/RoutesCSS/index.css"),
    },
  ];
};

export const x = [
  {
    working: false,

    showcase: require("~assets/showcase.png"),
    title: "TGX V4",
    author: "The Gabloxia",
    description:
      "Nivel 7, multi api, +200 scripts, auto attach, auto execute y mucho más!",
    downloadcdn: "/descargas/TGXV4",
    features:
      " Nivel 7 / +180 Juegos / Auto Inyectar / Auto ejecutar / Sin ban / Sin Virus / Sin Key",
    id: "1",
  },
  {
    working: false,

    showcase: require("~assets/v3.png"),
    title: "TGX V3",
    author: "The Gabloxia",
    description:
      "Nivel 7 con varias utilidades, como make loadstring, fps boost y algunas más.",
    downloadcdn: "/descargas/TGXV3",
    features:
      " Nivel 7/180 Juegos/Sin ban/Fps Booster/Sin Virus/Sin Key/Anti AFK/Update APIS",
    id: "2",
  },
  {
    working: false,
    showcase: require("~assets/v2.png"),
    title: "TGX V2",
    author: "The Gabloxia",
    description: "Version lite de TGX.",
    downloadcdn: "/descargas/TGXV2",
    features:
      "Nivel 7/Variedad de juegos/Muy compatible/No usa mucha ram/Sin Virus/Sin Key/Facil de usar/Actualizable!    ",
    id: "3",
  },
];

export default function Index() {
  return (
    <>
      <main>
        <div className="landing-root">
          <img src={require("~assets/showcase.png")} alt="showcase" />

          <div className="landing-root__text">
            <h1>Los Mejores Mods & Scripts!</h1>

            <p>Aca encontraras los mejores mods y scripts de roblox</p>
            <div className="landing-root__buttons">
              <LandingButton text="Mods" hreff="#mods" />
              <LandingButton text="Scripts" hreff="/Scripts" />
            </div>
          </div>
          <div className="social-root">
            <a
              className="social-button"
              data-tooltip="Muro de honor"
              href="/Honor"
            >
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.2 8.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM2.4 18c0 1.2 1.2 1.2 1.2 1.2h12s1.2 0 1.2-1.2-1.2-4.8-7.2-4.8-7.2 3.6-7.2 4.8Zm16.2-9.708c1.665-1.71 5.826 1.284 0 5.132-5.825-3.848-1.664-6.842 0-5.131v-.001Z"></path>
              </svg>
            </a>
            <a href="https://www.youtube.com/c/AttAnxiety" className="social-button" data-tooltip="Youtube">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.062 5.28h.106c.987.003 5.985.039 7.332.401a2.411 2.411 0 0 1 1.698 1.704c.122.456.207 1.06.264 1.683l.012.125.027.312.01.124a38.66 38.66 0 0 1 .088 2.349v.09a38.42 38.42 0 0 1-.098 2.472l-.01.126-.01.124c-.06.687-.15 1.369-.283 1.87a2.407 2.407 0 0 1-1.698 1.704c-1.392.374-6.682.4-7.416.402h-.17c-.37 0-1.904-.007-3.512-.062l-.204-.008-.105-.004-.205-.009-.205-.008c-1.332-.059-2.6-.154-3.185-.312A2.408 2.408 0 0 1 2.8 16.66c-.133-.5-.222-1.183-.282-1.87l-.01-.125-.01-.125a37.683 37.683 0 0 1-.098-2.443v-.148c.003-.258.012-1.15.077-2.134l.009-.123.003-.063.01-.124.026-.313.012-.124c.058-.623.143-1.228.264-1.683A2.408 2.408 0 0 1 4.5 5.681c.585-.156 1.853-.252 3.185-.312l.204-.008.206-.007.104-.004.205-.008c1.142-.037 2.284-.057 3.427-.061h.232v-.002ZM10.08 9.13v5.782l4.989-2.89L10.08 9.13Z"></path>
              </svg>
            </a>
            <a href="https://twitter.com/TheGabloxia" className="social-button" data-tooltip="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.432 19.8c7.245 0 11.209-6.005 11.209-11.202 0-.168 0-.338-.007-.506A8.023 8.023 0 0 0 21.6 6.049a7.99 7.99 0 0 1-2.266.622 3.961 3.961 0 0 0 1.736-2.18 7.84 7.84 0 0 1-2.505.951 3.943 3.943 0 0 0-6.715 3.593A11.19 11.19 0 0 1 3.73 4.92a3.947 3.947 0 0 0 1.222 5.259 3.989 3.989 0 0 1-1.784-.49v.054a3.946 3.946 0 0 0 3.159 3.862 3.964 3.964 0 0 1-1.775.069 3.939 3.939 0 0 0 3.68 2.733 7.907 7.907 0 0 1-4.896 1.688 7.585 7.585 0 0 1-.936-.054A11.213 11.213 0 0 0 8.432 19.8Z"></path>
              </svg>
            </a>
          </div>
        </div>
      
      <div id="mods" className="separator"></div>
      <section className="section-root">
        <div className="section-title">
          <h1>Mods</h1>
        </div>
        <div className="section-items">
          {x.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              description={post.description}
              author={post.author}
              to={post.downloadcdn}
              img={post.showcase}
              working={post.working}
            />
          ))}
        </div>
      </section>
      <div className="separator"></div>

      <section className="section-root">
        <div className="section-title">
          <h1>Otros Mods</h1>
        </div>
        <div className="section-items">
          <Card
            img={require("~assets/s.png")}
            title="Sena's Whare"
            author="Y2K06b"
            description="Nuevo, nivel 7 con ui moderna y las mejores opciones de TGX!"
            to="https://y2k06.xyz/"
            working={false}
          />
          <Card
            img={require("~assets/ArceusXX.png")}
            title="Arceus"
            author="Arceus X Devs"
            description="El primer mod para movil, capaz de ejecutar casi todos los scripts!"
            to="https://link-center.net/183458/arceus-roblox-hack-mobile"
            working
          />
        </div>
      </section>
      </main>
    </>
  );
}

