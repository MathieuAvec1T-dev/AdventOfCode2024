const aocSubmit = document.querySelector('#aoc-submit');
if (aocSubmit) {
    aocSubmit.addEventListener('click', () => {
        const aocInput = document.querySelector('#aoc-input');
        if (!aocInput || !aocInput.value.trim()) {
            document.querySelector('#part1-result').innerHTML = "Veuillez entrer des données valides.";
            return;
        }

        const levelList = aocInput.value
            .trim()
            .split('\n')
            .map(line => line.split(' ').map(Number));

        let nbSafe = 0;


        // Part 1 
        // ------
        for (const element of levelList) {
            const type = element[0] > element[1] ? "decr" : element[0] < element[1] ? "incr" : "equal";

            let isSafe = true;

            if (type === "equal") continue; // Skip if equal

            for (let i = 0; i < element.length - 1; i++) {
                const isTypeRespected = type === "decr"
                    ? element[i] > element[i + 1]
                    : element[i] < element[i + 1];

                if (!isTypeRespected) {
                    isSafe = false;
                    break;
                }

                const diff = Math.abs(element[i] - element[i + 1]);
                if (diff < 1 || diff > 3) {
                    isSafe = false;
                    break;
                }
            }

            if (isSafe) nbSafe += 1;
        }

        // Show result Part 1 
        document.querySelector('#part1-result').innerHTML = nbSafe;



        nbSafe = 0;

        // Part 2
        // ------
        for (const element of levelList) {
            const type = element[0] > element[1] ? "decr" : element[0] < element[1] ? "incr" : "equal";
            
            let isSafe = true;
            let errorCount = 0;

            if (type === "equal") {
                errorCount++;
                if (errorCount > 1) {
                    isSafe = false;
                    break;
                } 
            }

            for (let i = 0; i < element.length - 1; i++) {
                const isTypeRespected = type === "decr"
                    ? element[i] > element[i + 1]
                    : element[i] < element[i + 1];

                if (!isTypeRespected) {
                    errorCount++;
                    if (errorCount > 1) {
                        isSafe = false;
                        break;
                    }
                }

                const diff = Math.abs(element[i] - element[i + 1]);
                if (diff < 1 || diff > 3) {
                    errorCount++;
                    if (errorCount > 1) {
                        isSafe = false;
                        break;
                    }
                }
            }

            if (isSafe) nbSafe += 1;
        }

        // Show result Part 2
        document.querySelector('#part2-result').innerHTML = nbSafe;
    });
}