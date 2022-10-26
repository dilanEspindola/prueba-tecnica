import { URL } from "@/utils";
import { FetchData } from "@/interfaces";

export const getData = async (): Promise<FetchData[]> => {
  const res = await fetch(URL);
  const data: FetchData[] = await res.json();
  return data;
};
