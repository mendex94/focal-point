import { Button } from './_components/Button'
import { Checkbox } from './_components/Checkbox'

export default function Home() {
  return (
    <div>
      <main>
        Hello World
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Checkbox type="submit" />
      </main>
    </div>
  )
}
