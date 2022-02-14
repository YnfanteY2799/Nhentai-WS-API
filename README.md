# Nhentai-WS-API

Description:
Api for Nhentai, it's made with WebScraping, so when the Page Design chages this API will too ( i'mean i'll update it ),
this was build with Cheerio, Node Js and Got.

Status: Ready to implement ( Published to NPM )

## Working Methods

- ### GetCodedDoujin : { Exported }

This methods looks for a Doujin based on Code, on version 1.0.8, the speed of method has drastically changed due to bugfix of bad download links this was happening due to me hardcoding ".jpg" at the image sources, this was fixed.

```js

import { getCodedDoujin } = require("nhentai-websrcrapping-api");

getCodedDoujin(303155 || '177013').then(responseObject => responseObject);

```

- ### GetRandomCode : { Exported }

```js
import { getRandomDoujin } = require("nhentai-websrcrapping-api");

getRandomDoujin().then(responseObject => responseObject);

```

- GetDoujinsByArtist : { Exported }

```js
import { getDoujinsByArtist } = require("nhentai-websrcrapping-api");

getDoujinsByArtist("Shindol").then(responseObject => responseObject );

```

- GetMainPageContentPopular : { Exported }

```js
import { getMainPageContentPopular } = require("nhentai-websrcrapping-api");

getMainPageContentPopular().then(responseObject => responseObject.map(x => console.log(x)) );

```

- GetMainPageContentNoPopular : { Exported }
- GetPopularDoujinshibyPage : { Exported }
- GetPopularMangabyPage : { Exported }
- GetDoujinsByTag : { Exported }
- GetDoujinsByLang : { Exported }
- GetDoujinsByGroups : { Exported }
- GetDoujinDownloadLink : { Exported }
- GetSectionedMainPage : { Exported }
- GetDoujinTags : { Exported }
- GetIndexPage : { Exported }
- GetMainPageDoujinsPerIndex : { Exported }
- GetSimpelSearch : { Exported }

- GetDoujinDownloadLinks : { Exported }

```js
import { getDoujinDownloadLinks } = require("nhentai-websrcrapping-api");

getDoujinDownloadLinks().then(responseObject => responseObject.map(x => console.log(x)) );

```

- DownloadDoujin : { Exported }

```js
import { downloadDoujin } = require("nhentai-websrcrapping-api");
// downloadDoujin(/*Doujin Code*/, /*Doujin route*/);
downloadDoujin(1707013, "C:\\");

```

- GetRequest : { Internally }
- GetDoujinObj : { Internally }

- ## Working Class

    NhentaiBook
    class with only one getter , one setter, and a full deatils method, constructor accepts Doujin code String or Num -- Feel Free to use it how ever you like.

## Upcoming features

- Function for downloading doujins.
- Function for downloading doujins ( Array-like ).
- Add tags to Searchlike methods (i've already done that but this makes methods too slow, i'm actually testing some alternatives to this issue )
- Deno version of lib, and future CLI ( Made with Rust )

## Extended Method Documentation OTG ( On the Go )

## Internally

This means methods that are not mean to be used externally from the main API file ( Index.js ).

## Exported

This means methods that are mean to be used externally from the main API file ( Index.js ).

## NOTES

All methods are Async due to **obvious reasons
(The methods are async due to the need of waiting for the fetch to give a response).

-Any Issues Feel Free to report the issue!

## Disabled Methods

{ getDoujinDownloadLinks } -> It's disabled on Complex data fetches Due to speed issues, it can be used by itself, but calling Doujin properties wont call it

### NodeJs #Cheerio #API #Got #WebScrapping
