import styles from "./styles.module.css";
import { Link, useLocation, useRouteError } from "react-router-dom";
// import { Button } from "~/components/Form";

export const ErrorPage = () => {
  const error = useRouteError();
  const location = useLocation();
  console.log(error);

  return (
    <div className={styles.container}>
      <h1>Error</h1>
    </div>
  );
};
