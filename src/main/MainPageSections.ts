import { getSection } from "./Core.js";

import type { ITiledEntry, TRangedEntries } from "../types/types.js";

const MAIN_PAGE_URI = "https://nhentai.net/" as const;

export async function getActualPopularContent(): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    MAIN_PAGE_URI,
    'div[class="container index-container index-popular"] .gallery a',
    "getActualPopularContent"
  );

  section.each((index, element) => {
    response.push({
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
    MAIN_PAGE_URI,
    'div[class="container index-container"] .gallery a',
    "getActualPopularContent"
  );

  section.each((index, element) => {
    response.push({
      index: index + 1,
      link: $(element).attr("href"),
      name: $(element).text().split("/>")[1],
      coverScr: $(element).children().attr("data-src"),
      code: ($(element).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}

export async function getMainPageByIndex(index = 1): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];
  const uri = MAIN_PAGE_URI.concat(`?page=${index}`);

  const [section, $] = await getSection(uri, 'div[class="container index-container"] .gallery a', "getMainPageByIndex");

  section.each((index, element) => {
    response.push({
      index: index + 1,
      link: $(element).attr("href"),
      name: $(element).text().split("/>")[1],
      coverScr: $(element).children().attr("data-src"),
      code: ($(element).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}

export async function getMainPageByRange(range = 5): Promise<Array<TRangedEntries>> {
  const response: Array<TRangedEntries> = [];
  for (let index = 0; index < range; index++)
    response.push({ pageIndex: index + 1, pageContent: await getMainPageByIndex(index + 1) });

  return response;
}
