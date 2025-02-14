import { Facebook, Linkedin, PhoneCall, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const Year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950  text-white z-10 pb-10 pt-20  lg:pb-20 lg:pt-[120px]">
      <div className="mx-auto px-6">
        <div className="-mx-4 flex flex-wrap">
          <FooterSection className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <Link href="/" className="mb-6 inline-block max-w-[160px]">
              <Image
                src="/img/inOgital.png"
                alt="logo"
                width={150}
                height={150}
                className="max-w-full"
              />
            </Link>
            <p className="mb-7 text-base">inOgital is a leading provider of innovative digital solutions.</p>
            <ContactInfo />
          </FooterSection>

          <LinkGroup header="Quick Links">
            <NavLink link="/software" label="Software Development" />
            <NavLink link="/gservices" label="Google Services" />
            <NavLink link="/training" label="Training" />
            <NavLink link="/npos" label="Non-Profit" />
          </LinkGroup>

          <FooterSection className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <h4 className="mb-9 text-lg font-semibold">Contact</h4>
            <Link href="mailto:info@inogital.com" className="text-base text-body-color dark:text-dark-6">info@inogital.com</Link>
          </FooterSection>

          <FooterSection className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <h4 className="mb-9 text-lg font-semibold">Follow Us On</h4>
            <SocialLinks />
            <p className="text-base text-body-color dark:text-dark-6">
              &copy; {Year} inOgital. All rights reserved.
            </p>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
}

const FooterSection = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <div className={`mb-10 w-full ${className}`}>{children}</div>
);

const ContactInfo = () => (
  <p className="flex items-center text-sm font-medium">
    <PhoneCall />
    <span></span>
  </p>
);

const LinkGroup = ({ children, header }: { children: React.ReactNode; header: string }) => (
  <FooterSection className="w-full px-4 sm:w-1/2 lg:w-2/12">
    <h4 className="mb-9 text-lg font-semibold text-dark">{header}</h4>
    <ul className="space-y-3">{children}</ul>
  </FooterSection>
);

const NavLink = ({ link, label }: { link: string; label: string }) => (
  <li>
    <Link
      href={link}
      className="inline-block text-base leading-loose text-body-color hover:text-primary"
    >
      {label}
    </Link>
  </li>
);

const SocialLinks = () => (
  <div className="mb-6 flex items-center">
    <SocialLink href="https://www.linkedin.com/company/inogital" icon={<Linkedin />} />
    <SocialLink href="https://www.facebook.com/inOgital" icon={<Facebook />} />
    <SocialLink href="https://twitter.com/inogital" icon={<Twitter />} />
  </div>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 sm:mr-4 lg:mr-3 xl:mr-4"
  >
    {icon}
  </Link>
);