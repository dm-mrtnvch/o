import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const pages = [
  { to: '/route1', title: 'Test component 1', description: 'some description' },
  { to: '/route2', title: 'Test component 2', description: 'some description' },
  { to: '/route3', title: 'Test component 3', description: 'some description' },
  { to: '/route4', title: 'Test component 4', description: 'some description' },
]

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map(({ to, title, description }) => (
          <div key={to} className="group w-full" role="button" tabIndex={0} onClick={() => navigate(to)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(to) }}>
            <Card className="transition-all cursor-pointer bg-card hover:bg-card/70 hover:ring-2 hover:ring-primary/50">
              <CardHeader>
                <CardTitle className="text-base text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-sm text-muted-foreground">{description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}


