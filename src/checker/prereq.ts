import { CheckParam } from '@/prereq-core/model'
import { Data } from '../model/data'

export function mustBeYearThree({
  data,
}: CheckParam<Data, undefined>): boolean {
  return data.user.year > 3
}

export function moreThanNumOfCourse({
  data,
  param,
}: CheckParam<Data, number>): Promise<boolean> {
  // test for async
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.courseList.length > param)
    }, 1250)
  })
}
