export interface Day {
  label: string
  disabled: boolean
  active: boolean
  date: Date
}

export interface Month {
  monthName: string
  filteredDays: Day[]
}
