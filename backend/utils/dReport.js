// Import the required modules
const fs = require("fs");

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

function generateContent(score, section, filePath = "./dReportDB.json") {
  // Define mean and standard deviation for each section
  const sectionStats = {
    energy: { mean: 61.46, sd: 3.14 },
    mood: { mean: 70.21, sd: 2.77 },
    focus: { mean: 71.64, sd: 4.23 },
    spirit: { mean: 70.97, sd: 3.87 },
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

function generateScoresWithEnergyTrend(startDate, i) {
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

  // Define the score ranges for each time of the day
  const scoreRanges = {
    0: [51, 55], // 8 AM
    1: [51, 55], // 11 AM
    2: [60, 75], // 2 PM
    3: [60, 75], // 5 PM
    4: [60, 75], // 8 PM
    5: [51, 65], // 11 PM
    6: [51, 65], // 2 AM
  };

  // Adjust the score range based on the day of the week
  const dayModifiers = {
    0: -3, // Monday
    1: 0, // Tuesday
    2: -3, // Wednesday
    3: 0, // Thursday
    4: 5, // Friday
    5: 5, // Saturday
    6: 0, // Sunday
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

// const { randomInt } = require('crypto'); // For secure random number generation

function generateMoodScores(startDate, i) {
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

  // Define the score ranges for each time of the day
  const scoreRanges = {
    0: [51, 54], // 8 AM
    1: [55, 59], // 11 AM
    2: [55, 58], // 2 PM
    3: [55, 60], // 5 PM
    4: [80, 90], // 8 PM
    5: [95, 99], // 11 PM
    6: [80, 90], // 2 AM
  };

  // Adjust the score range based on the day of the week
  const dayModifiers = {
    0: -3, // Monday
    1: 0, // Tuesday
    2: -4, // Wednesday
    3: 0, // Thursday
    4: 4, // Friday
    5: 4, // Saturday
    6: 0, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let i = 0; i < 7; i++) {
    const [minScore, maxScore] = scoreRanges[i];
    let adjustedMin = Math.max(51, Math.min(99, minScore + dayModifier)); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, Math.max(51, maxScore + dayModifier)); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

// const { randomInt } = require('crypto'); // For secure random number generation

function generateFocusScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a number representing the offset in days
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day
  const scoreRanges = {
    0: [70, 80], // 8 AM
    1: [80, 95], // 11 AM
    2: [75, 90], // 2 PM
    3: [65, 75], // 5 PM
    4: [57, 67], // 8 PM
    5: [60, 70], // 11 PM
    6: [65, 70], // 2 AM
  };

  // Adjust the score range based on the day of the week
  const dayModifiers = {
    0: 0, // Monday
    1: 3, // Tuesday
    2: 5, // Wednesday
    3: 0, // Thursday
    4: -7, // Friday
    5: -5, // Saturday
    6: -4, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let i = 0; i < 7; i++) {
    const [minScore, maxScore] = scoreRanges[i];
    let adjustedMin = Math.max(51, Math.min(99, minScore + dayModifier)); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, Math.max(51, maxScore + dayModifier)); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

// const { randomInt } = require('crypto'); // For secure random number generation

function generateSpiritScores(startDate, i) {
  // Calculate current date and day of the week
  // Assuming startDate is a number representing the offset in days
  const currentDate = new Date(
    Date.UTC(
      startDate.getUTCFullYear(),
      startDate.getUTCMonth(),
      startDate.getUTCDate() + i
    )
  );
  const dayOfWeek = currentDate.getUTCDay();

  // Define the score ranges for each time of the day
  const scoreRanges = {
    0: [60, 70], // 8 AM
    1: [55, 65], // 11 AM
    2: [50, 60], // 2 PM
    3: [60, 70], // 5 PM
    4: [70, 80], // 8 PM
    5: [80, 90], // 11 PM
    6: [75, 85], // 2 AM
  };

  // Adjust the score range based on the day of the week
  const dayModifiers = {
    0: -4, // Monday
    1: -3, // Tuesday
    2: 2, // Wednesday
    3: 0, // Thursday
    4: 4, // Friday
    5: 5, // Saturday
    6: 7, // Sunday
  };
  const dayModifier = dayModifiers[dayOfWeek];

  // Generate scores for each time of the day
  const scores = [];
  for (let i = 0; i < 7; i++) {
    const [minScore, maxScore] = scoreRanges[i];
    let adjustedMin = Math.max(51, Math.min(99, minScore + dayModifier)); // Ensure score is within 51-99
    let adjustedMax = Math.min(99, Math.max(51, maxScore + dayModifier)); // Ensure score is within 51-99

    // Ensure adjustedMin is not greater than adjustedMax
    adjustedMin = Math.min(adjustedMin, adjustedMax);

    scores.push(randomInt(adjustedMin, adjustedMax + 1)); // randomInt is inclusive at min and exclusive at max
  }

  return scores;
}

function generateDReportForWeek(
  startDate,
  generateScoresWithEnergyTrend,
  generateMoodScores,
  generateFocusScores,
  generateSpiritScores,
  generateContent
) {
  const dreportData = {
    dReportWritings: [
      "sentence about the general vibe of the week",
      "sentence2 about notable planetary alignments",
    ],
    dReport: {
      Energy: { dailyData: [] },
      Mood: { dailyData: [] },
      Focus: { dailyData: [] },
      Spirit: { dailyData: [] },
    },
  };

  for (let i = 0; i < 28; i++) {
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

    // Generate random scores with trends throughout the day for each section
    dayData["scores"] = generateScoresWithEnergyTrend(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "energy"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    dreportData["dReport"]["Energy"]["dailyData"].push({ ...dayData });

    // Mood Section
    dayData["scores"] = generateMoodScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(dayData["averageScore"], "mood");
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    dreportData["dReport"]["Mood"]["dailyData"].push({ ...dayData });

    // Focus Section
    dayData["scores"] = generateFocusScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(dayData["averageScore"], "focus");
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    dreportData["dReport"]["Focus"]["dailyData"].push({ ...dayData });

    // Spirit Section
    dayData["scores"] = generateSpiritScores(startDate, i);
    dayData["averageScore"] = calculateAverage(dayData["scores"]);
    dayData["dailyContent"] = generateContent(
      dayData["averageScore"],
      "spirit"
    );
    dayData["dailyAnnualdiff"] = [roundTo(randomFloat(-0.15, 0.29), 3)];
    dreportData["dReport"]["Spirit"]["dailyData"].push({ ...dayData });
  }

  return dreportData;
}

// Assuming all necessary functions and imports are defined above

// Automatically set start_date to the current date
const startDate = new Date();

// Generate the weekly report data
const dreportWeekData = generateDReportForWeek(
  startDate,
  generateScoresWithEnergyTrend,
  generateMoodScores,
  generateFocusScores,
  generateSpiritScores,
  generateContent
);

// Convert the data to a JSON string with indentation
const jsonData = JSON.stringify(dreportWeekData, null, 4);

// Print the JSON data
module.exports = jsonData;
