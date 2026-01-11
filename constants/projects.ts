export type Project = {
  title: string
  image: string
  href: string
  description: string
}

export const projects: Project[] = [
  {
    title: 'Odisha Design Consultancy',
    description: `Designed and launched a digital platform for Odisha Design Consultancy to showcase 18 years of architectural excellence to national and international clients, establishing their online presence and supporting future growth.`,
    image: '/odc.webp',
    href: 'http://odishadesignconsultancy.com/',
  },
  {
    title: 'Pihu Makeup Studio & Salon',
    description:
      'Developed a digital platform for Pihu Makeup Studio to showcase their premium beauty services and luxurious environment, enabling clients to explore and book appointments 24/7.',
    image: '/pihu-makeup-studio-img.webp',
    href: 'https://pihumakeupstudio.com/',
  },
  {
    title: 'Mr. Kalakar Dance Studio',
    description:
      'Created the first digital presence for a growing local dance academy, providing a platform to display their dance styles, programs, and help students explore opportunities from anywhere.',
    image: '/mrkalakarsdancestudio.webp',
    href: 'https://dance-studio-mr-kalakar.vercel.app/',
  },
  {
    title: 'Sili Salon',
    description:
      'Designed a one-page website for Sili Salon, providing a 24/7 digital presence to showcase their beauty services and reach clients anytime, anywhere.',
    image: '/silisalon.webp',
    href: 'https://www.silisalon.com/',
  },
  {
    title: 'Achievers Institute',
    description:
      'Created an all-in-one digital platform for Achievers Institute to showcase their coaching programs, teaching quality, and facilities, helping students and parents explore and connect easily.',
    image: '/achievers-institute.webp',
    href: 'https://achievers-institute.in/',
  },
]
