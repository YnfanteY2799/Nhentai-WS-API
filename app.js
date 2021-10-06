const cheerio = require('cheerio');
const request = require('request-promise');

console.clear();

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
// init();

async function getRequest (uri = ""){
    try{
        return await request({
            uri:uri,
            transform: b => cheerio.load(b),
        });
    }catch(e){
        throw Error("Page does Not Exist, Check Doujin Code from URL : " + uri);
    }
}

async function getDoujinObj(doujinNum = '000000'){

    let response = {};
    let tiles = [];
    
    const $ = await getRequest(`https://nhentai.net/g/${( doujinNum | 0 )}/`);

    $('.thumbs div.thumb-container a').each( ( x , e ) =>{ 
        tiles.push({
            tileIndex: x + 1,
            linkTo: $(e).attr('href'),
            tileView: $(e).children().attr('data-src')
        })
    });

//    console.log( $('#info-block section').eq(3));

// console.log(

    $('#info-block section#tags div').eq(2)
    .children().each((x,e) => console.log($(e).eq(0) + '\n'))
    // .html()
    // + "\n"

// )

    
    response["name"] = $('#info-block .title').text().replace("/>","");
    response["code"] = $('#info-block h3').text();
    // response["tags"] = 
    response["tiles"] = tiles;

    // console.log(response);

    return response;
}

// getDoujinObj(375591);
// getDoujinObj(177013);
// getDoujinObj();


async function getRandomCode(){

    let response = {};
    let tiles = [];

    const $ = await getRequest(`https://nhentai.net/random/`);

    return response;
} 


async function getMainPageContentPopular(){

    const $ = await getRequest(`https://nhentai.net/`);

    const rrArr = [];

    $('div[class="container index-container index-popular"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

// getMainPageContentPopular();

async function getMainPageContentNoPopular(){

    const $ = await getRequest(`https://nhentai.net/`);
    const rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}
// getMainPageContentNoPopular();

async function getAllTimePopular(){

    const $ = await getRequest(
        `https://nhentai.net/category/doujinshi/popular?page=1`
    );

    const rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

// getAllTimePopular();