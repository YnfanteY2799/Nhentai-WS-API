import { getSection } from "./Core";

import type { ITiledEntry } from "../types/types";

export async function getActualPopularContent(): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    `https://nhentai.net/`,
    'div[class="container index-container index-popular"] .gallery a',
    "getActualPopularContent"
  );

  section.each((index, element) => {
    response.concat({
      index: index + 1,
      link: $(element).attr("href"),
      name: $(element).text().split("/>")[1],
      coverScr: $(element).children().attr("data-src"),
      code: ($(element).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}

export async function getMainPageContent(): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    `https://nhentai.net/`,
    'div[class="container index-container"] .gallery a',
    "getActualPopularContent"
  );

  section.each((index, element) => {
    response.concat({
      index: index + 1,
      link: $(element).attr("href"),
      name: $(element).text().split("/>")[1],
      coverScr: $(element).children().attr("data-src"),
      code: ($(element).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}
