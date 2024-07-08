import fs from "fs";
import { get } from "https";
import { getDoujinObject, getRequest } from "./main/Core.js";

async function getCodedDoujin(doujinNum: string | number = "000000") {
  const returnable = await getDoujinObject(`https://nhentai.net/g/${doujinNum}/`);

  console.log({ returnable });
}

// async function getRandomCode() {
//   return getDoujinObject(`https://nhentai.net/random/`, "getRandomCode");
// }

// async function getMainPageContentPopular() {
//   let $ = await getRequest(`https://nhentai.net/`, "getMainPageContentPopular");
//   let rrArr = [];

//   $('div[class="container index-container index-popular"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getMainPageContentNoPopular() {
//   let $ = await getRequest(`https://nhentai.net/`, "getMainPageContentNoPopular");
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getPopularDoujinshibyPage(pageNum = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/category/doujinshi/popular?page=${pageNum}`,
//     "getPopularDoujinshibyPage"
//   );

//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getPopularMangabyPage(pageNum = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/category/manga/popular?page=${pageNum}`,
//     "getPopularMangabyPage"
//   );
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getDoujinsByArtist(artistName = "shindol", pageNumb = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/artist/${artistName}/?page=${pageNumb}`,
//     "getDoujinsByArtist"
//   );
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getDoujinsByTag(tagName = "big-breasts", pageNumb = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/tag/${tagName}/?page=${pageNumb}`,
//     "getDoujinsByTag"
//   );
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getDoujinsByLang(lang = "english", pageNumb = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/language/${lang}/?page=${pageNumb}`,
//     "getDoujinsByLang"
//   );
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getDoujinsByGroup(group = "da-hootch", pageNumb = 1) {
//   let $ = await getRequest(
//     `https://nhentai.net/group/${group}/?page=${pageNumb}`,
//     "getDoujinsByGroup"
//   );
//   let rrArr = [];

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     rrArr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return rrArr;
// }

// async function getDoujinDownloadLink(code = 177013) {
//   let $ = await getRequest(`https://nhentai.net/g/${code | 0}/`, "getDoujinDownloadLink");
//   let totalAmmountPages = $(".thumbs div.thumb-container a").length;
//   let newLink = "https://nhentai.net" + $(".thumbs div.thumb-container a").attr("href");
//   $ = await getRequest(newLink);

//   return {
//     uri: $("section#image-container").children().children().attr("src"),
//     totalPages: totalAmmountPages,
//   };
// }

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

// async function getDoujinTags(code = "000000") {
//   let resp = [];

//   let $ = await getRequest(`https://nhentai.net/g/${code}/`, "getDoujinTags");

//   $("#info-block section#tags div ")
//     .eq(2)
//     .children()
//     .children()
//     .children(".name")
//     .each((i, e) => resp.push($(e).eq(0).text()));

//   return resp;
// }

// async function getIndexPage(index = 1) {
//   let arr = [];

//   let $ = await getRequest(`https://nhentai.net/?page=${index}`, "getIndexPage");

//   $('div[class="container index-container"] .gallery a').each(async (i, e) => {
//     arr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return arr;
// }

// async function getMainPageDoujinsPerIndex(index = 5) {
//   let rrs = [];

//   let i = 0;
//   while (i < index) {
//     let rr = await getIndexPage(i + 1);
//     rrs = [...rrs, rr];

//     i++;
//   }

//   return rrs;
// }

// async function getSimpelSearch(keyWord = "") {
//   let arr = [];

//   let $ = await getRequest(
//     `https://nhentai.net/search/?q=${keyWord.replace(/ +/gim, "+")}`,
//     "getSimpleSearch"
//   );

//   $('div[class="container index-container"] .gallery a').each((i, e) => {
//     arr.push({
//       index: i + 1,
//       name: $(e).text().split("/>")[1],
//       link: $(e).attr("href"),
//       coverScr: $(e).children().attr("data-src"),
//       code: $(e).attr("href").split("/")[2],
//     });
//   });

//   return arr;
// }

// async function getDoujinDownloadLinks(code = "379261", totalPages = 0) {
//   let $ = null;
//   let totalPagesAvailable = null;
//   if (totalPages === 0) {
//     $ = await getRequest(
//       `https://nhentai.net/g/${code | 0}/1/`,
//       "getDoujinDownloadLinks"
//     );
//     totalPagesAvailable = $(".num-pages").html().toString() | 0;
//   } else {
//     totalPagesAvailable = totalPages;
//   }

//   let initialPage = 1;
//   let respArr = [];

//   while (initialPage <= totalPagesAvailable) {
//     const $$ = await getRequest(
//       `https://nhentai.net/g/${code | 0}/${initialPage}/`,
//       "getDoujinDownloadLinks"
//     );
//     respArr = [...respArr, $$("#image-container a img").attr("src")];
//     initialPage++;
//   }

//   return respArr;
// }

// async function downloadDoujin(code = "379261", route = "C:\\") {
//   const $ = await getRequest(`https://nhentai.net/g/${code | 0}/1/`, "Download Method!");
//   const totalPagesAvailable = $(".num-pages").html().toString() | 0;
//   let doujinName = $("head title").text().split(" - ")[0];
//   let initialPage = 1;
//   let respArr = [];
//   let folder = `${route}${doujinName}\\`;

//   if (!fs.existsSync(folder)) {
//     fs.mkdirSync(folder);
//   }

//   while (initialPage <= totalPagesAvailable) {
//     const $$ = await getRequest(
//       `https://nhentai.net/g/${code | 0}/${initialPage}/`,
//       "Download Method While execution !"
//     );
//     let link = $$("#image-container a img").attr("src");
//     let currFIleName = link.split("/")[5];
//     respArr = [...respArr, link];

//     get(link, (res) => {
//       const fls = fs.createWriteStream(folder + currFIleName);
//       res.pipe(fls);
//       fls.on("error", (error) => console.log(error));
//       fls.on("finish", () => console.log(`Finished With : ${currFIleName}...`));
//     });
//     initialPage++;
//   }
// }

getCodedDoujin(177013);
