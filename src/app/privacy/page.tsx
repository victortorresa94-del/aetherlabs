// app/privacy/page.tsx
export const metadata = {
    title: "Privacidad — Aether Labs",
    description: "No compartimos tus datos. Solo los usamos para responder a tu solicitud."
  };
  
  export default function PrivacyPage() {
    return (
      <main className="section">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-extrabold">Política de privacidad</h1>
          <p className="mt-4 text-gray-700">
            No compartimos tus datos. Solo los usamos para responder a tu solicitud y
            ofrecerte la información que nos pidas. Si quieres que eliminemos tus datos,
            escríbenos y lo haremos de inmediato.
          </p>
        </div>
      </main>
    );
  }
  