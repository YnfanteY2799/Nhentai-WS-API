


export async function getDoujinDownloadLink(code = 177013) {

  let $ = await getRequest(`https://nhentai.net/g/${code | 0}/`, "getDoujinDownloadLink");
  let totalAmmountPages = $(".thumbs div.thumb-container a").length;
  let newLink = "https://nhentai.net" + $(".thumbs div.thumb-container a").attr("href");
  $ = await getRequest(newLink);

  return {
    uri: $("section#image-container").children().children().attr("src"),
    totalPages: totalAmmountPages,
  };
}


async function getDoujinTags(code = "000000") {
  let resp = [];

  let $ = await getRequest(`https://nhentai.net/g/${code}/`, "getDoujinTags");

  $("#info-block section#tags div ")
    .eq(2)
    .children()
    .children()
    .children(".name")
    .each((i, e) => resp.push($(e).eq(0).text()));

  return resp;
}
