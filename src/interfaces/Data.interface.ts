export interface FetchData {
  ciudad_municipio: string;
  ciudad_municipio_nom: string;
  departamento: string;
  departamento_nom: string;
  edad: string;
  estado: Estado;
  fecha_de_notificaci_n: Date;
  fecha_diagnostico: Date;
  fecha_inicio_sintomas: Date;
  fecha_muerte?: Date;
  fecha_recuperado?: Date;
  fecha_reporte_web: Date;
  fuente_tipo_contagio: FuenteTipoContagio;
  id_de_caso: string;
  nom_grupo_?: string;
  per_etn_: string;
  recuperado: Recuperado;
  sexo: Sexo;
  tipo_recuperacion?: TipoRecuperacion;
  ubicacion: Ubicacion;
  unidad_medida: string;
}

export enum Estado {
  Fallecido = "Fallecido",
  Leve = "Leve",
  NA = "N/A",
}

export enum FuenteTipoContagio {
  Comunitaria = "Comunitaria",
  Relacionado = "Relacionado",
}

export enum Recuperado {
  Fallecido = "Fallecido",
  NA = "N/A",
  Recuperado = "Recuperado",
}

export enum Sexo {
  F = "F",
  M = "M",
}

export enum TipoRecuperacion {
  Pcr = "PCR",
  Tiempo = "Tiempo",
}

export enum Ubicacion {
  Casa = "Casa",
  Fallecido = "Fallecido",
  NA = "N/A",
}
