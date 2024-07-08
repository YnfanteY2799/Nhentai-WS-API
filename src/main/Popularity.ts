const MAIN_PAGE_URI = "" as const;

// async function getPopularDoujinshibyPage(pageNum = 1) {
//   let $ = await getRequest(`https://nhentai.net/category/doujinshi/popular?page=${pageNum}`, "getPopularDoujinshibyPage");

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
