import { MutationTree } from 'vuex'
import { State, Items } from './state'
import { MutationTypes } from './mutation-types'

export type Mutations = {
  [MutationTypes.CreateItem](state: State, item: Items): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.CreateItem](state, item) {
    state.items.push(item)
  },
}
