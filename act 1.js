/ ---------- 1. VARIABLES (3+) ----------
const studentName = "Reann Diomangay";
const section = "BSCS3C";
const passingScore = 75;
let totalStudents = 5;
let classAverage = 0;

// ---------- 2. ARRAYS (3+) ----------
const subjects = ["Programming", "Math", "English"];
const scores = [88, 92, 79, 95, 70];
const attendance = [true, true, false, true, true];

// ---------- 3. CALCULATIONS & CONDITIONALS (3+) ----------
// Conditional 1: Check if class has enough students
if (totalStudents >= 5) {
  console.log(✅ Class ${section} has enough students: ${totalStudents});
} else {
  console.log(⚠️ Need more students in section ${section});
}

// Conditional 2: Check average vs passing
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
classAverage = sum / scores.length;

if (classAverage >= passingScore) {
  console.log(✅ Class average: ${classAverage.toFixed(1)} — PASSED);
} else {
  console.log(❌ Class average: ${classAverage.toFixed(1)} — NEEDS IMPROVEMENT);
}

// Conditional 3: Check attendance status
let presentCount = 0;
for (let i = 0; i < attendance.length; i++) {
  if (attendance[i] === true) presentCount++;
}
const attendanceRate = presentCount / attendance.length;

if (attendanceRate >= 0.😎 {
  console.log(✅ Attendance rate: ${(attendanceRate*100).toFixed(0)}% — GOOD);
} else if (attendanceRate >= 0.6) {
  console.log(⚠️ Attendance rate: ${(attendanceRate*100).toFixed(0)}% — FAIR);
} else {
  console.log(❌ Attendance rate: ${(attendanceRate*100).toFixed(0)}% — POOR);
}

// ---------- 4. LOOPS (3+) ----------
console.log("\n--- Subject List ---");
// Loop 1: for loop
for (let i = 0; i < subjects.length; i++) {
  console.log(Subject ${i+1}: ${subjects[i]});
}

console.log("\n--- Student Scores ---");
// Loop 2: for...of loop
let index = 1;
for (const score of scores) {
  console.log(Student ${index}: ${score} points);
  index++;
}

console.log("\n--- Attendance Status ---");
// Loop 3: while loop
let idx = 0;
while (idx < attendance.length) {
  const status = attendance[idx] ? "PRESENT" : "ABSENT";
  console.log(Student ${idx+1}: ${status});
  idx++;
}

console.log("\n--- Program Complete ---");
console.log(Submitted by: ${studentName} | ${section});