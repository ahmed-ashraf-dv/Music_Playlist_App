import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { ButtonToolbar, Dropdown } from "rsuite";
import { removeMusic } from "../../app/slices/playlist";
import tracks from "../../utils/tracks.json";

const Playlist = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(({ playlists }) => playlists);
  let { id } = useParams();

  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const removeMusicFromPlaylist = (trackId) => {
    dispatch(removeMusic({ playlistId: id, trackId }));
  };

  useEffect(() => {
    const playlist = playlists?.find((playlist) => playlist?.id == id);
    const musics = tracks?.filter((track) =>
      playlist?.musics?.includes(track?.id)
    );
    setCurrentPlaylist({ ...playlist, musics });
  }, [id, playlists]);

  return (
    <article className="py-5">
      <div className="container-fluid">
        <header className="header row mb-4">
          <div className="img col-3 flex-center">
            <img
              style={{ width: "250px" }}
              src={currentPlaylist?.thumbnail}
              alt=""
            />
          </div>

          <div className="data col-8">
            <div className="details mb-5 pb-1">
              <span className="m-0">PLAYLIST</span>
              <h2 className="display-3">{currentPlaylist?.name}</h2>

              <p className="text-muted-light">Pop Jams for the car</p>
              <p className="text-muted-light">
                Created by: <span className="text-white">Ahmed Ashraf</span>. 28
                songs, 1 hr 38 min
              </p>
            </div>

            <div className="actions d-flex justify-content-between align-items-center">
              <div className="btns d-flex justify-content-center align-items-center">
                <button className="btn btn-success me-3">PLAY</button>
                <ButtonToolbar>
                  <Dropdown
                    renderToggle={(props) => (
                      <button
                        {...props}
                        style={{ width: 40, height: 40 }}
                        className="text-white bg-transparent border rounded-circle d-flex justify-content-center align-items-center"
                      >
                        <i className="bi bi-three-dots"></i>
                      </button>
                    )}
                  >
                    <Dropdown.Item eventKey="e-10">
                      Go to playlist
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="e-21">Make Secret</Dropdown.Item>
                    <Dropdown.Item eventKey="e-22">Delete</Dropdown.Item>
                    <Dropdown.Item eventKey="e-23">Download</Dropdown.Item>
                    <Dropdown.Item eventKey="e-24">Share</Dropdown.Item>
                  </Dropdown>
                </ButtonToolbar>
              </div>

              <div className="follwoers">
                <p className="m-0 text-muted-light">FOLLOWERS</p>
                <span className="d-flex justify-content-end text-muted-light">
                  {currentPlaylist?.fllowers}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="songs ms-3">
          <div className="filter flex-center mb-3">
            <i className="bi bi-search me-1"></i>
            <input
              style={{ outline: "none" }}
              className="bg-transparent border-0 px-2 w-100 rounded-3 py-2"
              type="text"
              placeholder="Filter"
              onChange={(e) => setSearchQuery(e?.target?.value)}
            />
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", minWidth: "800px" }}>
              <thead className="border-bottom text-muted-light">
                <tr>
                  <th>TITLE</th>
                  <th>ARTIST</th>
                  <th>ALBUM</th>
                  <th>
                    <i className="bi bi-calendar-date fs-5"></i>
                  </th>
                  <th>
                    <i className="bi bi-stopwatch fs-5"></i>
                  </th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentPlaylist?.musics
                  ?.filter((track) =>
                    track?.name
                      ?.toLowerCase()
                      ?.includes(searchQuery?.toLowerCase())
                  )
                  ?.map((music, idx) => (
                    <tr key={idx}>
                      <td className="pt-3 flex-start">
                        <i className="bi bi-plus text-muted-light fs-4 me-2 flex-center cu-pointer"></i>
                        {music.name}
                      </td>
                      <td className="pt-3">{music.artist}</td>
                      <td className="pt-3">New Album</td>
                      <td className="text-muted-light pt-3">
                        {music.added_date}
                      </td>
                      <td className="text-muted-light pt-3">{music.time}</td>
                      <td className="text-muted-light pt-3">
                        <i
                          onClick={() => removeMusicFromPlaylist(music?.id)}
                          className="bi bi-trash text-danger m-auto cu-pointer"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Playlist;
