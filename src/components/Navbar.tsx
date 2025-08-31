import { Button } from '@/components/ui/button'

type Props = {
  onLogout: () => void
}

export default function Navbar({ onLogout }: Props) {
  return (
    <header className="w-full border-b border-border/50 bg-card/20 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      <div className="mx-auto max-w-5xl h-14 px-4 flex items-center justify-end">
        <Button size="sm" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </header>
  )
}


