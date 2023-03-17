import React, { useEffect, useState } from "react";

// components
import SearchInput from "../../components/SearchInput";
import TrackCard from "../../components/TrackCard";

// json data
import tracks from "../../utils/tracks.json";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tracksData, setTracksData] = useState([]);

  // get songs from api
  useEffect(() => {
    setTracksData(tracks);
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
          {tracksData?.map((track, idx) => (
            <div className="col-md-3" key={idx}>
              <TrackCard track={track} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Search;
