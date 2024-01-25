import { FaXmark } from "react-icons/fa6"
import { closeModal } from "./ModalActions"

export const ModalHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-3xl">Login</h5>
      <FaXmark className="text-2xl cursor-pointer" onClick={closeModal} />
    </div>
  )
}
