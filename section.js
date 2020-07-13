class Section{
    constructor(pOperator, pValue, pSize) {
        this.operator = pOperator;
        this.value = pValue;
        this.candidates = [];
        this.cells = [];
        this.size = pSize;
    }
}