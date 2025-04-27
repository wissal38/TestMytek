import Header from "@/components/Header";
import StoresGrid from "@/components/StoresGrid";
import Footer from "@/components/Footer";

export default function StoresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <StoresGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}