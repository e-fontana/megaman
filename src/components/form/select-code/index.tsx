'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAtom } from 'jotai'
import { selectedState } from './select-state'

export function SelectCode() {
  const [selected, setSelected] = useAtom(selectedState)

  return (
    <div className="w-fit">
      <Select
        defaultValue={selected}
        onValueChange={(value) => setSelected(value)}
      >
        <SelectTrigger className="focus:ring-1 focus:ring-slate-300 focus:ring-offset-0 first:w-[180px] bg-slate-100 ring-1 ring-slate-300 hover:bg-slate-200 duration-150">
          <SelectValue placeholder={selected} />
        </SelectTrigger>
        <SelectContent className="bg-slate-100 border-0">
          <SelectItem value="vigenere" className="cursor-pointer">
            Vigenere
          </SelectItem>
          <SelectItem value="base64" className="cursor-pointer">
            Base64
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
