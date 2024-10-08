import { useState } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";

const SearchBox = ({ label = "", onSelect }) => {
  // Default value for label
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json`,
        {
          params: {
            access_token:
              "pk.eyJ1IjoidGFydW4yNTA2IiwiYSI6ImNsaDdwbzlvZTAwdWkzcW8xM3Bib3k4bzIifQ.KY0XQwjRpgkn7KYvdaXDbQ",
            country: "AU",
            autocomplete: true,
            limit: 5,
          },
        }
      );
      setSuggestions(response.data.features);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.length > 2) {
      fetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  };

  const handleLocationSelect = (suggestion) => {
    setQuery(suggestion.place_name);
    setSuggestions([]);
    onSelect({
      name: suggestion.place_name,
      lat: suggestion.center[1],
      lon: suggestion.center[0],
    });
  };

  return (
    <div className="relative text-black bg-white">
      <div className=" peer-focus-within:border-yellow-500 focus:border-yellow-500  w-full h-10 px-4 gap-2 flex items-center mb-3 border border-gray-300 rounded-md">
        <MapPin />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="focus:outline-none"
          placeholder={label || "Enter a location"} // Use label if provided
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleLocationSelect(suggestion)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
