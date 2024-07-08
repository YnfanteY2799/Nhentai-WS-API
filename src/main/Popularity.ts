import { getSection } from "../main/Core.js";

import type { ITiledEntry } from "../types/types";

const MAIN_PAGE_URI = `https://nhentai.net/category/XXXXX/popular` as const;

export async function getPopularDoujinshibyPage(pageNum = 1): Promise<Array<ITiledEntry>> {
  const response: Array<ITiledEntry> = [];
  const totalURI = MAIN_PAGE_URI.replace("XXXXX", "doujinshi").concat(`?page=${pageNum}`);

  const [section, $] = await getSection(
    totalURI,
    'div[class="container index-container"] .gallery a',
    "getPopularDoujinshibyPage"
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

async function getPopularMangabyPage(pageNum = 1) {
  //     `https://nhentai.net/category/manga/popular?page=${pageNum}`,
  //     "getPopularMangabyPage"
  // 'div[class="container index-container"] .gallery a'
}
