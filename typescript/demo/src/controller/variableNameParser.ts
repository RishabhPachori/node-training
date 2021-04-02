/**
 * class for parsing the string to get name and type inside parenthesis
 */

class VariableNameParser {
    stringData: string;
    constructor(s: string){
        this.stringData = s;
    }
    
    // method for get name inside parenthesis

    getName(): string | undefined{
        const regEx = /\(([^()]+)\)/
        const patternMatch = regEx.exec(this.stringData)
        if(patternMatch !== null){
            const result = patternMatch[1].split(":")
            return result[0]
        }    
    }
    
    // method for get type inside parenthesis

    getType(): string | undefined{
        const regEx = /\(([^()]+)\)/
        const patternMatch = regEx.exec(this.stringData)
        if(patternMatch !== null){
            const splitPattern = patternMatch[1].split(":")
            const result =splitPattern[1].trim()
            return result
        }
        
    }
}

export default VariableNameParser