'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-black text-white flex items-center justify-center h-screen flex-col gap-4">
        <h2 className="text-2xl font-bold">Algo salió mal</h2>
        <p className="text-gray-400">Ha ocurrido un error crítico.</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Intentar de nuevo
        </button>
      </body>
    </html>
  )
}