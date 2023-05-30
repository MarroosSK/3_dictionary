import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DictionaryContextProvider } from './context/dictionaryContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <DictionaryContextProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </DictionaryContextProvider>

)
