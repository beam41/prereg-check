import 'module-alias/register'
import { checker, run } from '@/prereq-core'
import { mustBeYearThree, moreThanNumOfCourse } from './checker/prereq'

checker.mustBeYearThree = mustBeYearThree
checker.moreThanNumOfCourse = moreThanNumOfCourse

run('http://localhost:8888/userdata/{id}')
