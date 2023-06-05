import { IDoujinBook, T_Tile } from "../types/types.js";
import { CheerioAPI, load } from "cheerio";
import got from "got";

export async function getRequest(uri = "", callingMethod = "no method"): Promise<CheerioAPI> {
  try {
    return load((await got(uri)).body);
  } catch (e) {
    throw Error(
      `Page does Not Exist or Something else happened check the page link, Check Doujin Code from URL : ` +
        uri +
        "\n" +
        " Check the method call at : " +
        callingMethod
    );
  }
}

export async function getDoujinObject(link = ""): Promise<IDoujinBook> {
  const tiles: T_Tile[] = [];
  const tags: string[] = [];
  const artists: string[] = [];
  const parodies: string[] = [];
  const characters: string[] = [];
  const groups: string[] = [];
  const languague: string[] = [];
  const categories: string[] = [];

  let $ = await getRequest(link, "getDoujinObj");

  // Parodies - 0

  $("#info-block section#tags div ")
    .eq(0)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      parodies.push($(e).eq(0).text());
    });

  // Characters - 1

  $("#info-block section#tags div ")
    .eq(1)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      characters.push($(e).eq(0).text());
    });

  // Tags - 2

  $("#info-block section#tags div ")
    .eq(2)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      tags.push($(e).eq(0).text());
    });

  // Artist Name - 3

  $("#info-block section#tags div ")
    .eq(3)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      artists.push($(e).eq(0).text());
    });

  // Groups - 4

  $("#info-block section#tags div ")
    .eq(4)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      groups.push($(e).eq(0).text());
    });

  // Languague - 5

  $("#info-block section#tags div ")
    .eq(5)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      languague.push($(e).eq(0).text());
    });

  // Categories - 6

  $("#info-block section#tags div ")
    .eq(6)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      categories.push($(e).eq(0).text());
    });

  // Tiles
  $(".thumbs div.thumb-container a").each((x, e) => {
    tiles.push({
      index: x + 1,
      link: $(e).attr("href"),
      view: $(e).children().attr("data-src"),
    });
  });

  // ogImageDownloadLink -> Reintegration Needed (Looking out for Speed and reliability on images)
  // ogImageDownloadLinks = await getDoujinDownloadLinks(code);

  const response: IDoujinBook = {
    name: $("#info-block .title").text().replace("/>", ""),
    code: $("#info-block h3").text(),
    parodies,
    characters,
    tags,
    artists,
    groups,
    languague,
    categories,
    tiles,
  };

  return response;
}
