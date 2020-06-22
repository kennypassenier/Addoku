// Globals
let amountSlider = $("#amountSlider");
let amountSliderValue = $("#amountSliderValue");
let resultsDiv = $("#results");

// Functions

amountSlider.change(function(){
    console.log(amountSlider.val());
    amountSliderValue.text(amountSlider.val());
    let combos = k_combinations([1, 2, 3, 4, 5,6, 7, 8, 9], amountSlider.val());
    resultsDiv.text(" ");
    for(let combo of combos){
        resultsDiv.append(`<p>${combo}</p>`);
    }
});


// Helper functions
function subsetDivision(targetNr){
    let numberlist = [9,8,7,6,5,4,3,2,1];
    let results = [];
    let numberOne = false;

    for(let number of numberlist){
        let answer = number / targetNr;
        if(numberlist.includes(answer)){
            // Scenario with 1 in the calculation
            // Default scenario
            // Save number and targetNr as result
            if(number !== 1 && answer !== 1){
                numberOne = true;
            }
            results.push([number, answer]);

            // Scenario without 1 in calculation
            // There is an extra possible combo that includes 1
            if(numberOne){
                results.push([number, answer, 1]);
                numberOne = false;
            }
        }
    }
    return results;
}


// Set is an array, k is the length of the results
const k_combinations = (set, k) => {
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
        tail_combs = k_combinations(set.slice(i + 1), k - 1)
        for (let j = 0; j < tail_combs.length; j++) {
            combs.push([set[i], ...tail_combs[j]])
        }
    }

    return combs
}
// Set is an array, every possible length will be returned
const combinations = set => {
    return set.reduce((acc, cur, idx) => [...acc, ...k_combinations(set, idx + 1)], [])
}

