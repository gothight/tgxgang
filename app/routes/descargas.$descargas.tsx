import { Link, useLocation as uselocation } from "@remix-run/react";
import { LandingButton, Lbtncss } from "~components/LandingButton";
import { x } from "./_index";
import { Feature, links as FeatureCSS } from "~components/DownloadFeature";
export const links = () => {
  return [
    ...FeatureCSS(),
    ...Lbtncss(),
    {
      rel: "stylesheet",
      href: require("~styles/RoutesCSS/descargas.css"),
    },
  ];
};
export default function descargas() {
  const location = uselocation();
  const url = location.pathname.split("/").pop();

  const found = x.find((mod) => mod.downloadcdn === `/descargas/${url}`);
  if (!found)
    return (
      <div className="landing-root">
        <h1>Archivo ndo encontrado</h1>
      </div>
    );

  const features = found.features.split("/");
  return (
    <main>
      <div className="landing-root">
        <div className="showcase">
          <img src={found.showcase} alt="" />
        </div>
        <div className="text">
          <h1>Gratis. Seguro. Simple.</h1>
          <h2>
            Tu <span>{found.title}</span> Aqui
          </h2>
          <div className="description">
            <p>
              Ejecuta scripts rapidamente, y eficientemente, en cualquier lado,
              a cualquier hora
            </p>
            <div className="buttons">
              <Link className="button" to={found.downloadcdn}>
                Descargar
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        {features.map((feature) => (
          <Feature icon={require("~assets/IconsSvg/games.svg")  } key={found.id} text={feature} />
        ))}
      </div>
    </main>
  );
}
