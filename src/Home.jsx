import React, { useState } from "react";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (longUrl && shortCode) {
      setShortUrl(`https://cpt405.co/${shortCode}`);
    } else {
      alert("Please enter both a URL and a short code");
    }
  };

  return (
    <div className="main-content">
      <div className="card">
        <h2>Link Shrinker</h2>

        <div className="input-group">
          <label>Long URL:</label>
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Enter short code:</label>
          <input
            type="text"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
          />
        </div>

        <button onClick={handleShorten} className="shorten-btn">
          Shorten
        </button>

        {shortUrl && (
          <div className="result-section">
            <label>Short URL</label>
            <div className="result-box">{shortUrl}</div>
          </div>
        )}
      </div>
    </div>
  );
}
