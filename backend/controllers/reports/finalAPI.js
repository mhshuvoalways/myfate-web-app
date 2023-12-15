const fs = require("fs");

function replacePlaceholders(text, userName, userGender) {
  // Define pronouns based on gender
  const pronouns = {
    male: { their: "his", them: "him", they: "he", themselves: "himself" },
    female: { their: "her", them: "her", they: "she", themselves: "herself" },
    nonbinary: {
      their: "their",
      them: "them",
      they: "they",
      themselves: "themselves",
    },
  };

  // Select the right set of pronouns
  const chosenPronouns = pronouns[userGender.toLowerCase()];

  // Function to capitalize the first letter
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  // Replace [NAME] with the user's name (capitalized)
  text = text.replace(/\[NAME\]/g, capitalize(userName));

  // Replace pronouns, ensuring the correct capitalization
  text = text.replace(/\[THEIR\]/g, (match, offset) =>
    offset === 0 || text[offset - 2] === "."
      ? capitalize(chosenPronouns.their)
      : chosenPronouns.their
  );
  text = text.replace(/\[THEM\]/g, (match, offset) =>
    offset === 0 || text[offset - 2] === "."
      ? capitalize(chosenPronouns.them)
      : chosenPronouns.them
  );
  text = text.replace(/\[THEY\]/g, (match, offset) =>
    offset === 0 || text[offset - 2] === "."
      ? capitalize(chosenPronouns.they)
      : chosenPronouns.they
  );
  text = text.replace(/\[THEMSELVES\]/g, (match, offset) =>
    offset === 0 || text[offset - 2] === "."
      ? capitalize(chosenPronouns.themselves)
      : chosenPronouns.themselves
  );
  return text;
}

function processMultipleFiles(
  filePaths,
  personalityType,
  userName,
  userGender
) {
  return Promise.all(
    filePaths.map((filePath) =>
      loadJsonFromFile(filePath)
        .then((jsonData) =>
          extractContentAndTitle(
            jsonData,
            personalityType,
            userName,
            userGender
          )
        )
        .catch((error) => {
          console.error("Error processing file:", filePath, error);
          return { title: "", content: "Error in file processing" };
        })
    )
  ).then((results) => {
    return {
      date: new Date().toISOString(),
      title: results[0].title, // Assuming the title from the first file is what you need
      fullTotal: results[0].content,
      fullDecade: results[1].content,
      fullNature: results[2].content,
      fullSwot: results[3].content,
      fullRelationship: results[4].content,
      fullAdvice: results[5].content,
      loveDate: results[6].content,
      loveTotal: results[7].content,
      loveMarriageRisk: results[8].content,
      loveDecade: results[9].content,
      loveKids: results[10].content,
      loveMarriage: results[11].content,
      loveIdeal: results[12].content,
      financeTotal: results[13].content,
      financeDecade: results[14].content,
      financeMethod: results[15].content,
      financeRisk: results[16].content,
      academicAcademic: results[17].content,
      academicJob: results[18].content,
      academicDecade: results[19].content,
      // Add more fields as needed
    };
  });
}

function loadJsonFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseErr) {
          reject(parseErr);
        }
      }
    });
  });
}

function extractContentAndTitle(data, personalityType, userName, userGender) {
  let contentData, title;
  let isPersonalityTypeDB = false;

  // List of expected personality types
  const expectedPersonalityTypes = [
    "PGBR",
    "PGBX",
    "PGER",
    "PGEX",
    "POBR",
    "POBX",
    "POER",
    "POEX",
    "KGBR",
    "KGBX",
    "KGER",
    "KGEX",
    "KOBR",
    "KOBX",
    "KOER",
    "KOEX",
  ];

  // Check if the data structure includes personality types
  if (personalityType) {
    isPersonalityTypeDB =
      expectedPersonalityTypes.includes(personalityType) &&
      data.hasOwnProperty(personalityType);
  }

  if (isPersonalityTypeDB) {
    const categories = Object.keys(data[personalityType]);
    if (categories.length === 0) {
      return { title: "", content: "No categories available." };
    }

    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    contentData = data[personalityType][randomCategory].content;
    title = data[personalityType][randomCategory].title || "";
  } else {
    const categories = Object.keys(data);
    if (categories.length === 0) {
      return { title: "", content: "No categories available." };
    }

    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    contentData = data[randomCategory].content;
    title = data[randomCategory].title || "";
  }

  let allSentences = [];
  for (let key in contentData) {
    if (contentData.hasOwnProperty(key)) {
      let contentItem = contentData[key];
      if (typeof contentItem === "string") {
        contentItem = replacePlaceholders(contentItem, userName, userGender);
        allSentences.push(contentItem);
      } else if (Array.isArray(contentItem)) {
        contentItem.forEach((item) => {
          if (item && item.text) {
            item.text = replacePlaceholders(item.text, userName, userGender);
            allSentences.push(item.text);
          }
        });
      } else if (
        contentItem &&
        typeof contentItem === "object" &&
        contentItem.text
      ) {
        contentItem.text = replacePlaceholders(
          contentItem.text,
          userName,
          userGender
        );
        allSentences.push(contentItem.text);
      }
    }
  }

  return { title, content: allSentences.join(" ") };
}

module.exports = processMultipleFiles;