import {PAGES} from "../../../components/HyaluronicMask";
import TableOfContent from "../../../components/layout/TableOfContent";
import {URLS} from "../../../inventory/URLS";
import {useRouter} from "next/router";

const HyaluronicMask = () => {
  const router = useRouter();
  const page = assemblePageFromChapters(PAGES, router.query.pageNumber);

  return (
    <>
      {page}
      <TableOfContent pages={PAGES} baseUrl={`${URLS.health}/hyaluronic-mask`}/>
    </>
  );
};

export function assemblePageFromChapters(chapters, pageIndex) {
  const filteredChapters = [];
  if (pageIndex && chapters) {
    for (let chapter of chapters[parseInt(pageIndex)]) {
      filteredChapters.push(<chapter.component key={chapter.id}/>);
    }
  }
  return filteredChapters;
}

export default HyaluronicMask;