/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useLocation } from "@remix-run/react";
import React from "react";
import { Soader, LoaderCSS } from "~components/Loader";

import { useFetchResult } from "~/fetch/FetchScripts";
export const links = () => {
  return [
    ...LoaderCSS(),
    { rel: "stylesheet", href: require("~styles/RoutesCSS/CdnScripts.css") },
  ];
};

class App extends React.Component {
  state = {
    value: "",
    copied: false,
  };
}
export default function script() {
  const data = useFetchResult();
  const location = useLocation();
  const url = location.pathname
    .split("/")
    .pop()
    ?.replace(/%20/g, " ")
    .toLowerCase();

  if (!data) return <Soader />;

  const found = data.find((mod) => mod.nombre.toLowerCase() === url);

  if (!found)
    return (
      <div className="landing-root">
        <h1>Script no encontrado</h1>
      </div>
    );

  const features = ` ${found.caracteristicas} `;
  const codigo = `loadstring(game:HttpGet('${found.txt}', true))()`;

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([codigo], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = found.nombre;
    document.body.appendChild(element);
    element.click();
  };
  return (
    <>
      <main>
        <div className="landing-root">
          <div className="container">
            <div className="image">
              <img
                onError={(e) =>
                  (e.currentTarget.src = require("~assets/error.png"))
                }
                src={found.mini}
                alt={found.juego_fecha}
              />
            </div>
            <div className="text">
              <h1>{found.nombre}</h1>
              <h2>{found.juego_fecha}</h2>
              <p>{features}</p>
            </div>
            <div className="script-container">
              <textarea readOnly className="Script" name="" id="">
                {codigo}
              </textarea>
              <div className="buttons">
                <button onClick={e => navigator.clipboard.writeText(codigo)} className="button">Copiar</button>

                <button onClick={downloadTxtFile} className="button">
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
