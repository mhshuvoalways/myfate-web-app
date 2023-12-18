const fs = require("fs");
const path = require("path");

const awsUrl = "https://my-fates.s3.amazonaws.com/assets";

// Function to read JSON file
function readJsonFile(filename) {
  const rawData = fs.readFileSync(filename);
  return JSON.parse(rawData);
}

// Function to get a random picture from a personality database
function getRandomPictureFromPersonality(db, category, personalityType) {
  const categoryData = db[category];
  if (!categoryData) return null;

  const pictures =
    categoryData[personalityType] && categoryData[personalityType].image;
  if (!pictures || pictures.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * pictures.length);
  return pictures[randomIndex];
}

// Function to get a random picture from a general database
function getRandomPictureFromGeneral(db) {
  const keys = Object.keys(db);
  if (keys.length === 0) return null;

  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const pictures = db[randomKey];
  if (!pictures || pictures.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * pictures.length);
  return pictures[randomIndex];
}

function createPictureList(
  personalityType,
  personalityDbPaths,
  generalDbPaths
) {
  let pictureList = {};

  // Process personality-specific databases
  for (const filePath of personalityDbPaths) {
    const db = readJsonFile(filePath);
    const category = Object.keys(db)[0]; // Assuming the category is the first key
    const picture = getRandomPictureFromPersonality(
      db,
      category,
      personalityType
    );
    if (picture) pictureList[category] = `${awsUrl}/${category}/${picture}`;
  }
  for (const filePath of generalDbPaths) {
    const db = readJsonFile(filePath);
    const picture = getRandomPictureFromGeneral(db);
    if (picture)
      pictureList[
        path.basename(filePath, ".json")
      ] = `${awsUrl}/${path.basename(filePath, ".json")}/${picture}`;
  }
  return pictureList;
}

module.exports = createPictureList;
