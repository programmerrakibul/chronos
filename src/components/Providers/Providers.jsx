'use client'

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
        <header>
          <Navbar />
        </header>
        <QueryClientProvider client={queryClient}>
          <main className="min-h-[75dvh]">{children}</main>
        </QueryClientProvider>
        <Footer />
      </AuthProvider>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
};

export default Providers;
