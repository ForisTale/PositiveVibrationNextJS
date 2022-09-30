import classes from "./Health.module.css";
import {URLS} from "../../inventory/URLS";
import HealthCards from "../../components/HealthCards";
import {useRouter} from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <>
      {router.asPath === URLS.health ? <HealthCards/> : ""}
    </>
  );
};

export default Index;