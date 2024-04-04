import { Button } from '@/components/ui/button'
import { LuMail } from 'react-icons/lu'

export function ButtonWithIcon() {
  return (
    <Button>
      <LuMail className="mr-2 h-4 w-4" /> Descriptografar
    </Button>
  )
}
