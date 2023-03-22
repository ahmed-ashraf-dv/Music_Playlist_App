import React from "react";

// icons
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

// components
import { Dropdown, ButtonToolbar } from "rsuite";
import { addMusic } from "../../app/slices/playlist";

const TrackCard = ({ track, setShowModal }) => {
  const dispatch = useDispatch();
  const playlists = useSelector(({ playlists }) => playlists);

  const addToPlaylist = (playlistId) => {
    dispatch(addMusic({ trackId: track?.id, playlistId }));
  };

  return (
    <div
      style={{ background: "#121212", maxWidth: 250 }}
      className="border rounded-4 px-3 pb-3 mb-5 mx-auto"
    >
      <div className="dots my-2">
        <ButtonToolbar>
          <Dropdown
            renderToggle={(props) => (
              <BsThreeDots {...props} className="fs-4 cu-pointer" />
            )}
          >
            <Dropdown.Item eventKey="e-10">Make Secret</Dropdown.Item>
            <Dropdown.Menu title="Add To PlayList">
              {playlists?.map((playlist, idx) => (
                <Dropdown.Item
                  key={idx}
                  onClick={() => addToPlaylist(playlist?.id)}
                  eventKey={idx}
                >
                  {playlist?.name}
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={setShowModal} eventKey="e-2">
                + Create new playlist
              </Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item eventKey="e-20">Share</Dropdown.Item>
          </Dropdown>
        </ButtonToolbar>
      </div>

      <div
        className="img d-flex justify-conent-center align-items-center m-auto"
        style={{ width: 200 }}
      >
        <img className="w-100 h-100" src={track?.thumbnail} alt="" />
      </div>

      <div className="artist small mt-1" style={{ color: "#b3b3b3" }}>
        Artist: {track?.artist}
      </div>
      <div className="title text-center mt-2">{track?.name}</div>
    </div>
  );
};

export default TrackCard;
