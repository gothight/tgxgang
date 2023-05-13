import { useState as usestate } from "react";
import { LoaderCSS } from "~components/Loader";
import { useFetchResult as fetchscripts } from "~/fetch/FetchScripts";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Gabloxia Gang ⛧ Sitio Web" },
    { name: "description", content: "The Gabloxia Gang · Scripts \n Los mejores scripts en tgxgang" },
    { property: "og:title", content: "The Gabloxia Gang" },
    { author: "The Gabloxia" },
    { name: "theme-color", content: "#00000" },
    { property: "og:keywords" ,content: "TGX, TGX GANG, tgx v4, scripts" },
    { property: "twitter:title", content: "The Gabloxia Gang" },
    { property: "twitter:description", content: "The Gabloxia Gang · Sitio Web Oficial" },
    { property:  "twitter:card" , content: "summary_large_image" },
    { property: "og:image", content: require("~assets/TGX Wallpaper.png") },
    { property: "twitter:image1", content: require("~assets/TGX Wallpaper.png") }



  ];
}

export function links() {
  return [
    ...LoaderCSS(),
    {
      rel: "stylesheet",
      href: require("~styles/RoutesCSS/Scripts.css"),
    },
  ];
}
export default function scripts() {
  const data = fetchscripts();
  const [searchTerm, setSearchTerm] = usestate("");

  if (!data) {
    const skeletons = Array.from({ length: 6 }, (_, index) => (
      <>
       
        <div className="script-container" key={index}>
          <div className="CardIMG skeleton" style={{ border: 0 }} />
          <div className="script-text gapTextz">
            <h3 className="skeleton"></h3>
            <h4 className="skeleton"></h4>
            <p className="skeleton"></p>
          </div>
          <div className="script-button"></div>
        </div>
      </>
    ));

    return (
      <>
        <div className="scripts-container">{skeletons}</div>
      </>
    );
  }


  


  const filteredData = data.filter((post) =>
    post.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main>
        <div className="landing-rootScripts">
          <h1>Scripts</h1>
          <h2>Encuentra los mejores scripts</h2>
          <div className="group">
            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input
              className="input"
              type="text"
              placeholder="Busca tu script..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="scripts-container">
          {data ? (
            filteredData.map((post, index) => (
              <div key={index} className="script-container">
                <img
                  className="CardIMG"
                  src={post.mini}
                  alt="Imagen de script"
                  onError={(e) =>
                    (e.currentTarget.src = require("~assets/error.png"))
                  }
                />
                <div className="script-text">
                  <h3>{post.nombre}</h3>
                  <h4>{post.juego_fecha}</h4>
                  <p>{post.caracteristicas}</p>
                </div>
                <div className="script-button">
                  <Link
                    className="button"
                    to={"/GetScript/" + post.nombre.replace(/ /g, "%20")}
                  >
                    Descargar
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="script-container">
              <div className="script-text">
              </div>
              <div className="script-button">
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
