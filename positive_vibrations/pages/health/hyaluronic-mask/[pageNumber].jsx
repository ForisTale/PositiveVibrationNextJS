import {PAGES} from "../../../components/HyaluronicMask";
import TableOfContent from "../../../components/layout/TableOfContent";
import {URLS} from "../../../inventory/URLS";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const HyaluronicMask = () => {
  const router = useRouter();
  const [page, setPage] = useState([]);

  useEffect(() => {
    const pageNumber = parseInt(router.query.pageNumber);
    if (pageNumber || pageNumber === 0) {
      setPage(assemblePageFromChapters(PAGES, pageNumber));
    }
  }, [router.query.pageNumber]);

  return (
    <>
      {page}
      <TableOfContent pages={PAGES} baseUrl={`${URLS.health}/hyaluronic-mask`}/>
    </>
  );
};

export function assemblePageFromChapters(pages, pageIndex) {
  const filteredChapters = [];
  if (pageIndex >= 0 && pageIndex < pages.length) {
    pages[pageIndex].map(chapter => {
      filteredChapters.push(<chapter.component key={chapter.id}/>);
    });
  }
  return filteredChapters;
}

export default HyaluronicMask;