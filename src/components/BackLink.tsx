import { useNavigate } from 'react-router-dom'

export default function BackLink() {
  const navigate = useNavigate()
  return (
    <div className="p-6">
      <div
        role="link"
        tabIndex={0}
        onClick={() => navigate(-1)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(-1) }}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer select-none"
      >
        <span aria-hidden>←</span>
        <span>Back</span>
      </div>
    </div>
  )
}


