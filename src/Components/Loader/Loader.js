import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./styles.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress color="secondary" size={100} />
    </div>
  );
};

export { Loader };
