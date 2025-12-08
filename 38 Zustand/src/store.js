import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

const store = (set, get) => ({
    count: 1,
    name: 'manas kumar lal',
    increment: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    capitalizeName: () => {
        const { name } = get();
        set({
            name: name.charAt(0).toUpperCase() + name.slice(1)
        })
    }
})

const useMyStore = create(
    devtools(
        persist(store, {
            name: 'My Store'
        })
    )
)
export default useMyStore;