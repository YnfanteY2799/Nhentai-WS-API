import { getSection } from "./Core.js";

import type { ITiledEntry } from "../types/types.js";

export async function getDoujinsByTag(tagName = "big-breasts", pageNumb = 1): Promise<ITiledEntry[]> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    `https://nhentai.net/tag/${tagName}/?page=${pageNumb}`,
    'div[class="container index-container"] .gallery a',
    "getDoujinsByTag"
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

export async function getDoujinsByLang(lang = "english", pageNumb = 1): Promise<ITiledEntry[]> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    `https://nhentai.net/language/${lang}/?page=${pageNumb}`,
    'div[class="container index-container"] .gallery a',
    "getDoujinsByLang"
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

export async function getDoujinsByGroup(group = "da-hootch", pageNumb = 1): Promise<ITiledEntry[]> {
  const response: Array<ITiledEntry> = [];

  const [section, $] = await getSection(
    `https://nhentai.net/group/${group}/?page=${pageNumb}`,
    'div[class="container index-container"] .gallery a',
    "getDoujinsByGroup"
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
