import { GetterTree } from 'vuex'
import { State } from './state'
import { GetterTypes } from './getter-types'

export type Getters = {
  [GetterTypes.GetItems](state: State): void
}

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.GetItems](state) {
    return state.items
  },
}
