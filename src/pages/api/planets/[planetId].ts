// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PlanetDetailed, PlanetByIdResponse } from "~/ts/types";
import { getPlanetList } from "./index";

type Data = {
  planet: PlanetByIdResponse;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { planetId } = req.query;

  const planets = await getPlanetList();

  const planet = planets
    .filter((element: PlanetDetailed) => element.id == Number(planetId))
    .map((element: PlanetDetailed) => {
      return {
        id: element.id,
        name: element.name,
        data: [
          {
            overview: {
              content: element.overview.content,
              source: element.overview.source,
            },
          },
          {
            structure: {
              content: element.structure.content,
              source: element.structure.source,
            },
          },
          {
            geology: {
              content: element.geology.content,
              source: element.geology.source,
            },
          },
        ],
        stats: [
          {
            rotation: element.rotation,
          },
          {
            revolution: element.revolution,
          },
          {
            radius: element.radius,
          },
          {
            temperature: element.temperature,
          },
        ],
        images: element.images,
      };
    })[0];

  res.status(200).json({ planet });
}
