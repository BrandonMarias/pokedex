import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { PokedexApp } from './PokedexApp'
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokedexApp />
    </QueryClientProvider>
  </React.StrictMode>
)
