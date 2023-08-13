import { useBaseComponent } from "@base/BaseComponent"
import { useAppSelector } from "@redux/hooks"
import { openLoginModal } from "@redux/slices/modals/modalsSlice"
import { Modal } from "../base/Modal"

export const LoginModal = () => {
    const { loginModal } = useAppSelector(state => state.modals)
    const { dispatch } = useBaseComponent()
    const { isOpen, data } = loginModal
    return (
        <Modal isOpen={isOpen} onClose={() => {
            dispatch(openLoginModal({isOpen:false , data:''}))
        }} >
            <p>{data}</p>
        </Modal>
    )
}
