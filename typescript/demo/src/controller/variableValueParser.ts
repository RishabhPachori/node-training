/**
 * class for parsing the string to get value inside curly braces
 */

class VariableValueParser {
    stringData: string;
    constructor(s: string){
        this.stringData = s;
    }
    
    // method for get value inside curly braces

    getValue(): string | undefined{
        const regEx = /\{([^{}]+)\}/
        const result = regEx.exec(this.stringData)
        if(result !== null ){
            return result[1]
        }
    }
}

export default VariableValueParser