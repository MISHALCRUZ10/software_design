import Image from "next/image";
import localFont from "next/font/local";
import Card from "./components/Card";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div class="container mx-auto">
  


  <Card/>
  <about/>
  <layout/>

  </div>
    
  </QueryClientProvider>
   
  );
}
