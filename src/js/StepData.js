export default class StepData {

    constructor(){
    }

    /**
     * @returns {Array<FormField>}
     */
    getFields(){
        //todo implement
        return [];
    }

    /**
     * @returns {boolean}
     */
    isValid(){
        let valid = true;
        this.getFields().forEach((field) => {
            if (this[field].isValid() === false){
                valid = false;
            }
        });
        return valid;
    }

    /**
     * @returns {string}
     */
    getLabel(){
        throw new Error('not implemented');
    }

    /**
     * @returns {string}
     */
    printSummary(){
        throw new Error('not implemented');
    }
}