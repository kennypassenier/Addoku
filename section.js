class Section{
    constructor(pOperator, pValue, pSize) {
        this.operator = pOperator;
        this.value = pValue;
        this.candidates = [];
        this.cells = [];
        for(let i = 0; i < pSize; i++){
            this.cells.push(new Cell());
        }
    }
}