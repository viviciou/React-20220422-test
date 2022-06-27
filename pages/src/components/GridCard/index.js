import React from "react";
import { useDispatch } from "react-redux";
import { setNotiffication } from "../../actions/NotifficationAction";
import { gridCardData } from "../../utils/data";
import "./grid-card.scss";

const GridCard = () => {
  const dispatch = useDispatch();
  const data = gridCardData();
  return (
    <div className="card-wrapper">
      {/* https://nicolakacha.coderbridge.io/2020/09/22/css-flex-grid-2/ */}
      {data &&
        data !== [] &&
        data.map((element) => {
          return (
            <div
              key={element.id}
              style={{
                padding: "0.5rem 0.25rem",
                background: "rgba(255,255,255,0.8)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.3)"
              }}
            >
              <div className="card-img" />
              <div className="card-title">{element.title}</div>
              <div className="card-desc">{element.desc}</div>
              <button
                onClick={() => {
                  dispatch(
                    setNotiffication({
                      mode: "success",
                      active: true,
                      title: "NotifyTitle",
                      message: "I am message"
                    })
                  );
                }}
              >
                {" "}
                Notify button{" "}
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default GridCard;
