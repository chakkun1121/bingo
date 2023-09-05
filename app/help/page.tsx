import path from "path";
import { helpFileDataType } from "../../@types/helpFileDataType";
import { getHelpFileData } from "./lib/getHelpFileData";
import { getHelpPageTitles } from "./lib/getHelpPageTitles";
import Link from "next/link";

export default async function Help() {
  const helpPageTitles: string[] = await getHelpPageTitles();
  console.debug(helpPageTitles);
  const helpPagesData: helpFileDataType[] = await Promise.all(
    helpPageTitles.map(async (title) => {
      const filePath = path.join(
        process.cwd(),
        "public",
        "help",
        `${title}.md`
      );
      const data = await getHelpFileData(filePath);
      return data;
    })
  );
  return (
    <>
      <section>
        <h1>ヘルプ記事一覧</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {helpPagesData.map((data, i) => (
            <Link
              key={i}
              className="bg-green-300 rounded hover:bg-green-400 p-4 text-black hover:text-black visited:text-black"
              href={`help/${helpPageTitles[i]}`}
            >
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
