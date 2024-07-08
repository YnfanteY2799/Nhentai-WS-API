import { getRequest } from "./Core.js";
import { get } from "https";
import fs from "fs";

import type { TBookDLs } from "../types/types.js";

export async function getDoujinDownloadLinkDetails(code = 177013): Promise<TBookDLs> {
  const response: TBookDLs = { totalPages: 0, uri: "" };

  let $ = await getRequest(`https://nhentai.net/g/${code}/`, "getDoujinDownloadLink");

  response.totalPages = $(".thumbs div.thumb-container a").length;

  $ = await getRequest("https://nhentai.net".concat($(".thumbs div.thumb-container a").attr("href") ?? ""));

  response.uri = $("section#image-container").children().children().attr("src") ?? "";

  return response;
}

export async function getDoujinTags(code = "000000"): Promise<Array<string>> {
  const resp: Array<string> = [];

  const $ = await getRequest(`https://nhentai.net/g/${code}/`, "getDoujinTags");

  $("#info-block section#tags div ")
    .eq(2)
    .children()
    .children()
    .children(".name")
    .each((_, element) => {
      resp.push($(element).eq(0).text());
    });

  return resp;
}

export async function getDoujinDownloadLinks(code = "") {
  const $ = await getRequest(`https://nhentai.net/g/${code}/1/`, "getDoujinDownloadLinks");
  const totalPagesAvailable = parseInt($(".num-pages").html() ?? "");
  const response: Array<string> = [];

  for (let init = 1; init <= totalPagesAvailable; init++) {
    const $$ = await getRequest(`https://nhentai.net/g/${code}/${init}/`, "getDoujinDownloadLinks__SUB");
    response.push($$("#image-container a img").attr("src") ?? "");
  }
  return response;
}

export async function downloadDoujin(code = "379261", route = "C:\\"): Promise<void> {
  const $ = await getRequest(`https://nhentai.net/g/${code}/1/`, `DowloadDoujin ${code}`);
  const totalPagesAvailable = parseInt($(".num-pages").html() ?? "");
  const doujinName = $("head title").text().split(" - ")[0];
  const folder = `${route}${doujinName}\\`;

  if (!fs.existsSync(folder)) fs.mkdirSync(folder);

  for (let init = 1; init <= totalPagesAvailable; init++) {
    const $$ = await getRequest(`https://nhentai.net/g/${code}/${init}/`, "Download Method While executing !");
    const link = $$("#image-container a img").attr("src");
    const currFIleName = (link ?? "").split("/")[5];

    get(link ?? "", (res) => {
      const fls = fs.createWriteStream(folder + currFIleName);
      res.pipe(fls);
      fls.on("error", (error) => console.log(error));
      fls.on("finish", () => console.log(`Finished With : ${currFIleName}...`));
    });
  }
}
