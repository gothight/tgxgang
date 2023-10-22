/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
export const links = () => [
  {
    rel: "stylesheet",
    href: require("~styles/RoutesCSS/TGX5.css"),
  },
]

export default function a() {
  const [countt, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countt === 0) {
      window.location.href = 'https://link-hub.net/183458/tgx-v5';
    }
  }, [countt]);

  return (
    <>
    <main>
    <div className="root">
        <div className="miniroot">
          <h1>Descargando TGX v5...</h1>
          <p>Por favor se paciente...</p>
          <span>Si necesitas ayuda solicitala en nuestro servidor de discord</span>
          <a href="discord:https://discord.gg/invite/we-love-you-gabloxia-768962587462598697">tgxgang.xyz/discord</a>
          <div className="info">
            <p >Si la descarga no se inicia presiona este link:</p> <a

              href="https://link-hub.net/183458/tgx-v5">
              TGX V5.zip</a>
         <div>
         {countt > 0 && <p>La descarga comenzará en {countt} segundos...</p>}
         </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
