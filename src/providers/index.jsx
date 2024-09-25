import { Button } from "@/components/ui/button"
import { useRouter } from "@/routes/hooks"
  import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./theme-provider"
import { SidebarProvider } from "@/hooks/use-sidebar"

 
const ErrorFallback = ({ error }) => {
  const router = useRouter()
  console.log("error", error)
  return (
    <div
      className="flex h-screen w-screen flex-col items-center  justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-2xl font-semibold">
        Ooops, something went wrong :({" "}
      </h2>
      <pre className="text-2xl font-bold">{error.message}</pre>
      <pre>{error.stack}</pre>
      <Button className="mt-4" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  )
}

export default function AppProvider({ children }) {
  return (
    <Suspense>
      <HelmetProvider>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            
              {/* <ThemeProvider storageKey="vite-ui-theme"> */}
                <SidebarProvider>{children}</SidebarProvider>
              {/* </ThemeProvider> */}
             
          </ErrorBoundary>
        </BrowserRouter>
      </HelmetProvider>
    </Suspense>
  )
}
