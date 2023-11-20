// Import the required modules
const fs = require("fs");
const path = require("path");

// Function to get the name of the weekday
function getWeekdayName(weekdayNumber) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return weekdays[weekdayNumber];
}
function roundTo(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function calculateAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// Function to generate daily content based on score
function loadSentencesFromDb(filePath, section, score) {
  const key = `${section.toLowerCase()}${score}`;

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (!(key in data)) {
      return `No data available for key: ${key}`;
    }

    const sentences = data[key];

    if (!sentences || sentences.length === 0) {
      return "No sentence available for this score.";
    }

    // Randomly select a sentence from the array
    return sentences[Math.floor(Math.random() * sentences.length)];
  } catch (error) {
    if (error.code === "ENOENT") {
      return "File not found. Please check the file path.";
    } else if (error instanceof SyntaxError) {
      return "Invalid JSON format in the file.";
    } else {
      throw error;
    }
  }
}

module.exports = { getWeekdayName, loadSentencesFromDb };

// Assuming loadSentencesFromDb and other required imports are already defined

const filePathDirectory = path.join(__dirname, "loveDB.json");
function generateContent(score, section, filePath = filePathDirectory) {
  // Define mean and standard deviation for each section
  const sectionStats = {
    romance: { mean: 69.47, sd: 3.78 },
    intimacy: { mean: 64.64, sd: 4.19 },
    connection: { mean: 62.38, sd: 4.98 },
    destiny: { mean: 70.93, sd: 4.97 },
  };

  // Get mean and sd for the given section
  const mean = sectionStats[section]["mean"];
  const sd = sectionStats[section]["sd"];

  // Define score thresholds
  const veryLowThreshold = mean - 1.5 * sd;
  const lowThreshold = mean - 0.5 * sd;
  const highThreshold = mean + 0.5 * sd;
  const veryHighThreshold = mean + 1.5 * sd;

  // Determine score range
  let scoreRange;
  if (score < veryLowThreshold) {
    scoreRange = "50"; // Very Low
  } else if (score < lowThreshold) {
    scoreRange = "60"; // Low
  } else if (score < highThreshold) {
    scoreRange = "70"; // Medium
  } else if (score < veryHighThreshold) {
    scoreRange = "80"; // High
  } else {
    scoreRange = "90"; // Very High
  }

  // Get a sentence from the database
  return loadSentencesFromDb(filePath, section, scoreRange);
}

module.exports = { generateContent };

const { randomInt } = require("crypto"); // For secure random number generation

function generateRomanceScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a Date object
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day for Romance
  const scoreRanges = {
    0: [51, 60], // 8 AM
    1: [51, 60], // 11 AM
    2: [60, 70], // 2 PM
    3: [70, 80], // 5 PM
    4: [80, 90], // 8 PM
    5: [70, 85], // 11 PM
    6: [60, 75], // 2 AM
  };

  // Adjust the score range based on the day of the week for Romance
  const dayModifiers = {
    0: -4, // Monday
    1: -3, // Tuesday
    2: -3, // Wednesday
    3: 0, // Thursday
    4: 4, // Friday
    5: 6, // Saturday
    6: 4, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let timeSlot = 0; timeSlot < 7; timeSlot++) {
    const [minScore, maxScore] = scoreRanges[timeSlot];
    let adjustedMin = Math.max(51, minScore + dayModifier); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, maxScore + dayModifier); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

function generateIntimacyScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a Date object
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day for Intimacy
  const scoreRanges = {
    0: [51, 55], // 8 AM
    1: [51, 55], // 11 AM
    2: [55, 65], // 2 PM
    3: [60, 70], // 5 PM
    4: [70, 85], // 8 PM
    5: [65, 80], // 11 PM
    6: [60, 70], // 2 AM
  };

  // Adjust the score range based on the day of the week for Intimacy
  const dayModifiers = {
    0: -5, // Monday
    1: -3, // Tuesday
    2: -3, // Wednesday
    3: 0, // Thursday
    4: 5, // Friday
    5: 6, // Saturday
    6: 5, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let timeSlot = 0; timeSlot < 7; timeSlot++) {
    const [minScore, maxScore] = scoreRanges[timeSlot];
    let adjustedMin = Math.max(51, minScore + dayModifier); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, maxScore + dayModifier); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}
function generateConnectionScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a Date object
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day for Connection
  const scoreRanges = {
    0: [51, 55], // 8 AM
    1: [51, 55], // 11 AM
    2: [55, 65], // 2 PM
    3: [60, 70], // 5 PM
    4: [65, 75], // 8 PM
    5: [60, 70], // 11 PM
    6: [55, 65], // 2 AM
  };

  // Adjust the score range based on the day of the week for Connection
  const dayModifiers = {
    0: -5, // Monday
    1: -3, // Tuesday
    2: -3, // Wednesday
    3: 0, // Thursday
    4: 5, // Friday
    5: 10, // Saturday
    6: 5, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let timeSlot = 0; timeSlot < 7; timeSlot++) {
    const [minScore, maxScore] = scoreRanges[timeSlot];
    let adjustedMin = Math.max(51, minScore + dayModifier); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, maxScore + dayModifier); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

function generateDestinyScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a Date object
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day for Destiny
  const scoreRanges = {
    0: [51, 60], // 8 AM
    1: [51, 60], // 11 AM
    2: [60, 70], // 2 PM
    3: [70, 80], // 5 PM
    4: [80, 90], // 8 PM
    5: [75, 85], // 11 PM
    6: [65, 75], // 2 AM
  };

  // Adjust the score range based on the day of the week for Destiny
  const dayModifiers = {
    0: -5, // Monday
    1: -3, // Tuesday
    2: -3, // Wednesday
    3: 0, // Thursday
    4: 5, // Friday
    5: 10, // Saturday
    6: 5, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let timeSlot = 0; timeSlot < 7; timeSlot++) {
    const [minScore, maxScore] = scoreRanges[timeSlot];
    let adjustedMin = Math.max(51, minScore + dayModifier); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, maxScore + dayModifier); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

function generateLoveReportForWeek(
  startDate,
  generateRomanceScores,
  generateIntimacyScores,
  generateConnectionScores,
  generateDestinyScores,
  generateContent
) {
  const loveReportData = {
    loveReportWritings: [
      "sentence about the overall destiny trends of the week",
      "sentence2 about significant destiny observations",
    ],
    loveReport: {
      Romance: { dailyData: [] },
      Intimacy: { dailyData: [] },
      Connection: { dailyData: [] },
      Destiny: { dailyData: [] },
    },
  };

  for (let i = 0; i < 7; i++) {
    // Each day's data
    const current_date = new Date(startDate.getTime());
    current_date.setUTCDate(startDate.getUTCDate() + i);
    const dayOfWeek = current_date.getUTCDay();

    const dayData = {
      date: current_date.toISOString(),
      weekday: getWeekdayName(dayOfWeek),
      scores: [],
      averageScore: 0,
      dailyAnnualdiff: [],
      dailyContent: "",
    };

    // Romance
    dayData["scores"] = generateRomanceScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "romance"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    loveReportData["loveReport"]["Romance"]["dailyData"].push({ ...dayData });

    // Intimacy
    dayData["scores"] = generateIntimacyScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "intimacy"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    loveReportData["loveReport"]["Intimacy"]["dailyData"].push({ ...dayData });

    // Connection
    dayData["scores"] = generateConnectionScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "connection"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    loveReportData["loveReport"]["Connection"]["dailyData"].push({
      ...dayData,
    });

    // Destiny
    dayData["scores"] = generateDestinyScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "destiny"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    loveReportData["loveReport"]["Destiny"]["dailyData"].push({ ...dayData });
  }

  return loveReportData;
}

// Automatically set start_date to the current date
const startDate = new Date();

// Generate the weekly report data
const loveReportWeekData = generateLoveReportForWeek(
  startDate,
  generateRomanceScores,
  generateIntimacyScores,
  generateConnectionScores,
  generateDestinyScores,
  generateContent
);
// Convert the data to a JSON string with indentation
const jsonData = JSON.stringify(loveReportWeekData, null, 4);

module.exports = jsonData;
