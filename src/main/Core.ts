import { type AnyNode, type Cheerio, type CheerioAPI, load } from "cheerio";
import got from "got";

import type { IDoujinBook } from "../types/types.js";

export async function getRequest(uri = "", callingMethod = "no method"): Promise<CheerioAPI> {
  try {
    return load((await got(uri)).body);
  } catch (e) {
    throw Error(
      `Page does Not Exist or Something else happened check the page link, Check Doujin Code from URL : ${uri} \n Check the method call at : ${callingMethod}`
    );
  }
}

export async function getSection(uri = "", sectionQ?: string, methodName?: string): Promise<[Cheerio<AnyNode>, CheerioAPI]> {
  const $ = await getRequest(uri, methodName);
  const section = $(sectionQ);
  return [section, $];
}

export async function getDoujinObject(link = "", methodCalled = "getDoujinObject"): Promise<IDoujinBook> {
  const doujinDescription: IDoujinBook = {
    tags: [],
    name: "",
    code: "",
    tiles: [],
    groups: [],
    artists: [],
    parodies: [],
    languague: [],
    characters: [],
    categories: [],
  };

  const $ = await getRequest(link, methodCalled);

  // Basic Data [Name, Code]
  doujinDescription.name = $("#info-block .title").text().replace("/>", "");
  doujinDescription.code = $("#info-block h3").text();

  // Parodies - 0

  $("#info-block section#tags div ")
    .eq(0)
    .children()
    .children()
    .children(".name")
    .each((_, e): void => {
      doujinDescription.parodies.push($(e).eq(0).text());
    });

  // Characters - 1

  $("#info-block section#tags div ")
    .eq(1)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.characters.push($(e).eq(0).text());
    });

  // Tags - 2

  $("#info-block section#tags div ")
    .eq(2)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.tags.push($(e).eq(0).text());
    });

  // Artist Name - 3

  $("#info-block section#tags div ")
    .eq(3)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.artists.push($(e).eq(0).text());
    });

  // Groups - 4

  $("#info-block section#tags div ")
    .eq(4)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.groups.push($(e).eq(0).text());
    });

  // Languague - 5

  $("#info-block section#tags div ")
    .eq(5)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.languague.push($(e).eq(0).text());
    });

  // Categories - 6

  $("#info-block section#tags div ")
    .eq(6)
    .children()
    .children()
    .children(".name")
    .each((_, e) => {
      doujinDescription.categories.push($(e).eq(0).text());
    });

  // Tiles
  $(".thumbs div.thumb-container a").each((index, e) => {
    doujinDescription.tiles.push({
      index: index + 1,
      link: $(e).attr("href"),
      view: $(e).children().attr("data-src"),
    });
  });

  // ogImageDownloadLink -> Reintegration Needed (Looking out for Speed and reliability on images)
  // ogImageDownloadLinks = await getDoujinDownloadLinks(code);

  return doujinDescription;
}
