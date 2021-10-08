# Nhentai-WS-API

Description: 
Api for Nhentai, it's made with WebScraping, so when the Page Design chages this API will too ( i'mean i'll update it ),
this was build with Cheerio, Node Js, Request and Request-Promise. 

Status: Ready to implement ( Not published yet )

#Working ( Ready to Use ) Methods:

- Get Last Uploaded Mangas : { getMainPageContentNoPopular }
- Get Popular Mangas of the time : { getMainPageContentPopular }
- Get all time popular doujins : { getAllTimePopular } 
- Get any page Request like a Cheerio Obj, using this methods require Cheerio lib Knowledge : { GetRequest }
- This is a function that get the especified Doujin Data as an Object, it accepts a string ( link ) as a input ( Specified by nhentai codes ) : { GetDoujinObj }
- As it says it's just getting a random Code Data, this method does not accepts input : { GetRandomCode }
- This method gives you the doujins by artist, it accepts a string ( artist name ) and a number (page numb) ( it only gives 25 per page ) : { GetDoujinsByArtist }
- This method gives you the doujins by tag, it accepts a string ( tag name ) and a number (page numb) ( it only gives 25 per page ) : { GetDoujinsByTag }
- This method gives you the doujins by lang, it accepts a string ( lang name ) and a number (page numb) ( it only gives 25 per page ) : { GetDoujinsByLang }
- This method gives you the doujins by group, it accepts a string ( group name ) and a number (page numb) ( it only gives 25 per page ) : { GetDoujinsByGroup }
- This method allows you to get Doujin bare first page download link, and total doujin pages, it accepts a string/number as a input : { GetDoujinDownloadLink }
- This method gives you the page of popular Doujins by page, it accepts a number as a input (page numb) : { getPopularDoujinshibyPage }
- This method gives you the page of popular Manga by page, it accepts a number as a input (page numb) : { getPopularMangabyPage }

NOTES:

All methods are Async due to obvious reasons

######################################
#   ANY ISSUES PLEASE CONTACT ME     #
######################################

#NodeJs #Cheerio #API #WebScrapping
