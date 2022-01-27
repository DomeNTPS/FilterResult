import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState("");
  useEffect(() => {
    fetch("https://api.publicapis.org/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [searchResult, setSearchResult] = useState(data);
  useEffect(() => {
    setSearchResult(data);
  }, [data]);
  useEffect(() => {
    setSearchResult(
      data.filter((data) =>
        data.toLowerCase().includes(textInput.toLowerCase())
      )
    );
  }, [data, textInput]);
  return (
    <div>
      <div>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        ></input>
        <table>
          {searchResult &&
            searchResult.map((i, index) => (
              <tr key={index}>
                <td style={{border: "1px solid black"}}>{i}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default App;
