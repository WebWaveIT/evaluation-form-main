export default class StepData {
  constructor() {}

  /**
   * @returns {Array<FormField>}
   */
  getFields() {
    throw new Error("getFields method should be implemented by subclass");
  }

  /**
   * @returns {boolean}
   */
  isValid() {
    let valid = true;
    this.getFields().forEach((field) => {
      if (field.isValid() === false) {
        valid = false;
      }
    });
    return valid;
  }

  /**
   * @returns {string}
   */
  getLabel() {
    throw new Error("not implemented");
  }

  /**
   * @returns {string}
   */
  printSummary() {
    let summary = ``
    for (const field of this.getFields()) {
      summary += `
        <p>${field.label}: </p>
        <p>${field.value}</p>
      `
    }
    return summary
  }
}

