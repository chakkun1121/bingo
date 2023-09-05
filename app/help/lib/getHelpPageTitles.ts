import path from "path";
import fsPromises from "fs/promises";

/**
 * /public/help/ ディレクトリにあるファイル名の一覧を取得する
 */
export async function getHelpPageTitles(): Promise<string[]> {
  return fsPromises
    .readdir(path.join(process.cwd(), "public", "help"))
    .then((files) => files.map((file) => file.replace(".md", "")));
}
