# NHentai WS API

Description:
API for Nhentai, is made through the use of webscrapping, this way if the design of the page changes, the main handling of the api will also change ( i'mean i'll update it ).

This was build with Cheerio, Node Js and Got.

## Status: Working ( Pending Deep Documentation )

This API was under "Redo" by a year o so by today's date [08/07/2024], the main reason for me to remake/redo this package was essentially due to it beign originally build only in pure Js.

## Working Methods

- ### GetCodedDoujin

This methods looks for a Doujin based on Code, and returns it's full detailed content, but not it's especific download page links, this is due to the speed of collecting all the links.

```js
import { getCodedDoujin } from "nhentai-websrcrapping-api";

await getCodedDoujin('177013');
```

- ### GetRandomCode

This methods looks for a radom Doujin or Manga, and returns it's full detailed content, but not it's especific download page links, this is due to the speed of collecting all the links.

```js
import { getRandomDoujin } from "nhentai-websrcrapping-api";

await getRandomDoujin();
```

- ### GetDoujinsByArtist

This method looks for Doujins based of an Author name, for this method to work properly the author name has to be wrote as Nhentai Stores it, and have in my that " "/spaces are saved as " - ".

```js
import { getDoujinsByArtist } from "nhentai-websrcrapping-api";

await getDoujinsByArtist( "Shindol", 1 );
```

- ### GetActualPopularContent

This method looks for the actual page popular content, it returns an array of Tile Based Entries.

```js
import { getActualPopularContent }from "nhentai-websrcrapping-api";

await getActualPopularContent();
```

- ### GetMainPageContent

This method looks for the actual page latest published content, it returns an array of Tile Based Entries.

```js
import { getMainPageContent } from "nhentai-websrcrapping-api";

await getMainPageContent();
```

- ### GetMainPageByIndex

This method looks for the actual page latest published content by index ( Pagination, this can go from 1 to latest available page on Nhentai ), it returns an array of Tile Based Entries.

```js
import { getMainPageByIndex } from "nhentai-websrcrapping-api";

await getMainPageByIndex(1);
```

- ### GetMainPageByRange

This method looks for the actual page latest published content by index in a Range starting from 1 to, the number suplied , it returns an array of Tile Based Entries.

```js
import { getMainPageByRange } from "nhentai-websrcrapping-api";

await getMainPageByRange(20);
```

- ### GetDoujinsByTag

This method looks for the Tag page latest published content, it returns an array of Tile Based Entries.

```js
import { getDoujinTags } from "nhentai-websrcrapping-api";

await getDoujinTags(20);
```

- ### GetDoujinsByLang

This method looks for the Language page latest published content, it returns an array of Tile Based Entries.

```js
import { getDoujinsByLang } from "nhentai-websrcrapping-api";

await getDoujinsByLang(20);
```

- ### GetDoujinsByGroups

- ### GetDoujinDownloadLink

- ### GetSectionedMainPage

- ### GetDoujinTags

- ### GetIndexPage

- ### GetMainPageDoujinsPerIndex

- ### GetSimpelSearch

- ### GetDoujinDownloadLinks

- ### DownloadDoujin

- ### GetRequest

- ### GetDoujinObj

## Upcoming features

- Function for downloading doujins.
- Function for downloading doujins ( Array-like ).
- Add tags to Searchlike methods (i've already done that but this makes methods too slow, i'm actually testing some alternatives to this issue )
- Deno version of lib, and future CLI ( Made with Rust )

## NOTES

All methods are Async due to **obvious reasons
(The methods are async due to the need of waiting for the fetch to give a response).

- Any Issues Feel Free to report the issue!

### #NodeJs #Cheerio #API #Got #WebScrapping
