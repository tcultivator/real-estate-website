import { create } from 'zustand'

type MenuStore = {
    DisplayMenuButton: boolean,
    setMenuButtonDisplay: (value: boolean) => void,
}
export const useMenuStore = create<MenuStore>((set) => ({
    DisplayMenuButton: true,
    setMenuButtonDisplay: (value: boolean) => {
        set({
            DisplayMenuButton: value
        })
    },

    

}))