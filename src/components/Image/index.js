import PropTypes from "prop-types";
import { useState, forwardRef } from "react";
import images from "~/assets/images";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      className,
      fallback: customFallback = images.noImage,
      alt,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  classNam: PropTypes.string,
  fallback: PropTypes.string,
};

export default Image;
