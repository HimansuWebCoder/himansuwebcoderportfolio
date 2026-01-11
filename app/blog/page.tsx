import Container from "@/components/container";
import { getBlogs } from "@/utils/mdx";
// import {Link} from "next-view-transitions";
import Link from "next/link";
import { Metadata } from "next";
import Heading from "@/components/heading";
import SubHeading from "@/components/subheading";
import Scales from "@/components/scales";

export const metadata: Metadata = {
  title: "All blogs - Saifullah Khan",
  description: "All my general wisdom and blogs",
};

const truncate = (str: string, length: number) =>
  str.length > length ? str.substring(0, length) + "..." : str;

export default async function BlogPage() {
  const allBlogs = await getBlogs();

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-10 px-10 md:pt-20 md:pb-10 relative md:px-12">
        <Scales/>

           
        <Heading >
          All blogs
        </Heading>
        <SubHeading >
          I write about web development, mobile apps, freelancing, and modern technologies to inspire and guide both clients and fellow developers.
        </SubHeading>

        <div className="flex flex-col gap-8 py-10 px-4">
          {allBlogs.map((blog, idx) => (
            <Link
              href={`/blog/${blog.slug}`}
              key={idx}
              className="pb-10 block hover:opacity-80 transition"
            >
              <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className=" text-secondary text-sm md:text-sm">
                  {new Date(blog.date).toLocaleString()}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
                {truncate(blog.description ?? "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
