import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function adjustFn(index, replaceFn, list) {
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = cloneList(list)
  clone[actualIndex] = replaceFn(clone[actualIndex])

  return clone
}

export const adjust = curry(adjustFn)
