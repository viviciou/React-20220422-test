import React from "react";
import classnames from "classnames";
import "./notification.scss";
import closeSvg from "../../images/close.svg";

const NotifficationDefault = ({
  mode,
  isBackdrop,
  isActive,
  isTimeout,
  title,
  message,
  timeout,
  closeEvent
}) => {
  const checkActive = classnames({
    active: isActive === true
  });
  const checkBackdrop = classnames({
    backdrop: isBackdrop === true
  });
  const checkMode = classnames({
    info: mode === "info",
    success: mode === "success",
    warning: mode === "warning",
    danger: mode === "danger"
  });
  return (
    <div className={`notification ${checkActive}`}>
      <div
        className={`notification-wrap ${checkBackdrop}`}
        onClick={closeEvent}
      />
      <div className={`notification-box ${checkMode}`}>
        <div className="notification-close" onClick={closeEvent}>
          <img alt="x" src={closeSvg} width="10" height="10" />
        </div>
        <div className="notification-box-title">{title}</div>
        <div className="notification-box-paragraph">
          {message}
          {/* - paragraph paragraph paragraph paragraph */}
        </div>
        <div className="notification-box-footer">
          <div className="notification-box-button" onClick={closeEvent}>
            確認
          </div>
        </div>
      </div>
    </div>
  );
};
NotifficationDefault.defaultProps = {
  mode: "info",
  isBackdrop: true,
  isActive: false,
  isTimeout: false,
  title: "",
  message: "",
  timeout: 0,
  closeEvent: () => {}
};
export default NotifficationDefault;
