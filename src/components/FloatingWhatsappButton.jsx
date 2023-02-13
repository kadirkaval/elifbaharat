import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from "../assets/avatar.png"

export default function FloatingWhatsappButton() {

  return (
    <FloatingWhatsApp
    placeholder="message"
    phoneNumber="+905070084835"
    statusMessage="En kısa sürede cevap verilecektir."
    accountName="elifbaharat - Galip Kaval"
    avatar={avatar}
    chatMessage="Merhaba ! Nasıl yardımcı olabilirim?"
    />
  )
}