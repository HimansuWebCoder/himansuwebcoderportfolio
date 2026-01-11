import Container from "@/components/container";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSingleBlog } from "@/utils/mdx";
import Scales from "@/components/scales";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All blogs - Saifullah Khan",
  description: "All my general wisdom and blogs",
};

// 👇 Fix: params & searchParams should be Promises in Next.js 14+
type SingleBlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = await params; // ✅ Await the params (required in prod build)

  const blog = await getSingleBlog(slug);

  if (!blog) redirect("/blog");

  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Scales />
        <Image
          src={frontmatter.image || "/assets/placeholder.png"}
          alt={frontmatter.title}
          width={800} // ✅ add width and height to satisfy next/image optimization
          height={400}
          className="w-full max-h-96 object-cover shadow-xl rounded-2xl mb-20 max-w-2xl mx-auto"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
