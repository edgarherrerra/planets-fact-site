export type Planet = {
  id: number;
  name: string;
};

type PlanetContentSource = {
  content: string;
  source: string;
};

type PlanetImages = {
  planet: string;
  internal: string;
  geology: string;
};

export type PlanetDetailed = {
  id: number;
  name: string;
  overview: PlanetContentSource;
  structure: PlanetContentSource;
  geology: PlanetContentSource;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: PlanetImages;
};

export type PlanetByIdResponse = {
  id: number;
  name: string;
  data: [];
  stats: [];
  images: PlanetImages;
};
