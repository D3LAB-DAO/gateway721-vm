function calculateCircleArea(params) {
    const { radius } = params;
    const area = Math.PI * Math.pow(radius, 2);
    return area;
}

mainFunction = calculateCircleArea;
