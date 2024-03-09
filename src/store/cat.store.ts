import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type State = {
    name: string
    age: number
}
type Actions = {
    getFish: (name: string) => void
}
const useProductStore = create<State & Actions>()(
    persist(
        (set, get) => ({
            name: '猫',
            age: 1,
            getFish(name) {
                console.log(get().name)
                set({ name })
            },
        }),

        {
            name: 'zustand:cat',
            storage: createJSONStorage(() => sessionStorage)
        } // 默认为 localStorage
    )
)
export default useProductStore
export const useBeeStore = create(
    immer((set) => ({
        bees: 0,
        addBees: (by: number) =>
            set((state: { bees: number }) => {
                state.bees += by
            }),
    })),
)
