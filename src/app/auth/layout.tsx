import Image from 'next/image'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/logo.svg"
            alt="Website Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        {children}
      </div>
    </div>
  )
}