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
        tabs: [
          {
            id: 1,
            name: "Overview",
            data: {
              content: element.overview.content,
              source: element.overview.source,
            },
          },
          {
            id: 2,
            name: "Structure Internal",
            data: {
              content: element.structure.content,
              source: element.structure.source,
            },
          },
          {
            id: 3,
            name: "Surface Geology",
            data: {
              content: element.geology.content,
              source: element.geology.source,
            },
          },
        ],
        stats: [
          {
            id: 1,
            name: "Rotation Time",
            data: element.rotation,
          },
          {
            id: 2,
            name: "Revolution Time",
            data: element.revolution,
          },
          {
            id: 3,
            name: "Radius",
            data: element.radius,
          },
          {
            id: 4,
            name: "Average Temp.",
            data: element.temperature,
          },
        ],
        images: element.images,
      };
    })[0];

  res.status(200).json({ planet });
}
