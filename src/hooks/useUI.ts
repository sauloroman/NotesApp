import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { activeSkeletonCreateNote, activeCreateNote, deactiveSkeletonCreateNote } from "../store/ui/ui.slice"

export const useUi = () => {

    const dispatch = useDispatch<any>()

    const { alert, createNote } = useSelector( (state: RootState) => state.ui )

    const openCreateNote = () => {
        dispatch( activeSkeletonCreateNote() )    

        setTimeout(() => {
            dispatch( deactiveSkeletonCreateNote() )
            dispatch( activeCreateNote() )
        }, 1500 )
    }

    return {
        alert,
        createNote,

        openCreateNote
    }

}