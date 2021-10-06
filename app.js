const cheerio = require('cheerio');
const request = require('request-promise');


// Testing Method
async function init() {
    const $ = await request({
       uri:'http://quotes.toscrape.com/',
       transform: b => cheerio.load(b),
    });


    const title = $('title').html();
    const quotes = $('.quote span.text');
    
    console.log(title);

    quotes.each((x,xe) => {

        console.log($(xe).text())

    })




    // console.log(quotesBlock.parent().next().html());
}

console.clear();
// init();

async function getDoujinObj(doujinNum = 375563){

    let response = {};
    let tiles = [];

    const resp = await request({
        uri:`https://nhentai.net/g/${doujinNum}/`,
        transform: b => cheerio.load(b),
    });

    resp('.thumbs div.thumb-container a').each( ( x , e ) =>{ 
        tiles.push({
            tileIndex: x,
            linkTo: resp(e).attr('href'),
            tileView: resp(e).children().attr('data-src')
        })
    });




    resp('#info-block section#tags div[class="tag-container field-name"] span')
    .each((x,e) => console.log(resp(e).html()))



    
    response["name"] = resp('#info-block .title').text().replace("/>","");
    response["code"] = resp('#info-block h3').text();
    // response["tags"] = 
    response["tiles"] = tiles;

    return response;
}

console.clear();
// getDoujinObj(375591);
getDoujinObj(177013);


async function getMainPageContentPopular(){

    const mainRs = await request({
        uri:`https://nhentai.net/`,
        transform:b => cheerio.load(b),
    });

    const rrArr = [];

    mainRs('div[class="container index-container index-popular"] .gallery')
    .each( (i,e) => {
        rrArr.push({
            index: i,
            name: mainRs(e).text().split("/>")[1],
            link: mainRs(e).attr('href'),
            coverScr: mainRs(e).children().attr('data-src')
        })
    });

    return rrArr;

}

console.clear();
// getMainPageContentPopular();

async function getMainPageContentNoPopular(){

    const mainRs = await request({
        uri:`https://nhentai.net/`,
        transform:b => cheerio.load(b),
    });

    const rrArr = [];

    mainRs('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i,
            name: mainRs(e).text().split("/>")[1],
            link: mainRs(e).attr('href'),
            coverScr: mainRs(e).children().attr('data-src')
        })
    });

    return rrArr;
}

console.clear();
// getMainPageContentNoPopular();

