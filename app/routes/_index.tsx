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
    title: "TGX V5",
    author: "The Gabloxia",
    description: "El nuevo mejor exploit sin key y nivel 7, con mas de 4000 scripts",
    downloadcdn: "/descargas/TGXV",
    downloadlink: "https://tgxgang.xyz/tgxv",
    features: " Nivel 7 / +4000 Scripts / Sin ban / Sin Virus / Sin Key / Codigo abierto",
    id: "1",
  }
];

export default function Index() {
  return (
    <>
   
      <main>
      <div className="message-alert">
          <p>
            <b>¡Atencion!</b> TGX No esta funcionando, esto debido al anticheat de roblox "Byfron".
          </p>
        </div>
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
        

      </main>
    </>
  );
}
