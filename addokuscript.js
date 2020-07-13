// Globals


// Main

// Addoku lvl 1099 diff: 10
let addoku = new Addoku();
addoku.addSection(new Section("-", 2, 3));
addoku.addSection(new Section("*", 72, 4));
addoku.addSection(new Section("-", 2, 2));
addoku.addSection(new Section("+", 19, 3));
addoku.addSection(new Section("*", 48, 2));
addoku.addSection(new Section("+", 24, 4));
addoku.addSection(new Section("-", 1, 3));
addoku.addSection(new Section("-", 5, 2));
addoku.addSection(new Section("+", 23, 4));
addoku.addSection(new Section("+", 14, 2));
addoku.addSection(new Section("*", 80, 4));
addoku.addSection(new Section("+", 21, 4));
addoku.addSection(new Section("+", 23, 4));
addoku.addSection(new Section("+", 11, 3));
addoku.addSection(new Section("-", 0, 3));
addoku.addSection(new Section("-", 5, 2));
addoku.addSection(new Section("+", 27, 4));
addoku.addSection(new Section("*", 48, 3));
addoku.addSection(new Section("+", 17, 3));
addoku.addSection(new Section("/", 3, 3));
addoku.addSection(new Section("+", 14, 3));
addoku.addSection(new Section("-", 0, 4));
addoku.addSection(new Section("+", 11, 2));
addoku.addSection(new Section("+", 11, 2));
addoku.addSection(new Section("*", 21, 3));
addoku.addSection(new Section("+", 9, 2));
addoku.addSection(new Section("-", 3, 3));
addoku.fillSectionsWithPossibleCandidates();
console.log(addoku);

// Put sections for the first block into an array
let block = [addoku.sections[0], addoku.sections[4], addoku.sections[7]];
console.log(block);

console.log(Addoku.getMultipleCombinations(block, []))


// Functions

