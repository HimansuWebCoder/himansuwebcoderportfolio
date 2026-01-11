"use client";
import { motion } from "motion/react";
import { Linkedin, Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saifullah-khan-4aa554231",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/saif_72437/",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@saif_72437",
    icon: Youtube,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1BHjiSPBYj/?mibextid=wwXIfr",
    icon: Facebook,
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-8 mb-4 flex flex-col items-center justify-center">
      <motion.h3
        initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="text-sm font-medium text-neutral-600 dark:text-neutral-300"
      >
        Or connect with me here
      </motion.h3>

      <div className="mt-4 flex items-center gap-5">
        {socials.map((social, idx) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.4,
                ease: "easeInOut",
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                className="group relative flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 p-3 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-all hover:bg-neutral-200 hover:scale-105 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
              >
                <Icon className="h-4 w-4 text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-white" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
