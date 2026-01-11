import React from 'react'
import Marquee from 'react-fast-marquee'
import SectionHeading from './section-heading'
import Image from 'next/image'

function Testimonials() {
    const data = [
        {
            quote: `⭐⭐⭐⭐⭐ Thank you so much! The profile, website, and everything else have been designed beautifully. We are really thankful for your help.`,
            name: 'Mausumi Das — Business Owner, M.R Kalakars Dance Studio',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop',
        },
        {
            quote: `⭐⭐⭐⭐⭐ Exceptional work quality and attention to detail. Delivered beyond expectations and on time.`,
            name: 'Annapurna Nayak — Business Owner, Pihu Makeup Studio & Salon',
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=600&auto=format&fit=crop',
        },
        {
            quote: `⭐⭐⭐⭐⭐ Himansu helped take my business online with Google setup and a great website.`,
            name: 'Subhadra Tripathy — Business Owner, Sili Salon',
            avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop',
        },
        {
            quote: `⭐⭐⭐⭐⭐ Excellent online built website and google my business setup very well.`,
            name: 'Shehenza Parween — Business Owner, Achievers Institute',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
        },
        // {
        //     quote: `⭐⭐⭐⭐⭐ ed improvements that made the product better.`,
        //     name: 'Sofia Andersson — Project Lead, GreenTech',
        //     avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop',
        // },
    ]

    return (
        <div className="py-10 px-4 my-4   ">
            <SectionHeading className="mb-4" delay={1.2}>
                People love my work
            </SectionHeading>
            <div
                className="flex gap-10  
                [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
      [mask-repeat:no-repeat]
      [mask-size:100%_100%]
      [-webkit-mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]
      [-webkit-mask-repeat:no-repeat]
      [-webkit-mask-size:100%_100%]
            "
            >
                <Marquee speed={30} pauseOnHover={true} className="py-4 ">
                    {data.map((item, idx) => (
                        <TestimonialsCard key={idx} {...item} />
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonials

const TestimonialsCard = ({
    quote,
    name,
    avatar,
}: {
    quote: string
    name: string
    avatar: string
}) => {
    return (
        <div className=" mx-4 flex flex-col justify-between gap-4 shadow-aceternity hover:shadow-md transition-all duration-300 w-full max-w-60 h-50 p-4 rounded-xl ">
            <p className="text-sm text-neutral-700 dark:text-[#E5E5E5] ">
                {quote}
            </p>
            <div className="flex items-center gap-4">
                <Image
                    src={avatar}
                    width={64}
                    height={64}
                    alt={name}
                    className="size-4 rounded-full object-cover"
                />
                <p className="text-sm text-neutral-500 dark:text-[#c2c1c1de] ">
                    {name}
                </p>
            </div>
        </div>
    )
}
