import _express, { json } from 'express'
import { CheckParam } from './model/check-param'
import axios from 'axios'
import { Check } from './model/request-body'

export const express = _express()
express.use(json())

// settings for server
// url is url for user data fetch
export const setting = {
  url: '',
  port: 3000,
}

// object for all the record
export const checker: Record<
  string,
  (checkParam: CheckParam<any, any>) => boolean | Promise<boolean>
> = {}

// kickstart the server
export function run(url = setting.url, port = setting.port): void {
  setting.url = url
  setting.port = port
  // no url no work
  if (!setting.url || setting.url === '') {
    console.log('Please specify url')
    return
  }
  express.listen(port, () => {
    console.log(`[Express] Server listening on port ${port}`)
  })
}

// check api view model/request-body for body
express.get('/check', async (req, res) => {
  // replace the api
  let url = setting.url
  Object.entries(req.body.user).forEach(([name, value]) => {
    url = url.replace(`{${name}}`, value as string)
  })
  try {
    // fetch user data from user api/database server
    const { data } = await axios.get(url)
    const result: Record<string, boolean> = {}
    // work with async function
    await Promise.all(
      req.body.check.map(async ({ func, param }: Check) => {
        result[func] = await checker[func]({ data, param })
      }),
    )
    res.send(result)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message || error)
  }
})

// if you prefer default import
export default {
  checker,
  express,
  run,
  setting,
}
