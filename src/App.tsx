import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import SkipSelectionPage from './pages/SkipSelectionPage'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SkipSelectionPage />
    </QueryClientProvider>
  )
}

export default App
