import {AllPages} from "../../../components/HyaluronicMask";
import TableOfContent from "../../../components/TableOfContent";
import {URLS} from "../../../inventory/URLS";
import {useRouter} from "next/router";

const HyaluronicMask = () => {
  const router = useRouter();
  const pageIndex = getPageIndex(router.query.pageNumber);
  let Page = AllPages[pageIndex].page;

  return (
    <>
      <Page/>
      <TableOfContent allPages={AllPages} baseUrl={`${URLS.health}/hyaluronic-mask`}/>
    </>
  );
};

export function getPageIndex(pageNumber) {
  let number = parseInt(pageNumber);
  if (isNaN(number) || (number >= AllPages.length || number <= 0))
    return 0;
  return number;
}

export default HyaluronicMask;