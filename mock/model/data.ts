export interface Data {
  user: User
  courseList: Course[]
}

interface User {
  year: number
}

interface Course {
  id: string
}
