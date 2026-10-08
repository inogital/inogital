import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

import { mainNav } from "@/lib/data/nav"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/img/inOgital.png"
              alt="inOgital"
              width={150}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-zinc-600">
            inOgital is a leading provider of innovative digital solutions.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">Explore</h2>
          <ul className="mt-4 space-y-2">
            {mainNav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-zinc-600 hover:text-zinc-950">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">Company</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-zinc-600 hover:text-zinc-950">
                About
              </Link>
            </li>
            <li>
              <a
                href="mailto:info@inogital.com"
                className="text-sm text-zinc-600 hover:text-zinc-950"
              >
                info@inogital.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-950">Follow us</h2>
          <div className="mt-4 flex items-center gap-3">
            <SocialLink href="https://www.linkedin.com/company/inogital" label="LinkedIn">
              <FaLinkedin className="size-4" />
            </SocialLink>
            <SocialLink href="https://www.facebook.com/inOgital" label="Facebook">
              <FaFacebook className="size-4" />
            </SocialLink>
            <SocialLink href="https://twitter.com/inogital" label="Twitter">
              <FaTwitter className="size-4" />
            </SocialLink>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            &copy; {year} inOgital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="flex size-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
    >
      {children}
    </Link>
  )
}
