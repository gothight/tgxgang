import { useEffect, useState } from "react";
import { fetch as fetchData, FetchResultTypes } from "@sapphire/fetch";

export interface JsonResult {
  id: number;
  nombre: string;
  juego_fecha: string;
  descarga: string;
  review_url: string;
  mini: string;
  descripcion: string;
  txt: string;
  caracteristicas: string[];
}

export function useFetchResult(): JsonResult[] | null {
  const [data, setData] = useState<JsonResult[] | null>(null);

  useEffect(() => {
    (async () => {
      const result = await fetchData<{ data: JsonResult[] }>(
        "https://test.tgxgang.xyz/json/scripts.txt",
        FetchResultTypes.JSON
      );
      setTimeout(() => {
        setData(result.data);
      }, 1000);
    })();
  }, []);

  return data;
}