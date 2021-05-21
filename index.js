
const { BitlyClient } = require('bitly')
const { config } = require('./config')
const { form } = require('./form')
const express = require('express')

const app = express()
const bitly = new BitlyClient(config.BIT_LY_TOKEN)

const isPreviewBot = userAgent => {
  const bots = [
    'whatsapp',
    'bot'
  ]

  return bots.find(botName => userAgent.toLowerCase().includes(botName))
}

app.get('/', async (req, res) => {
  const { real, fake } = req.query

  if (!real || !fake) {
    return res.send(form)
  }

  const userAgent = req.headers['user-agent']
  if (!userAgent) {
    return res.redirect(real)
  }

  if (isPreviewBot(userAgent)) {
    return res.redirect(fake)
  }

  return res.redirect(real)
})

app.get('/generate', async (req, res) => {
  const { real, fake } = req.query

  const url = `https://${config.currentHost}?real=${real}&fake=${fake}`
  const text = 'fake preview url: '

  try {
    const { link } = await bitly.shorten(url)
    const response = `${text}${link}`
    return res.send(response)
  } catch (error) {
    console.log(error)
    const response = `${text}${url}`
    return res.send(response)
  }
})

app.listen(3000, () =>
  console.log('app running on 3000'))
