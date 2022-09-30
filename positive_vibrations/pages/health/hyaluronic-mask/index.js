import {useRouter} from "next/router";
import {useEffect} from "react";

const MainPage = (props) => {
  const router = useRouter();

  useEffect(() => {
    router.replace(router.asPath + "/0");
  }, [router])

  return <>{props.children}</>
};

export default MainPage;