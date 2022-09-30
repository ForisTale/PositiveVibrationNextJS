import {CHAPTERS} from "../../../components/HyaluronicMask";
import TableOfContent from "../../../components/TableOfContent";
import {URLS} from "../../../inventory/URLS";
import {useRouter} from "next/router";

const HyaluronicMask = () => {
  const router = useRouter();
  const page = assemblePageFromChapters(CHAPTERS, router.query.pageNumber);

  return (
    <>
      {page}
      <TableOfContent chapters={CHAPTERS} baseUrl={`${URLS.health}/hyaluronic-mask`}/>
    </>
  );
};

export function assemblePageFromChapters(chapters, pageIndex) {
  const filteredChapters = [];
  for (let chapter of chapters) {
    if (chapter.pageIndex === pageIndex) {
      filteredChapters.push(<chapter.component key={chapter.id}/>);
    }
  }
  return filteredChapters;
}

export default HyaluronicMask;