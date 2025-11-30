// Edit only this file to update players, schedule, stats and points.
// Player images go to assets/ and use the filename below (e.g. 'harsh.jpg')

const DATA = {
  players: [
    { id: 7, name: "Harsh", role: "Captain / Top-order", image: "harsh.jpg", matches: 8, runs: 420, wickets: 2, strikeRate: 142 },
    { id: 18, name: "Yash", role: "All-rounder", image: "yash.jpg", matches: 8, runs: 210, wickets: 12, strikeRate: 118 },
    { id: 3, name: "Aryan", role: "Opener", image: "aryan.jpg", matches: 8, runs: 340, wickets: 0, strikeRate: 130 },
    { id: 11, name: "Rahul", role: "Fast Bowler", image: "rahul.jpg", matches: 8, runs: 40, wickets: 16, strikeRate: 85 }
  ],
  schedule: [
    { date: "2025-11-20", time: "18:00", opponent: "Rival Titans", venue: "Hostel Ground", result: "W" },
    { date: "2025-11-23", time: "17:00", opponent: "Campus Challengers", venue: "Main Pitch", result: "TBD" }
  ],
  groups: {
    A: ["Serenity Knight Riders", "Campus Challengers", "Blue Hawks"],
    B: ["Rival Titans", "Golden Eagles", "Nightwatch"]
  },
  points: [
    { team: "Serenity Knight Riders", played: 2, won: 1, lost: 0, tie: 0, points: 3, nrr: "+1.20" },
    { team: "Rival Titans", played: 2, won: 1, lost: 1, tie: 0, points: 2, nrr: "+0.10" }
  ]
};
