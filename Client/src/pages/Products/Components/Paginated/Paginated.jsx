import fisquierda from "../../../../assets/svg/fisquierda.svg"
import fderecha from "../../../../assets/svg/fderecha.svg"

export default function Paginated() {
  return (
    <div className="flex  items-center">
    <button><img src={fisquierda}/></button><p>Pagina 1/1</p><button><img src={fderecha}/></button>
    </div>
  )
}
