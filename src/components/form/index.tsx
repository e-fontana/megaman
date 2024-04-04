'use client'
import { Button } from '@/components/ui/button'
import { base64Decode } from '@/utils/base64'
import { vigenereDecoder } from '@/utils/vigenere'
import { useAtom } from 'jotai'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PiKeyLight } from 'react-icons/pi'
import { SelectCode } from './select-code'
import { selectedState } from './select-code/select-state'

type FormValues = {
  inputCode: string
  inputKey?: string
}

export function MainForm() {
  const [selectedCipher] = useAtom(selectedState)
  const [output, setOutput] = useState('')
  const { handleSubmit, register } = useForm<FormValues>()

  function handleTransformation(data: FormValues) {
    if (selectedCipher === 'base64')
      return setOutput(base64Decode(data.inputCode))
    return setOutput(
      vigenereDecoder({ text: data.inputCode, key: data.inputKey }),
    )
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleTransformation)}
        className="flex items-center justify-center flex-col w-full"
      >
        <div className="flex items-center justify-center gap-6 py-5">
          <div className="flex items-center justify-center flex-col gap-5">
            <div className="flex items-center justify-between w-full px-4">
              <label
                htmlFor="Input"
                className="text-slate-800 font-bold text-2xl"
              >
                Codigo:
              </label>
              <SelectCode />
            </div>
            <input
              id="Input"
              type="text"
              placeholder="Qual codigo você deseja quebrar hoje?"
              className="w-80 rounded-lg ring-1 ring-slate-300 resize-none p-5 focus:outline-none"
              spellCheck="false"
              {...register('inputCode')}
            />
            {selectedCipher === 'vigenere' && (
              <input
                id="Input"
                type="text"
                placeholder="Qual a chave do código?"
                className="w-80 rounded-lg ring-1 ring-slate-300 resize-none p-5 focus:outline-none"
                spellCheck="false"
                {...register('inputKey')}
              />
            )}
          </div>
        </div>
        <Button className="bg-slate-600 hover:bg-slate-700 duration-200 w-80">
          <PiKeyLight className="mr-2 h-4 w-4" /> Descriptografar
        </Button>
      </form>
      {output.length > 0 && (
        <div className="flex items-center justify-center py-8">
          <div className="p-3 border border-green-300 rounded-lg w-80 text-center flex flex-col">
            <span>Resposta do enigma:</span>
            <span className="font-bold">{output}</span>
          </div>
        </div>
      )}
    </div>
  )
}
