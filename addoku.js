class Addoku{
    constructor() {
        this.sections = [];
        this.rows = [];
        this.columns = [];
        this.blocks = [];
    }
    addSection(pSection){
        // Todo check if section contains cell that is already inside this addoku to avoid duplicates
        this.sections.push(pSection);
    }

    fillSectionsWithPossibleCandidates(){
        // This fills all the section with all the possible candidates, only used once when the game starts
        for(let section of this.sections){
            let allCombinationsOfSectionLength = this.k_combinations([1, 2, 3, 4, 5 ,6, 7, 8, 9], section.cells.length);

            switch(section.operator){
                case "+":
                    for(let combination of allCombinationsOfSectionLength){
                        // Reduce is used to sum up the array
                        if(combination.reduce((a, b) => a + b, 0) === section.value){
                            section.candidates.push(combination);
                        }
                    }
                    break;
                case "-":
                    // We need to create a variable with the value of the largest
                    // value in the array and delete it from the array
                    // If we detract the values of the remaining items in the array
                    // and it equals to section.value, we can add the combination
                    // to our candidates
                    for(let combination of allCombinationsOfSectionLength){
                        // Create variable with largest value in the array
                        let largest = Math.max(...combination);
                        //console.log(`Largest: ${largest}`);
                        // Filter the array so the largest value is removed
                        let filteredCombination = combination.filter((e) => { return e != largest });
                        //console.log(`Filtered combination: ${filteredCombination}`);
                        // Substract all the values from the filtered array from largest
                        let filteredItemsSum = filteredCombination.reduce((a, b) => a + b, 0);
                        if(largest - filteredItemsSum === section.value){
                            section.candidates.push(combination);
                        }
                    }
                    break;
                case "*":
                    for(let combination of allCombinationsOfSectionLength){
                        if(combination.reduce((a, b) => a * b, 1) === section.value){
                            section.candidates.push(combination);
                        }
                    }
                    break;
                case "/":
                    for(let combination of allCombinationsOfSectionLength){
                        // Create variable with largest value in array
                        let largest = Math.max(...combination);
                        //console.log("******************");
                        //console.log(`Largest: ${largest}`);
                        // Filter the array so the largest value is removed
                        let filteredCombination = combination.filter((e) => { return e != largest });
                        //console.log(`Filtered combination: ${filteredCombination}`);
                        // Divide the largest number with all the numbers from the filtered combination
                        let wrongCombo = false;
                        for(let filteredValue of filteredCombination){
                            if(largest % filteredValue === 0){
                                //console.log(`largest: ${largest}, filteredValue: ${filteredValue}`);
                                //console.log("Yes");
                                largest = Math.floor(largest / filteredValue);
                            }
                            else{
                                // There is a remainder when trying to divide
                                // combination is no longer a potential candidate
                                wrongCombo = true;
                            }
                        }
                        //console.log(`largest: ${largest}, value: ${section.value}`)
                        if(largest === section.value && !wrongCombo){
                            //console.log("Adding combo");
                            section.candidates.push(combination);
                        }
                        //console.log("******************");
                        //console.log(" ");
                    }
                    break;
                default:
                    console.error("Wrong operator for section, unable to fill with candidates");
            }
        }
    }

    // Helper functions
    // Set is an array, k is the length of the results
    k_combinations(set, k){
        if (k > set.length || k <= 0) {
            return []
        }

        if (k == set.length) {
            return [set]
        }

        if (k == 1) {
            return set.reduce((acc, cur) => [...acc, [cur]], [])
        }

        let combs = [], tail_combs = []

        for (let i = 0; i <= set.length - k + 1; i++) {
            tail_combs = this.k_combinations(set.slice(i + 1), k - 1)
            for (let j = 0; j < tail_combs.length; j++) {
                combs.push([set[i], ...tail_combs[j]])
            }
        }

        return combs
    }
    // Set is an array, every possible length will be returned
    combinations(set){
        return set.reduce((acc, cur, idx) => [...acc, ...this.k_combinations(set, idx + 1)], [])
    }



}