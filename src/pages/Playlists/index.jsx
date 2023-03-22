import React, { useState } from "react";

// components
import SearchInput from "../../components/SearchInput";
import PlaylistCard from "../../components/PlaylistCard";

// json data
import PlaylistFormModal from "../../components/PlaylistFormModal";
import { useDispatch, useSelector } from "react-redux";
import { removePlaylist } from "../../app/slices/playlist";

const Playlists = () => {
  const dispatch = useDispatch();
  const playListsData = useSelector(({ playlists }) => playlists);

  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const deletePlaylist = (id) => {
    dispatch(removePlaylist(id));
  };

  return (
    <>
      <PlaylistFormModal show={show} setShow={setShow} />

      <article className="py-3">
        <SearchInput
          className="mb-2 mt-1"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <h2 className="mb-4 ms-4">playLists</h2>

        <div className="container-fluid m-auto">
          <div className="row m-0">
            {playListsData
              ?.filter((track) =>
                track?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
              )
              ?.map((playlist, idx) => (
                <div className="col-md-3" key={idx}>
                  <PlaylistCard
                    deletePlaylist={deletePlaylist}
                    playlist={playlist}
                  />
                </div>
              ))}

            <div className="col-md-3">
              <PlaylistCard onClick={() => setShow(true)} added />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Playlists;
