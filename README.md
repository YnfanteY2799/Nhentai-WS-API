# Nhentai-WS-API

Description: 
Api for Nhentai, it's made with WebScraping, so when the Page Design chages this API will too ( i'mean i'll update it ),
this was build with Cheerio, Node Js and Got. 

Status: Ready to implement ( Published to NPM )

# Working Methods :

- ### GetCodedDoujin : { Exported }
This methods looks for a Doujin based on Code

```js

import { getCodedDoujin } = require("nhentai-websrcrapping-api");

getCodedDoujin(303155).then(responseObject => responseObject);

```

- ### GetRandomCode : { Exported }

```js
import { getRandomDoujin } = require("nhentai-websrcrapping-api");

getRandomDoujin().then(responseObject => responseObject);

```

- GetDoujinsByArtist : { Exported }
- GetMainPageContentPopular : { Exported }
- GetMainPageContentNoPopular : { Exported }
- GetPopularDoujinshibyPage : { Exported }
- GetPopularMangabyPage : { Exported }
- GetDoujinsByArtist : { Exported }
- GetDoujinsByTag : { Exported }
- GetDoujinsByLang : { Exported }
- GetDoujinsByGroups : { Exported }
- GetDoujinDownloadLink : { Exported }
- GetSectionedMainPage : { Exported }
- GetDoujinTags : { Exported }
- GetIndexPage : { Exported }
- GetMainPageDoujinsPerIndex : { Exported }
- GetSimpelSearch : { Exported }
- GetRequest : { Internally }
- GetDoujinObj : { Internally }

## Upcoming features
- OOP-like class ( Working-on )
- Function for downloading doujins 
- Function for downloading doujins ( Array-like ) 
- Add tags to Searchlike methods (i've already done that but this makes methods too slow, i'm actually testing some alternatives to this issue )
- Deno version of lib, and future CLI ( Made with Rust )

## Extended Method Documentation OTG ( On the Go )

## Internally:
This means methods that are not mean to be used externally from the main API file ( Index.js ).

## Exported : 
This means methods that are mean to be used externally from the main API file ( Index.js ).

## NOTES:

All methods are Async due to **obvious reasons
(The methods are async due to the need of waiting for the fetch to give a response).



-Any Issues Feel Free to report the issue!

#NodeJs #Cheerio #API #Got #WebScrapping
