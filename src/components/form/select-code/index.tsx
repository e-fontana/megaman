import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SelectCode() {
  return (
    <div className="w-fit">
      <Select defaultValue="vigenere">
        <SelectTrigger className="focus:ring-1 focus:ring-slate-300 focus:ring-offset-0 first:w-[180px] bg-slate-100 ring-1 ring-slate-300 hover:bg-slate-200 duration-150">
          <SelectValue placeholder="Vigenere" />
        </SelectTrigger>
        <SelectContent className="bg-slate-100 border-0">
          <SelectItem value="vigenere" className="cursor-pointer">
            Vigenere
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
