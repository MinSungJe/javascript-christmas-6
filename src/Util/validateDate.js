import { NumberChecker, StringChecker } from '../Service/Checkers.js';
import throwError from './throwError.js';

const validateDateInput = (dateInput) => {
  if (!StringChecker.isNumberString) throwError('숫자가 아닙니다.');
  if (!NumberChecker.isRangedNumber(Number(dateInput), 1, 31))
    throwError('범위 내 숫자가 아닙니다.');
};

export default validateDateInput;
