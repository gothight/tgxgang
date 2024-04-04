import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "~styles/GlobalCSS/global.css"

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: require("~styles/GlobalCSS/global.css"),
  },
  {
    rel: "stylesheet",
    href: require("~styles/GlobalCSS/header.css"),
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito",
  },
  {
    rel: "stylesheet",
    href: require("~styles/GlobalCSS/footer.css"),
  },
  {
    rel: "stylesheet",
    href: require("~styles/GlobalCSS/404.css"),
  },
];


export const meta: V2_MetaFunction = () => {
  return [
    { title: "The Gabloxia Gang ⛧ Sitio Web" },
    { name: "description", content: "The Gabloxia Gang · Sitio web official" },
    { property: "og:title", content: "The Gabloxia Gang" },
    { author: "The Gabloxia" },
    { name: "theme-color", content: "#00000" },
    { property: "og:keywords" ,content: "TGX, TGX GANG, tgx v4, scripts" },
    { property: "twitter:title", content: "The Gabloxia Gang" },
    { property: "twitter:description", content: "The Gabloxia Gang · Sitio Wxb Oficial" },
    { property:  "twitter:card" , content: "summary_large_image" },
    { property: "og:image", content: require("~assets/TGX Wallpaper.png") },
    { property: "twitter:image1", content: require("~assets/TGX Wallpaper.png") }



  ];
}

export function Footerz() {
  return (
    <footer>
      <div className="footer-root">
        <p className="footer-text">
          Copyright ©The Gabloxia Gang - {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}
export function Headerz() {
  return (
    <>
      <header>
        <nav className="nav-root">
          <img
            src={require("~assets/LogoSVG.svg")}
            alt="Logo"
            className="nav-logo"
          />

          <input type="checkbox" name="checkbox" id="hamburger" />

          <div className="nav-list-root">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" id="home">
                  <img src={require("~assets/home.svg")} alt="" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Scripts" id="scripts">
                  <img src={require("~assets/scripts.svg")} alt="" />
                  Scripts
                </Link>
              </li>
          
              <li className="nav-item">
                <a
                  id="discord"
                  href="https://discord.gg/the-gabloxia-gang-768962587462598697"
                  target="_blank" rel="noreferrer"
                >
                  <img src={require("~assets/discord.svg")} alt="" />
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <label id="htmlforinput" htmlFor="hamburger">
            <svg
              width="19"
              height="19"
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.75 18h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h18.6-18.5z"></path>
            </svg>
          </label>
        </nav>
      </header>
    </>
  );
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
<script defer data-cfasync="false" src="//d34gjfm75zhp78.cloudfront.net/?mfjgd=1007576"></script>
      </head>
      <body>
        <Headerz />
        <Outlet />
        <Footerz />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();
  console.log(error)
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Headerz />
        <div className="FullScreen">
          <h1>Pagina no encontrada </h1>
        </div>
        <Footerz />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>

  );
}
