// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Planet } from "~/ts/types";

type Data = {
  planets: Planet[];
};

export const getPlanetList = async () => {
  const response = await fetch(
    "https://mocki.io/v1/ad7f475b-86e3-4d64-b2cd-8755bba41bb7"
  );
  const planets = await response.json();
  return planets;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getPlanetList();

  const parsedData = data.map((planet: Planet) => {
    return { id: planet.id, name: planet.name };
  });

  res.status(200).json({ planets: parsedData });
}
