const cheerio = require('cheerio');
const request = require('request-promise');

async function getRequest ( uri = "" ){
    try{
        return await request({
            uri:uri,
            transform: b => cheerio.load(b),
        });
    }catch(e){
        throw Error("Page does Not Exist or Something else happened check the page link, Check Doujin Code from URL : " + uri);
    }
}

async function getDoujinObj (  link = "" ){

    let response = {};
    let tiles = [];
    let tags = [];
    let artists = [];
    let parodies = [];
    let characters = [];
    let groups = [];
    let languague = [];
    let categories = [];
    
    let $ = await getRequest(link);

    // Parodies - 0

    $('#info-block section#tags div ').eq(0).children().children()
    .children('.name').each((i,e) => parodies.push($(e).eq(0).text()) );
    
    // Characters - 1

    $('#info-block section#tags div ').eq(1).children().children()
    .children('.name').each((i,e) => characters.push($(e).eq(0).text()) );

    // Tags - 2

    $('#info-block section#tags div ').eq(2).children().children()
    .children('.name').each((i,e) => tags.push( $(e).eq(0).text() ));
    
    // Artist Name - 3

    $('#info-block section#tags div ').eq(3).children().children()
    .children('.name').each((i,e) => artists.push($(e).eq(0).text()) );
    
    // Groups - 4

    $('#info-block section#tags div ').eq(4).children().children()
    .children('.name').each((i,e) => groups.push($(e).eq(0).text()) );
    
    // Languague - 5

    $('#info-block section#tags div ').eq(5).children().children()
    .children('.name').each((i,e) => languague.push($(e).eq(0).text()) );
    
    // Categories - 6

    $('#info-block section#tags div ').eq(6).children().children()
    .children('.name').each((i,e) => categories.push($(e).eq(0).text()) );
    

    // Tiles - final
    $('.thumbs div.thumb-container a').each( ( x , e ) =>{ 
        tiles.push({
            tileIndex: x + 1,
            linkTo: $(e).attr('href'),
            tileView: $(e).children().attr('data-src')
        })
    });

    response["name"] = $('#info-block .title').text().replace("/>","");
    response["code"] = $('#info-block h3').text();
    response["parodies"] = parodies;
    response["characters"] = characters;
    response["tags"] = tags;
    response["artists"] = artists;
    response["groups"] = groups;
    response["languague"] = languague;
    response["categories"] = categories;
    response["tiles"] = tiles;

    return response;
}

async function getCodedDoujin ( doujinNum = '000000' ){
    return getDoujinObj(`https://nhentai.net/g/${( doujinNum | 0 )}/`);
}

async function getRandomCode (){
    return getDoujinObj(`https://nhentai.net/random/`);
}

async function getMainPageContentPopular (){

    let $ = await getRequest(`https://nhentai.net/`);
    let rrArr = [];

    $('div[class="container index-container index-popular"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getMainPageContentNoPopular (){

    let $ = await getRequest(`https://nhentai.net/`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getPopularDoujinshibyPage ( pageNum = 1 ){

    let $ = await getRequest(`https://nhentai.net/category/doujinshi/popular?page=${pageNum}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getPopularMangabyPage ( pageNum = 1 ){

    let $ = await getRequest(`https://nhentai.net/category/manga/popular?page=${pageNum}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getDoujinsByArtist ( artistName = "shindol", pageNumb = 1  ){

    let $ = await getRequest(`https://nhentai.net/artist/${artistName}/?page=${pageNumb}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getDoujinsByTag ( tagName = "big-breasts", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/tag/${tagName}/?page=${pageNumb}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getDoujinsByLang ( lang = "english", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/language/${lang}/?page=${pageNumb}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
        })
    });

    return rrArr;
}

async function getDoujinsByGroup ( group = "da-hootch", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/group/${group}/?page=${pageNumb}`);
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src')
        })
    });

    return rrArr;
}

async function getDoujinDownloadLink( code = 177013 ){
    let $ = await getRequest(`https://nhentai.net/g/${ (code|0) }/`);
    let totalAmmountPages = $('.thumbs div.thumb-container a').length;
    let newLink = "https://nhentai.net" + $('.thumbs div.thumb-container a').attr('href');
    $ = await getRequest(newLink);

    return {
       uri: $('section#image-container').children().children().attr('src'),
       totalPages: totalAmmountPages,
    };
}


module.exports = {
    getCodedDoujin,
    getRandomCode,
    getMainPageContentPopular,
    getMainPageContentNoPopular,
    getPopularDoujinshibyPage,
    getPopularMangabyPage,
    getDoujinsByArtist,
    getDoujinsByTag,
    getDoujinsByLang,
    getDoujinsByGroup,
    getDoujinDownloadLink
};