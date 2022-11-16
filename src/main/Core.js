import { load } from "cheerio";

export async function getRequest(uri = "", callingMethod = "no method") {
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

export async function getDoujinObject(link = "") {
  const code = link.split("/")[4];

  let response = {};
  let tiles = [];
  let tags = [];
  let artists = [];
  let parodies = [];
  let characters = [];
  let groups = [];
  let languague = [];
  let categories = [];

  let $ = await getRequest(link, "getDoujinObj");

  // Parodies - 0

  $("#info-block section#tags div ")
    .eq(0)
    .children()
    .children()
    .children(".name")
    .each((i, e) => parodies.push($(e).eq(0).text()));

  // Characters - 1

  $("#info-block section#tags div ")
    .eq(1)
    .children()
    .children()
    .children(".name")
    .each((i, e) => characters.push($(e).eq(0).text()));

  // Tags - 2

  $("#info-block section#tags div ")
    .eq(2)
    .children()
    .children()
    .children(".name")
    .each((i, e) => tags.push($(e).eq(0).text()));

  // Artist Name - 3

  $("#info-block section#tags div ")
    .eq(3)
    .children()
    .children()
    .children(".name")
    .each((i, e) => artists.push($(e).eq(0).text()));

  // Groups - 4

  $("#info-block section#tags div ")
    .eq(4)
    .children()
    .children()
    .children(".name")
    .each((i, e) => groups.push($(e).eq(0).text()));

  // Languague - 5

  $("#info-block section#tags div ")
    .eq(5)
    .children()
    .children()
    .children(".name")
    .each((i, e) => languague.push($(e).eq(0).text()));

  // Categories - 6

  $("#info-block section#tags div ")
    .eq(6)
    .children()
    .children()
    .children(".name")
    .each((i, e) => categories.push($(e).eq(0).text()));

  // Tiles
  $(".thumbs div.thumb-container a").each((x, e) => {
    tiles.push({
      tileIndex: x + 1,
      linkTo: $(e).attr("href"),
      tileView: $(e).children().attr("data-src"),
    });
  });

  // ogImageDownloadLink -> Reintegration Needed (Looking out for Speed and reliability on images)
  // ogImageDownloadLinks = await getDoujinDownloadLinks(code);

  response["name"] = $("#info-block .title").text().replace("/>", "");
  response["code"] = $("#info-block h3").text();
  response["parodies"] = parodies;
  response["characters"] = characters;
  response["tags"] = tags;
  response["artists"] = artists;
  response["groups"] = groups;
  response["languague"] = languague;
  response["categories"] = categories;
  response["tiles"] = tiles;
  // response["ogImages"] = ogImageDownloadLinks;

  return response;
}

// Test Method
export async function GotCall() {
  return await await got(`https://nhentai.net/g/177013`);
}
