import { ActionContext, ActionTree } from 'vuex'
import { Mutations } from './mutations'
import { State, Items } from './state'
import { MutationTypes } from './mutation-types'
import { ActionTypes } from './action-types'

type ActionArguments = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
  [ActionTypes.StoreItem](
    context: ActionArguments,
    payload: Items,
  ): void
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.StoreItem]({ commit }, payload) {
    commit(MutationTypes.CreateItem, payload)
  },
}
