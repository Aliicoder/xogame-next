import { WINNING_COMBINATIONS } from "@/constants/COMBINATIONS"
import { toast } from "react-toastify"

export const checkForWinner = (currentGame: (string | null)[][]) => {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSimple = currentGame[combination[0].row][combination[0].column]
    const secondSimple = currentGame[combination[1].row][combination[1].column]
    const threeSimple = currentGame[combination[2].row][combination[2].column]
    if (firstSimple && secondSimple && threeSimple)
      if (firstSimple == secondSimple && firstSimple == threeSimple)
        return firstSimple
  }
  return null
}

export const copyUrlToClipboard = () => {
  const currentUrl = window.location.href
  console.log(currentUrl)
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      console.log("URL copied to clipboard")
      alert("URL copied to clipboard")
    })
    .catch((err) => {
      console.error("Failed to copy URL: ", err)
      alert("Failed to copy URL")
    })
}
export const notify = () => {
  toast(`it's your turn`)
}
export const handleWhatsAppShare = () => {
  const url = `https://wa.me/?text=Join my Tic-Tac-Toe game room! ${window.location.href}`
  window.open(url, "_blank")
}

// Function to handle copy link
export const handleCopyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    toast("Link copied to clipboard!")
  })
}
