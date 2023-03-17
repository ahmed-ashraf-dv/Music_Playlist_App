import React from "react";

// icons
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

// components
import { Dropdown, ButtonToolbar } from "rsuite";

// imgs
import plustIcon from "../../static/plustIcon.png";

const PlaylistCard = ({ playlist, added }) => {
  return (
    <div
      style={{ background: "#121212", maxWidth: 250 }}
      className={`border rounded-4 px-3 pb-3 mb-5 mx-auto cu-pointer`}
    >
      {!added ? (
        <div className="dots my-2">
          <ButtonToolbar>
            <Dropdown
              renderToggle={(props) => (
                <BsThreeDots {...props} className="fs-4 cu-pointer" />
              )}
            >
              <Dropdown.Item eventKey="e-10">Delete</Dropdown.Item>
              <Dropdown.Item eventKey="e-20">Share</Dropdown.Item>
            </Dropdown>
          </ButtonToolbar>
        </div>
      ) : (
        <div className="mb-2 mt-3" />
      )}
      {added ? (
        <>
          <div
            className="img d-flex justify-conent-center align-items-center m-auto mb-4 mt-4"
            style={{ width: 200 }}
          >
            <div
              className="img d-flex justify-conent-center align-items-center m-auto mb-4 mt-2"
              style={{ width: 150 }}
            >
              <img className="w-100 h-100" src={plustIcon} alt="" />
            </div>
          </div>
          <div className="title text-center mt-4 pt-2">Add new playlist</div>
        </>
      ) : (
        <Link
          to={`/playList/${playlist?.id}`}
          className="text-white text-decoration-none"
        >
          <div
            className="img d-flex justify-conent-center align-items-center m-auto"
            style={{ width: 200 }}
          >
            <img className="w-100 h-100" src={playlist?.thumbnail} alt="" />
          </div>
          <div className="title text-center mt-2">{playlist?.name}</div>
        </Link>
      )}
    </div>
  );
};

export default PlaylistCard;
