import React, { useEffect, useState } from "react";

// components
import SearchInput from "../../components/SearchInput";
import PlaylistCard from "../../components/PlaylistCard";

// json data
import playListsDataCollect from "../../utils/playlist.json";

const Playlists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playListsData, setPlayListsData] = useState([]);

  // get songs from api
  useEffect(() => {
    setPlayListsData(playListsDataCollect);
  }, []);

  return (
    <article className="py-3">
      <SearchInput
        className="mb-5 mt-1"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="container-fluid m-auto">
        <div className="row m-0">
          {playListsData?.map((playlist, idx) => (
            <div className="col-md-3" key={idx}>
              <PlaylistCard playlist={playlist} />
            </div>
          ))}

          <div className="col-md-3">
            <PlaylistCard added />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Playlists;
