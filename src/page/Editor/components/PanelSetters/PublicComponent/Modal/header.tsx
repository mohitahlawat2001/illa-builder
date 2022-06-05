import { headerCss, closeIconCss } from "./style"
import { CloseIcon } from "@illa-design/icon"
import { HeaderProps } from "./interface"
import { FC } from "react"

const ModalHeader: FC<HeaderProps> = (props) => {
  const { title, handleCloseModal } = props

  return (
    <div css={headerCss}>
      <span>{title}</span>
      <div css={closeIconCss} onClick={handleCloseModal}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default ModalHeader
