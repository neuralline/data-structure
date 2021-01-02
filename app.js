/**
 * Javascript Algorithms.
 * Functional javascript using pure, recursive, compositing and ....
 * @Licence Don't use this code for anything ever! :) but if you do, give credit where credit is due, MIT.
 * @author Darik.
 * @GitHub neuralline
 *
 */

const arr1 = [
  ['name', 'id', 'age', 'weight', 'Cool'],
  ['Susan', '3', '20', '120', true],
  ['John', '1', '21', '150', true],
  ['Bob', '2', '23', '90', false],
  ['Ben', '4', '20', '100', true]
]

const arr2 = [
  ['name', 'id', 'height'],
  ['Bob', '2', '50'],
  ['John', '1', '45'],
  ['Ben', '4', '43'],
  ['Susan', '3', '48']
]

const arr3 = [
  ['name', 'id', 'parent'],
  ['Bob', '2', 'yes'],
  ['John', '1', 'yes']
]

/** */
/**
 * @param {[string, ...string[]]} input
 */
const parseTable = input => {
  const [headings, ...users] = input
  return users.map(user => {
    return connectTables(headings, user)
  })
}

/** */
const connectTables = (titles, column) => {
  const state = {}
  column.map((row, index) => {
    state[titles[index]] = row
  })
  return { ...state }
}

/** */
const mergeIntoState = (state = []) => {
  const stateAccumulator = []
  state.map(current => {
    const index = stateAccumulator.findIndex(person => person.id === current.id)
    if (index >= 0) {
      stateAccumulator[index] = { ...stateAccumulator[index], ...current }
    } else {
      stateAccumulator.push(current)
    }
  })
  return [...stateAccumulator]
}

const main = (tables = []) => {
  const mixedState = tables.map(table => parseTable(table)).flat()
  return mergeIntoState(mixedState)
}

/**
 *
 * usage
 */
console.table('tablesIntoState: ', main([arr1, arr2, arr3]))
