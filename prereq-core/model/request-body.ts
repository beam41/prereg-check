export interface RequestBody {
  user: any
  check: Check
}

export interface Check {
  func: string
  param: any
}
