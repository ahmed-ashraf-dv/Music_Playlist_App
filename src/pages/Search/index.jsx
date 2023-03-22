import React, { useEffect, useState } from "react";
import PlaylistFormModal from "../../components/PlaylistFormModal";

// components
import SearchInput from "../../components/SearchInput";
import TrackCard from "../../components/TrackCard";

// json data
import tracks from "../../utils/tracks.json";

const Search = () => {
  const [show, setShow] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [tracksData, setTracksData] = useState([]);

  // get songs from api
  useEffect(() => {
    setTracksData(tracks);
  }, []);

  return (
    <>
      <PlaylistFormModal show={show} setShow={setShow} />

      <article className="py-3">
        <SearchInput
          className="mb-2 mt-1"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <h2 className="mb-4 ms-4">Home Songs</h2>
        <div className="container-fluid m-auto">
          <div className="row m-0">
            {tracksData
              ?.filter((track) =>
                track?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
              )
              ?.map((track, idx) => (
                <div className="col-md-3" key={idx}>
                  <TrackCard setShowModal={() => setShow(true)} track={track} />
                </div>
              ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Search;
