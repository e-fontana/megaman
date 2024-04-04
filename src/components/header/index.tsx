import Image from 'next/image'
import MegamanGIF from '../../../public/megaman-header.gif'

export function Header() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image src={MegamanGIF} width={100} height={100} alt="Megaman 2.0" />
      <div className="flex items-end gap-1">
        <h1 className="text-3xl font-bold">Megaman</h1>
        <span className="font-semibold right-0 text-zinc-600">v2</span>
      </div>
    </div>
  )
}
