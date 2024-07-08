import { getDoujinObject } from "./Core.js";

import type { IDoujinBook } from "../types/types";

export async function getRandomCode(): Promise<IDoujinBook> {
  return getDoujinObject(`https://nhentai.net/random/`, "getRandomCode");
}


// async function getSectionedMainPage() {
//   let response = {};
//   let popArr = [];
//   let noPopArr = [];
//   let $ = await getRequest(`https://nhentai.net/`, "getSectionedMainPage");

//   $('div[class="container index-container index-popular"] .gallery a').each((i, e) => {
//     popArr.push({
//       index: i,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split(),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     noPopArr.push({
//       index: i + 5,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   response["popular"] = popArr;
//   response["noPopular"] = noPopArr;

//   return response;
// }
