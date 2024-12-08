function updateForm() {
    const sides = parseInt(document.getElementById('sides').value);
    const inputFields = document.getElementById('input-fields');
    inputFields.innerHTML = '';

    switch (sides) {
        case 0: // Circle
            inputFields.innerHTML = `
                <label for="diameter">Enter the Diameter:</label>
                <input type="number" id="diameter" step="any">
            `;
            break;
        case 3: // Triangle
            inputFields.innerHTML = `
                <label>Is the triangle:</label>
                <select id="triangle-type" onchange="updateTriangleForm()">
                    <option value="equilateral">Equilateral</option>
                    <option value="isosceles">Isosceles</option>
                    <option value="right">Right-angle</option>
                </select>
                <div id="triangle-fields"></div>
            `;
            updateTriangleForm();
            break;
        case 4: // Quadrilateral
            inputFields.innerHTML = `
                <label>Is the quadrilateral a:</label>
                <select id="quad-type" onchange="updateQuadrilateralForm()">
                    <option value="square">Square</option>
                    <option value="rectangle">Rectangle</option>
                    <option value="rhombus">Rhombus</option>
                </select>
                <div id="quad-fields"></div>
            `;
            updateQuadrilateralForm();
            break;
        case 5: // Pentagon
            inputFields.innerHTML = `
                <label for="side">Enter the Side Length:</label>
                <input type="number" id="side" step="any">
            `;
            break;
        case 6: // Hexagon
            inputFields.innerHTML = `
                <label for="side">Enter the Side Length:</label>
                <input type="number" id="side" step="any">
            `;
            break;
    }
}

function updateTriangleForm() {
    const triangleType = document.getElementById('triangle-type').value;
    const triangleFields = document.getElementById('triangle-fields');
    
    switch (triangleType) {
        case 'equilateral':
            triangleFields.innerHTML = `
                <label for="side">Enter the Side Length:</label>
                <input type="number" id="side" step="any">
            `;
            break;
        case 'isosceles':
            triangleFields.innerHTML = `
                <label for="side1">Enter the Length of Equal Sides:</label>
                <input type="number" id="side1" step="any">
                <label for="base">Enter the Base Length:</label>
                <input type="number" id="base" step="any">
            `;
            break;
        case 'right':
            triangleFields.innerHTML = `
                <label for="sideA">Enter Side A Length:</label>
                <input type="number" id="sideA" step="any">
                <label for="sideB">Enter Side B Length:</label>
                <input type="number" id="sideB" step="any">
                <label for="sideC">Enter Side C Length:</label>
                <input type="number" id="sideC" step="any">
            `;
            break;
    }
}

function updateQuadrilateralForm() {
    const quadType = document.getElementById('quad-type').value;
    const quadFields = document.getElementById('quad-fields');
    
    switch (quadType) {
        case 'square':
            quadFields.innerHTML = `
                <label for="side">Enter the Side Length:</label>
                <input type="number" id="side" step="any">
            `;
            break;
        case 'rectangle':
            quadFields.innerHTML = `
                <label for="length">Enter Length:</label>
                <input type="number" id="length" step="any">
                <label for="width">Enter Width:</label>
                <input type="number" id="width" step="any">
            `;
            break;
        case 'rhombus':
            quadFields.innerHTML = `
                <label for="diag1">Enter the Small Diameter:</label>
                <input type="number" id="diag1" step="any">
                <label for="diag2">Enter the Large Diameter:</label>
                <input type="number" id="diag2" step="any">
            `;
            break;
    }
}

function calculateArea() {
    const sides = parseInt(document.getElementById('sides').value);
    let area = 0;

    if (sides === 0) {
        const diameter = parseFloat(document.getElementById('diameter').value);
        area = Math.PI * Math.pow(diameter / 2, 2);
    } else if (sides === 3) {
        const triangleType = document.getElementById('triangle-type').value;
        if (triangleType === 'equilateral') {
            const side = parseFloat(document.getElementById('side').value);
            area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
        } else if (triangleType === 'isosceles') {
            const side1 = parseFloat(document.getElementById('side1').value);
            const base = parseFloat(document.getElementById('base').value);
            const height = Math.sqrt(Math.pow(side1, 2) - Math.pow(base / 2, 2));
            area = 0.5 * base * height;
        } else if (triangleType === 'right') {
            const sideA = parseFloat(document.getElementById('sideA').value);
            const sideB = parseFloat(document.getElementById('sideB').value);
            area = 0.5 * sideA * sideB;
        }
    } else if (sides === 4) {
        const quadType = document.getElementById('quad-type').value;
        if (quadType === 'square') {
            const side = parseFloat(document.getElementById('side').value);
            area = Math.pow(side, 2);
        } else if (quadType === 'rectangle') {
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            area = length * width;
        } else if (quadType === 'rhombus') {
            const diag1 = parseFloat(document.getElementById('diag1').value);
            const diag2 = parseFloat(document.getElementById('diag2').value);
            area = 0.5 * diag1 * diag2;
        }
    } else if (sides === 5) {
        const side = parseFloat(document.getElementById('side').value);
        area = (Math.sqrt(25 + 10 * Math.sqrt(5)) / 4) * Math.pow(side, 2);
    } else if (sides === 6) {
        const side = parseFloat(document.getElementById('side').value);
        area = (3 * Math.sqrt(3) / 2) * Math.pow(side, 2);
    }

    document.getElementById('result').innerText = area.toFixed(2);
}







////////////////////////////



