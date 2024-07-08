import { CheerioAPI } from "cheerio";
import { getRequest } from "./Core";

async function getSection(section?: string, methodName?: string): Promise<CheerioAPI> {
  const $ = await getRequest(`https://nhentai.net/`, "getMainPageContentPopular");
  return $('div[class="container index-container index-popular"] .gallery a');
}

export async function getMainPageContentPopular() {
  const response: Array<any> = [];
  const sectionCallResponse = await getSection(
    'div[class="container index-container index-popular"] .gallery a',
    "getMainPageContentPopular"
  ).each((i, e) => {
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

async function getMainPageContentNoPopular() {
  let $ = await getRequest(`https://nhentai.net/`, "getMainPageContentNoPopular");
  let rrArr = [];

  $('div[class="container index-container"] .gallery a').each((i, e) => {
    rrArr.push({
      index: i + 1,
      name: $(e).text().split("/>")[1],
      link: $(e).attr("href"),
      coverScr: $(e).children().attr("data-src"),
      code: $(e).attr("href").split("/")[2],
    });
  });

  return rrArr;
}
