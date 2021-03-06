import React from "react";
import PropTypes from "prop-types";
import styles from "./LoadMoreButton.module.css";

const LoadMoreButton = ({ onClick }) => (
  <button type="button" onClick={onClick} className={styles.LoadMoreButton}>
    Load more...
  </button>
);

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;