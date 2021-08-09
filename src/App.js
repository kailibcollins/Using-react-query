import { QueryClient, QueryClientProvider } from 'react-query'
import Query from './components/Query'

const queryClient = new QueryClient()

export default function App() {
   return (
    
   <QueryClientProvider client={queryClient}>
     <Query/>


    
    </QueryClientProvider>
   
   )
 }

 





   