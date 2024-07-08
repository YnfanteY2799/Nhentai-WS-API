import { getRequest } from "./Core";

import type { AnyNode, Cheerio, CheerioAPI } from "cheerio";
import type { ITiledEntry } from "../types/types";

async function getSection(sectionQ?: string, methodName?: string): Promise<[Cheerio<AnyNode>, CheerioAPI]> {
  const $ = await getRequest(`https://nhentai.net/`, methodName);
  const section = $(sectionQ);
  return [section, $];
}

export async function getActualPopularContent() {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
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

export async function getMainPageContent() {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection('div[class="container index-container"] .gallery a', "getActualPopularContent");

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
