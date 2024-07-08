import fs from "fs";
import { getDoujinObject } from "./main/Core.js";
import { getPopularDoujinshi } from "./main/Popularity.js";

// async function getCodedDoujin(doujinNum: string | number = "000000") {
//   console.log("Worked");
//   const returnable = await getDoujinObject(`https://nhentai.net/g/${doujinNum}/`);

//   console.log({ returnable });
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

console.log(await getPopularDoujinshi());
