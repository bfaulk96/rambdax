import {equals} from './equals'
import {filter} from './filter'

export function whereEq(condition, input) {
  if (arguments.length === 1) {
    return _input => whereEq(condition, _input)
  }

  const result = filter(
    (conditionValue, conditionProp) =>
      equals(conditionValue, input[conditionProp]),
    condition
  )

  return Object.keys(result).length === Object.keys(condition).length
}
