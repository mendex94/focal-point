import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
import { Input } from '@/components/Input'

export default function Home() {
  return (
    <div>
      <main>
        Hello World
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Checkbox type="submit" />
        <Input placeholder="My custom Input component..." />
      </main>
    </div>
  )
}
