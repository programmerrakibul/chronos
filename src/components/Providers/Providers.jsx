"use client";

import AuthProvider from "@/contexts/Auth/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../shared/Footer/Footer";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <header className="bg-neutral/20 backdrop-blur-sm sticky top-0 w-full shadow-sm z-50">
            <Navbar />
          </header>
          <main className="min-h-[75dvh] space-y-20 md:space-y-24">
            {children}
          </main>
          <Footer />
        </QueryClientProvider>
      </AuthProvider>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
};

export default Providers;
