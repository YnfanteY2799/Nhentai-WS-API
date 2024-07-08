import { getDoujinObject, getSection } from "./Core.js";

import type { IDoujinBook, ITiledEntry } from "../types/types.js";

export async function getRandomCode(): Promise<IDoujinBook> {
  return getDoujinObject(`https://nhentai.net/random/`, "getRandomCode");
}

export async function searchDoujinByQuery(keyWord = "", page = 1): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];

  const buildedUri = keyWord.includes(",")
    ? `https://nhentai.net/search/?q=${keyWord.replace(/,+/gim, "+")}&page=${page}`
    : `https://nhentai.net/search/?q=${keyWord.replace(/ +/gim, "+")}&page=${page}`;

  const [section, $] = await getSection(
    buildedUri,
    'div[class="container index-container"] .gallery a',
    "searchDoujinByQuery"
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
