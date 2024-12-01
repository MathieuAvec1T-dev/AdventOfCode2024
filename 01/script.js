const aocSubmit = document.querySelector('#aoc-submit');
if (aocSubmit) {
    aocSubmit.addEventListener('click', () => {

        const aocInput = document.querySelector('#aoc-input');
        // Import input in var and format it
        const coordonateList = aocInput.value.trim().replace(/\s+/g, ' ').split(' ');

        const arrayLeft = []
            arrayRight = [];

        // Split in two arrays
        coordonateList.forEach((num, index) => {
            if (index % 2 === 0) {
                arrayLeft.push(num);
            } else {
                arrayRight.push(num);
            }
        });

        // Sort array individually
        arrayLeft.sort();
        arrayRight.sort();


        // Part 1
        // ------
        const coordonateDiffTotal = 0;

        // Brows array and compare dif between left & right
        arrayLeft.forEach((element, index) => {
            coordonateDiffTotal = coordonateDiffTotal + Math.abs(arrayLeft[index] - arrayRight[index]);
        });

        // Show result Part 1 
        document.querySelector('#part1-result').innerHTML = coordonateDiffTotal;


        // Part 2
        // ------
        const similarityScoreTotal = 0;


        const resultats = arrayLeft.map(seekedElement => {
            // Create new array with filter and get his length to get number of occurence
            const occurence = arrayRight.filter(element => element === seekedElement).length;
            // Add similarty score to total after multiplying actual ellement by nb of time it appear
            similarityScoreTotal = similarityScoreTotal + (seekedElement * occurence);
        });

        // Show result Part 2
        document.querySelector('#part2-result').innerHTML = similarityScoreTotal;
    });
}