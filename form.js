const form = `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>fake preview</title>
  </head>
  <body>
    <center>
      <h1>fake preview</h1>
      <form action="/generate" method="get">
        <input type="text" name="real" id="real" placeholder="Real url" autofocus />
        <input type="text" name="fake" id="fake" placeholder="Fake url used on preview" />
        <button type="submit" aria-label="Generate URL">Generate URL</button>
      </form>
    </center>
  </body>
</html>
`

module.exports = {
  form
}
