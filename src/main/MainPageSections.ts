import { getRequest } from "./Core";

import type { AnyNode, Cheerio, CheerioAPI } from "cheerio";

async function getSection(sectionQ?: string, methodName?: string): Promise<[Cheerio<AnyNode>, CheerioAPI]> {
  const $ = await getRequest(`https://nhentai.net/`, methodName);
  const section = $(sectionQ);
  return [section, $];
}

export async function getActualPopularContent() {
  const response: Array<any> = [];

  const [section, $] = await getSection(
    'div[class="container index-container index-popular"] .gallery a',
    "getActualPopularContent"
  );

  section.each((i, e) => {
    response.push({
      index: i + 1,
      link: $(e).attr("href"),
      name: $(e).text().split("/>")[1],
      coverScr: $(e).children().attr("data-src"),
      code: ($(e).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}

export async function getMainPageContent() {
  const response: Array<any> = [];

  const [section, $] = await getSection('div[class="container index-container"] .gallery a', "getActualPopularContent");

  section.each((i, e) => {
    response.push({
      index: i + 1,
      link: $(e).attr("href"),
      name: $(e).text().split("/>")[1],
      coverScr: $(e).children().attr("data-src"),
      code: ($(e).attr("href") ?? "").split("/")[2],
    });
  });

  return response;
}
