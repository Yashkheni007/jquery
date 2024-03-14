let newRollNo = 0;
let totalRows = 0;

function addRow() {
    newRollNo++;
    totalRows++;
    showTotalStudent();

    var newRow = $("<tr>");

    newRow.append(`<td><input class = "name"></td>
    <td><input type = "number" value = "${newRollNo}" class="rollNo" min="1"></td>
    <td><input type = "number" class = "maths" onchange="calculateTotal(this)" min = "0" max = "100"></td>
    <td><input type = "number" class = "chemistry" onchange="calculateTotal(this)" min = "0" max = "100"></td>
    <td><input type = "number" class = "physics" onchange="calculateTotal(this)" min = "0" max = "100"></td>
    <td><input type = "number" class = "total" readonly></td>
    <td><input type = "number" class = "percentage" readonly></td>
    <td><button style="border: none; margin-top: 5px;" data-bs-toggle="tooltip" title="delete row" data-bs-placement="bottom" onclick="deleteRow(this)"><i class="gg-trash"></i></button></td>
    `);

    $("#tblData").append(newRow);
}

function deleteRow(dlt) {
    $(dlt).closest("tr").remove();
    totalRows--;
    showTotalStudent();
    calculateValue();
}

function calculateTotal(cal) {
    let row = $(cal).closest("tr");

    const maths = row.find(".maths").val();
    const chemistry = row.find(".chemistry").val();
    const physics = row.find(".physics").val();

    let validMarks = true;

    if (maths > 100) {
        alert("please enter the marks between 0 to 100");
        row.find(".maths").val("");
        validMarks = false;
    }
    else if (chemistry > 100) {
        alert("please enter the marks between 0 to 100");
        row.find(".chemistry").val("");
        validMarks = false;
    }
    else if (physics > 100) {
        alert("please enter the marks between 0 to 100");
        row.find(".physics").val("");
        validMarks = false;
    }

    if (validMarks) {
        const total = Number(maths) + Number(chemistry) + Number(physics);
        row.find(".total").val(total.toFixed(2));

        const percentage = (total * 100) / 300;
        row.find(".percentage").val(percentage.toFixed(2));

    }

    if (newRollNo > 2) {
        calculateValue();
    }
}

function calculateValue() {
    const totalMarks = $(".total").toArray();
    const count = totalMarks.filter(input => input.value !== "").map(input => Number(input.value));

    if (count.length > 0) {
        const highestMark = Math.max(...count);
        $("#highestScore").val(highestMark);

        const lowestMark = Math.min(...count);
        $("#lowestScore").val(lowestMark);

        const averageMark = count.reduce((total, value) => total + value, 0) / count.length;
        $("#averageScore").val(averageMark.toFixed(2));
    }
}

function showTotalStudent() {
    $("#totalNumberOfStudent").val(totalRows);
}

function addMultipleRow() {
    let row_number = prompt("Please enter a number");

    if (row_number != null) {
        row_number = parseInt(row_number);

        if (row_number > 0) {
            for (let i = 0; i < row_number; i++) {
                addRow();
            }
        } else {
            alert("Please enter a valid number greater than 0");
        }
    }
}

