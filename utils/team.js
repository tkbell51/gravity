// Team tiers in display order (matches the Welcome page's team structure)
export const TEAM_TIERS = [
  { key: 'licensed', label: 'Licensed Clinicians & Clinical Supervisors' },
  { key: 'pre-licensed', label: 'Pre-Licensed Clinicians' },
  { key: 'intern', label: 'Clinical Interns' },
]

export const memberSlug = (member) => member.path.split('/').pop()

export const memberInitials = (member) =>
  member.name
    .split(' ')
    .map((part) => part[0])
    .join('')
