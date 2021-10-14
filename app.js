import cheerio from 'cheerio';
import got from 'got';

async function getRequest ( uri = "", callingMethod = 'no method' ){
    try{
        return cheerio.load(
            (await got(uri)).body
        );
    }catch(e){
        throw Error(
            `Page does Not Exist or Something else happened check the page link, Check Doujin Code from URL : ` 
            + uri + "\n" + " Check the method call at : " + callingMethod
        );
    }
}

async function getDoujinObj (  link = "", methodName = "getDoujinObj" ){

    let response = {};
    let tiles = [];
    let ogImageDownloadLinks = [];
    let tags = [];
    let artists = [];
    let parodies = [];
    let characters = [];
    let groups = [];
    let languague = [];
    let categories = [];
    
    let $ = await getRequest( link, methodName );

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
    

    // Tiles
    $('.thumbs div.thumb-container a').each( ( x , e ) =>{ 
        tiles.push({
            tileIndex: x + 1,
            linkTo: $(e).attr('href'),
            tileView: $(e).children().attr('data-src')
        })
    });

    // ogImageDownloadLink - final
    for(let i = 0; i < tiles.length; i++){
        ogImageDownloadLinks.push(
            `https://i.nhentai.net/galleries/${$('.thumbs div.thumb-container a').eq(0).text().split("/")[4]}/${i + 1}.jpg`
        );
    }

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
    response["ogImages"] = ogImageDownloadLinks;

    return response;
}

export async function getCodedDoujin ( doujinNum = '000000' ){
    return getDoujinObj(`https://nhentai.net/g/${( doujinNum | 0 )}/`, "getCodedDoujin");
}

export async function getRandomCode (){
    return getDoujinObj(`https://nhentai.net/random/`, "getRandomCode");
}

export async function getMainPageContentPopular (){

    let $ = await getRequest(`https://nhentai.net/`,"getMainPageContentPopular");
    let rrArr = [];

    $('div[class="container index-container index-popular"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getMainPageContentNoPopular (){

    let $ = await getRequest(`https://nhentai.net/`, "getMainPageContentNoPopular");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getPopularDoujinshibyPage ( pageNum = 1 ){

    let $ = await getRequest(
        `https://nhentai.net/category/doujinshi/popular?page=${pageNum}`, 
        "getPopularDoujinshibyPage"
    );

    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getPopularMangabyPage ( pageNum = 1 ){

    let $ = await getRequest(`https://nhentai.net/category/manga/popular?page=${pageNum}`, "getPopularMangabyPage");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getDoujinsByArtist ( artistName = "shindol", pageNumb = 1  ){

    let $ = await getRequest(`https://nhentai.net/artist/${artistName}/?page=${pageNumb}`, "getDoujinsByArtist");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getDoujinsByTag ( tagName = "big-breasts", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/tag/${tagName}/?page=${pageNumb}`, "getDoujinsByTag");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getDoujinsByLang ( lang = "english", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/language/${lang}/?page=${pageNumb}`, "getDoujinsByLang");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getDoujinsByGroup ( group = "da-hootch", pageNumb = 1 ){

    let $ = await getRequest(`https://nhentai.net/group/${group}/?page=${pageNumb}`, "getDoujinsByGroup");
    let rrArr = [];

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        rrArr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return rrArr;
}

export async function getDoujinDownloadLink( code = 177013 ){
    let $ = await getRequest(`https://nhentai.net/g/${ (code|0) }/`, "getDoujinDownloadLink");
    let totalAmmountPages = $('.thumbs div.thumb-container a').length;
    let newLink = "https://nhentai.net" + $('.thumbs div.thumb-container a').attr('href');
    $ = await getRequest(newLink);

    return {
       uri: $('section#image-container').children().children().attr('src'),
       totalPages: totalAmmountPages,
    };
}

export async function getSectionedMainPage (){

    let response = {};
    let popArr = [];
    let noPopArr = [];
    let $ = await getRequest(`https://nhentai.net/`, "getSectionedMainPage");

    $('div[class="container index-container index-popular"] .gallery a')
    .each( (i,e) => {
        popArr.push({
            index: i,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split(),
            code:$(e).attr('href').split("/")[2],
        })
    });

    $('div[class="container index-container"] .gallery a')
    .each( (i,e) => {
        noPopArr.push({
            index: i + 5,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    response["popular"] = popArr;
    response["noPopular"] = noPopArr;

    return response;
}

export async function getDoujinTags( code = "000000" ){

    let resp = [];

    let $ = await getRequest(`https://nhentai.net/g/${code}/`, "getDoujinTags");

    $('#info-block section#tags div ').eq(2).children().children()
    .children('.name').each((i,e) => resp.push( $(e).eq(0).text() ));

    return resp;

}

export async function getIndexPage(index = 0){
    let arr = [];

    let $ = await getRequest(`https://nhentai.net/?page=${index}`, "getIndexPage");

    $('div[class="container index-container"] .gallery a')
    .each((i,e) => {
        arr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });


    
    return arr;
}

export async function getMainPageDoujinsPerIndex(index = 5){

    let rrs = [];

    let i = 0;
    while(i < index){

        let rr = await indexedPage(i + 1);
        rrs = [...rrs,rr];
        
        i++;
    }

    return rrs;
}

export async function getSimpelSearch(keyWord = ""){

    let arr = [];

    let $ = await getRequest(`https://nhentai.net/search/?q=${keyWord.replace(/ +/gmi, "+")}`, "getSimpleSearch");

    $('div[class="container index-container"] .gallery a')
    .each((i,e) => {
        arr.push({
            index: i + 1,
            name: $(e).text().split("/>")[1],
            link: $(e).attr('href'),
            coverScr: $(e).children().attr('data-src'),
            code:$(e).attr('href').split("/")[2],
        })
    });

    return arr;
}


const NhenApi = {

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
    getDoujinDownloadLink,
    getSectionedMainPage,
    getDoujinTags,
    getIndexPage,
    getMainPageDoujinsPerIndex,
    getSimpelSearch

};

export default NhenApi;