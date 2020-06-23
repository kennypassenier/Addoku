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


