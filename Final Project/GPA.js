// Focus first grade input when page loads
window.addEventListener("load", function () {
    var first = document.getElementById("gr1");
    if (first) {
        first.focus();
    }
});

// Convert letter grade to grade points
function gradeToPoints(grade) {
    if (!grade) return null;
    grade = grade.trim().toUpperCase();

    switch (grade) {
        case "A": return 4.0;
        case "B": return 3.0;
        case "C": return 2.0;
        case "D": return 1.0;
        case "F": return 0.0;
        default:  return null; // invalid grade
    }
}

function calculateGPA() {
    var totalPoints = 0;
    var totalCredits = 0;
    var entries = 0;

    // Loop through 5 courses
    for (var i = 1; i <= 5; i++) {
        var gradeInput  = document.getElementById("gr" + i).value;
        var creditInput = document.getElementById("ch" + i).value;

        // Skip completely empty rows
        if (gradeInput !== "" || creditInput !== "") {
            var points  = gradeToPoints(gradeInput);
            var credits = parseFloat(creditInput);

            // Validate
            if (points === null || isNaN(credits) || credits <= 0) {
                alert(
                    "Entry " + i +
                    " is invalid. Use grades A, B, C, D, F and positive credit hours."
                );
                return;
            }

            totalPoints  += points * credits;
            totalCredits += credits;
            entries++;
        }
    }

    if (entries < 2) {
        alert("Please enter at least 2 valid Grade/Credit Hour entries.");
        return;
    }

    var gpa = totalPoints / totalCredits;

    // Show result in Avg GPA box
    var resultBox = document.getElementById("avgGpa");
    if (resultBox) {
        resultBox.value = gpa.toFixed(2);
    }
}

function resetGPA() {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("gr" + i).value = "";
        document.getElementById("ch" + i).value = "";
    }
    document.getElementById("avgGpa").value = "";
    document.getElementById("gr1").focus();
}
