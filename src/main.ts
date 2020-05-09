import { MangaReaderCrawler } from "./crawlers";

async function main() {
  const mangareder = new MangaReaderCrawler();

  const list = await mangareder.getMangaList(true);

  const location = "http://www.mangareader.net/naruto";
  const info = await mangareder.getMangaInfo(location);

  const chapters = await mangareder.getChapters(location);

  const pages = await mangareder.getPages(
    "http://www.mangareader.net/naruto/700"
  );
  console.log(pages);
}

main();
