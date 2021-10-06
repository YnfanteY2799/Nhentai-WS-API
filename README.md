# Nhentai-WS-API

Api for Nhentai, it's made with cheerio, node Js, Request and Request-Promise 

#Working ( Ready to Use ) Methods:

- Get Last Uploaded Mangas : { getMainPageContentNoPopular }
- Get Popular Mangas of the time : { getMainPageContentPopular }
- Get all time popular doujins : { getAllTimePopular } 

#Working on : 

- GetDoujinObj : This is a function that get the especified Doujin Data ( Specified by nhentai codes )
- GetRandomCode : As it says it's just getting a random Code Obj

#Working on (Future methods to implement) :

- [ GetDoujinsByArtist ] : Get Doujins from a specific Artist, it will support Reference Doujin Code, and Artist name
- [ GetDoujinsByTag ] : Get Doujins from a specific tag, only String input and the ammount of Doujins to get
- [ GetDoujinsByLang ] : GetDoujins by lang, i'm actually thinking on how this can be made in a simple way
- [ GetDoujinsByGroup ] : Get Doujins from a specific group, only String input and the ammount of Doujins to get


NOTES:
- GetMainPageContentPopular only gets actual day popular mangas Not all time popular
(i actually don't know how they sort this section but besides my thougts, i'll figure it out)

- getAllTimePopular only gives you the 25 most popular doujins on the site, 
i'm plannig on making the method return a configurable ammount 
(Nevermind just saw nhentai has 10959 pages about "most popular manga", so, i'll add a configurable ammount between page 1 and 10 ( 25 - 250 ) )

#NodeJs #Cheerio #API #WebScrapping
