import { SelectCode } from '../select-code'

export function DataInput({ label }: { label?: string }) {
  return label ? (
    <div className="flex items-center justify-center flex-col gap-5">
      <div className="flex items-center justify-between w-full px-4">
        <label htmlFor={label} className="text-slate-800 font-bold text-2xl">
          {label}
        </label>
        <SelectCode />
      </div>
      <input
        id={label}
        type="text"
        placeholder="Qual codigo você deseja quebrar hoje?"
        className="w-80 rounded-lg ring-1 ring-slate-300 resize-none p-5 focus:outline-none"
        spellCheck="false"
      />
    </div>
  ) : (
    <textarea
      className="h-96 w-80 rounded-lg ring-1 ring-slate-300 resize-none p-5 focus:outline-none"
      spellCheck="false"
    />
  )
}
