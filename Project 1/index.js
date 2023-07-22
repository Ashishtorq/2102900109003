const express = require("express");
const axios = require("axios");

const app = express();

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res.status(400).json({ error: "Invalid URL list" });
  }

  try {
    const responses = await Promise.all(
      urls.map((url) => axios.get(url).then((response) => response.data))
    );

    // Process the responses if needed and return the combined data
    // (Here, we are just returning the array of responses as is)
    res.json(responses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from URLs" });
  }
});

app.listen(8008, () => {
  console.log(`Server is running on http://localhost:8008`);
});

