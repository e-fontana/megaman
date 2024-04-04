import { DataInput } from './input'

export function Form() {
  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div className="flex items-center justify-center gap-6 py-5">
        <DataInput label="Input" />
      </div>
      <div>
        <input
          type="text"
          className="w-80 rounded-md h-10 p-5 ring-1 ring-slate-300 outline-none"
          placeholder="Qual a chave?"
        />
      </div>
    </div>
  )
}
