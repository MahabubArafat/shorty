const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/dbConfig");
const { url } = require("./models");

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.get("/:urlHash", async (req, res) => {
  const urlHash = req.params.urlHash;

  try {
    const urlRecord = await url.findOne({ where: { shortUrl: urlHash } });

    if (urlRecord) {
      await urlRecord.increment("visitCount");
      await urlRecord.update({ lastVisited: new Date() });
      res.redirect(urlRecord.realUrl);
    } else {
      res.status(404).send("Short URL not found.");
    }
  } catch (err) {
    console.error("Error finding URL record:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("Hello from Post");
});

app.listen(3000, async () => {
  await connectToDatabase();
  console.log("App running Running........");
});
