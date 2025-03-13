function calculateCircumference() {
    const radiusInput = document.getElementById('radius').value;
    const diameterInput = document.getElementById('diameter').value;
    const resultElement = document.getElementById('result');

    let result = '';

    if (radiusInput) {
        const radius = parseFloat(radiusInput);
        const circumferenceFromRadius = 2 * Math.PI * radius;
        result += `Circumference using Radius (C = 2πr): ${circumferenceFromRadius.toFixed(2)} <br>`;
    }

    if (diameterInput) {
        const diameter = parseFloat(diameterInput);
        const circumferenceFromDiameter = Math.PI * diameter;
        result += `Circumference using Diameter (C = πd): ${circumferenceFromDiameter.toFixed(2)} <br>`;
    }

    if (!radiusInput && !diameterInput) {
        result = 'Please enter either a radius or a diameter.';
    }

    resultElement.innerHTML = result;
}
