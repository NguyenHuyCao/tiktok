import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580~c5_300x300.webp?lk3s=a5d48078&x-expires=1713146400&x-signature=Nqjb76%2F%2F2JZRft6Xq2pnC82dUwU%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span className={cx()}>Nguyen Huy</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>nguyenhuy</span>
      </div>
    </div>
  );
}

export default AccountItem;
