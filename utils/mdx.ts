import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export type FrontMatterType = {
  title: string;
  description: string;
  image: string;
  date: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "data", `${slug}.mdx`),
      "utf-8"
    );
    if (!singleBlog) return null;

    const { content, frontmatter } = await compileMDX<FrontMatterType>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    return null;
  }
};

export const getBlogs = async (): Promise<
  Array<FrontMatterType & { slug: string }>
> => {
  const files = await fs.readdir(path.join(process.cwd(), "data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return { slug, ...frontmatter }; // include slug
    })
  );

  return allBlogs;
};


const getBlogFrontMatterBySlug = async (slug: string): Promise<FrontMatterType> => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "data", `${slug}.mdx`),
    "utf-8"
  );

  if (!singleBlog) throw new Error(`Blog not found: ${slug}`);

  const { frontmatter } = await compileMDX<FrontMatterType>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};
