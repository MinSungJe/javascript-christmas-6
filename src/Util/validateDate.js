import ErrorMessage from '../Constant/ErrorMessage.js';
import { NumberChecker, StringChecker } from '../Service/Checkers.js';
import throwError from './throwError.js';

const validateDateInput = (dateInput) => {
  if (!StringChecker.isNumberString(dateInput)) throwError(ErrorMessage.INVALID_DATE);
  if (!NumberChecker.isRangedNumber(Number(dateInput), 1, 31))
    throwError(ErrorMessage.INVALID_DATE);
};

export default validateDateInput;
