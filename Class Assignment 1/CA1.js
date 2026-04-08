// Global array to store student objects
let studentArray = [];

function addStudent() {
    // Capturing values using Variables
    const name = document.getElementById('studentName').value;
    const roll = document.getElementById('rollNumber').value;
    const math = parseFloat(document.getElementById('mathMarks').value);
    const sci = parseFloat(document.getElementById('scienceMarks').value);
    const eng = parseFloat(document.getElementById('englishMarks').value);

    // Basic Validation
    if (!name || !roll || isNaN(math) || isNaN(sci) || isNaN(eng)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Creating a Student Object
    const student = {
        name: name,
        roll: roll,
        marks: [math, sci, eng],
        total: math + sci + eng,
        average: (math + sci + eng) / 3
    };

    // Storing object in Array
    studentArray.push(student);

    // Clear inputs
    document.querySelectorAll('input').forEach(input => input.value = '');
    alert("Record Added!");
}

function displayAll() {
    let output = "<h3>All Student Records</h3>";
    
    // Using for...of loop to process student records
    for (let s of studentArray) {
        output += `
            <div class="student-card">
                <b>${s.name} (Roll: ${s.roll})</b><br>
                Total: ${s.total} | Average: ${s.average.toFixed(2)}
            </div>`;
    }
    updateDisplay(output);
}

function displayHighAchievers() {
    let output = "<h3>High Achievers (Avg > 80)</h3>";
    
    // Using Conditional Statements (if)
    for (let s of studentArray) {
        if (s.average > 80) {
            output += `<p>✅ ${s.name} - Average: ${s.average.toFixed(2)}</p>`;
        }
    }
    updateDisplay(output);
}

function displayFailed() {
    let output = "<h3>Failed Students (Avg < 40)</h3>";
    for (let s of studentArray) {
        if (s.average < 40) {
            output += `<p>❌ ${s.name} - Average: ${s.average.toFixed(2)}</p>`;
        }
    }
    updateDisplay(output);
}

function showTotalCount() {
    const totalCount = studentArray.length;
    updateDisplay(`<h3>Total Students Enrolled: ${totalCount}</h3>`);
}

// Helper function to update the webpage dynamically
function updateDisplay(content) {
    const area = document.getElementById('outputArea');
    area.innerHTML = studentArray.length > 0 ? content : "<p>No records found. Please add a student.</p>";
}