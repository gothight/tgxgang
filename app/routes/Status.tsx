import { useEffect as useeffect, useState as usestate } from "react";
import { fetch as fetchData, FetchResultTypes } from "@sapphire/fetch";
import { LoaderCSS } from "~components/Loader";
interface JsonResult {

  activo: boolean;
  nombre: string;
}

interface DllInfo {
  seleccionada: boolean;
  id: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
  actualizacion: boolean;
  pipe: string;
  descargaUrl: string;
  tieneKey: boolean;
  injector_info: {
    nombre: string;
    descripcion: string;
    descargaURL: string;
  };
}



export const links = () => {
  return [
    ...LoaderCSS(),
    { rel: "Stylesheet", href: require("~styles/RoutesCSS/Status.css") },
  ];
};

export default function status() {
  const [data, setData] = usestate<JsonResult[] | null>(null);

  useeffect(() => {
    (async () => {
      try {
        const result = await fetchData<{ TGX: { downloader: { apis: { dlls: DllInfo[] } } } }>(
          "https://corsproxy.io/?https://cloud.tgxgang.xyz/tgx/json/Universal.txt",
          FetchResultTypes.JSON
        );
        setTimeout(() => {
          return setData(result.TGX.downloader.apis.dlls);
        }, 1500);
      } catch (error) {
        console.log("Hubo un error +" + error);
      }
    })();
  }, []);


  if (!data) {
    const Skeletons = Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        style={{
          width: "350px",
          height: "49px",
          padding: "16px",
          background: "var(--NavbarBackground)",
          border: "1px solid var(--Border)",
          borderRadius: "8px",
        }}
      >
        <h2
          className="skeleton"
          style={{
            height: "22px",
            color: "gray",
            fontSize: "16px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        ></h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            className="skeleton"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></div>
          <span
            className="skeleton"
            style={{
              fontSize: "14px",
              height: "10px",
              width: "100px",
              fontWeight: "bold",
            }}
          ></span>
        </div>
      </div>
    ));
    return (
      <main>
        {" "}
        <div className="textmain">
          <h1 id="stt">Estado de las apis</h1>
        </div>
        <div className="CardContainer">{Skeletons}</div>{" "}
      </main>
    );
  }

  return (
    <main>
      <div className="textmain">
        <h1 id="stt">Estado de las APIS</h1>
      </div>

      <div className="CardContainer">
        {data.map((Api) => (
          <div
            key={Api.nombre}
            style={{
              width: "350px",
              padding: "16px",
              background: "var(--NavbarBackground)",
              border: "1px solid var(--Border)",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                color: "gray",
                fontSize: "16px",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              {Api.nombre} API Status
            </h2>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: `${Api.activo === true ? "green" : "red"
                    }`,
                  borderRadius: "50%",
                  marginRight: "8px",
                }}
              ></div>
              <span
                style={{
                  color: `${Api.activo === true ? "green" : "red"}`,
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {Api.activo === true ? "Activa" : "Inactiva"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
