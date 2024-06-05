import ValidatorRegex from "@/js/ValidatorRegex";
import Validator from "@/js/Validator";

export default {
  EMAIL: new Validator(ValidatorRegex.email, true),
  NOT_EMPTY_STRING: new Validator(ValidatorRegex.nonEmptyString, true),
  NOT_EMPTY_STRING_NOT_REQUIRED: new Validator(
    ValidatorRegex.nonEmptyString,
    false
  ),
  NUMBER_REQUIRED: new Validator(ValidatorRegex.number, true),
  TEXTAREA_STRING_NOT_REQUIRED: new Validator(
    ValidatorRegex.textareaString,
    false
  ),
};
