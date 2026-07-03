interface GradingType {
  title: string
  description: string
  icon: 'award' | 'award1' | 'star2' | 'bug'
}

// export const StepData = [
export const Grading: GradingType[] = [
  {
    title: 'Standard Card Grading',
    description: 'Standard size, memorabilia & Tallboy cards',
    icon: 'award'
  },
  {
    title: 'Topps Chrome Special',
    description: 'Pricing for standard size raw card grading, crossover & reviews',
    icon: 'award1'
  },
  {
    title: 'TCG Grading',
    description: 'A grading business specializing in Pokemon and sports cards.',
    icon: 'star2'
  },
  {
    title: 'Comic book  & magazine',
    description: 'Tailored grading for comics and magazines',
    icon: 'bug'
  }
]
