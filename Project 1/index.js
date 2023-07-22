const express = require("express");
const axios = require("axios");

const app = express();

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;
  console.log(urls);
  // if (!urls || !Array.isArray(urls)) {
  //   return res.status(400).json({ error: "Invalid URL list" });
  // }

  try {
    const response = await fetch(urls);
    const data = await response.json();
    console.log(data);
    const mergedData = data.numbers.flat().sort((a, b) => a - b);

    return res.json({ data: mergedData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(8008, () => {
  console.log("Server is running on port 8008");
});
