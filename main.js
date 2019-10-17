// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation1(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation2(pt2x, pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5
}

//Slope function
function getSlope(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise / run);
}

//Description function
function getDescription(x1, y1, x2, y2) {
    let rise = y2 - y1;
    let run = x2 - x1;
    if (y1 == y2) {
        return "Horizontal";
    } else if (x1 == x2) {
        return "Veritcal";
    } else if (rise / run < 0) {
        return "Negative";
    } else if (rise / run > 0) {
        return "Positive";
    }
}

//Point location first point
function getPointLocation1(x1, y1) {
    if (x1 == 0 && y1 == 0) {
        return "origin";
    } else if (x1 == 0) {
        return "y-axis";
    } else if (y1 == 0) {
        return "x-axis";
    } else if (x1 > 0 && y1 > 0) {
        return "quadrant 1";
    } else if (x1 < 0 && y1 > 0) {
        return "quadrant 2";
    } else if (x1 < 0 && y1 < 0) {
        return "quadrant 3";
    } else if (x1 > 0 && y1 < 0) {
        return "quadrant 4";
    }
}

//Point location second point
function getPointLocation2(x2, y2) {
    if (x2 == 0 && y2 == 0) {
        return "origin";
    } else if (x2 == 0) {
        return "y-axis";
    } else if (y2 == 0) {
        return "x-axis";
    } else if (x2 > 0 && y2 > 0) {
        return "quadrant 1";
    } else if (x2 < 0 && y2 > 0) {
        return "quadrant 2";
    } else if (x2 < 0 && y2 < 0) {
        return "quadrant 3";
    } else if (x2 > 0 && y2 < 0) {
        return "quadrant 4";
    }
}

//Equation
function getEquation(x1, y1, x2, y2) {
    //Slope
    let rise = y2 - y1;
    let run = x2 - x1;
    let slope = rise / run;

    //Intercept
    let xInt = y1 - (slope * x1);

    if (xInt == 0) {
        return 'y = ' + slope + 'x';
    } else {
        return 'y = ' + slope + 'x' + " " + "+" + xInt;
    }
}