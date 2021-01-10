import express, { Express } from "express"
import cors from "cors"
import searchRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4001

app.use(cors())
app.use(searchRoutes)

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)


/*
mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
  */