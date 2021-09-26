import { createClient } from "next-sanity"
import Layout from "../components/layout"
import type { Post } from "../generated/schema"
import { config } from "../lib/config"
import { postQuery } from "../lib/queries"
import { PortableText } from "../lib/sanity"

const client = createClient({
  ...config
})

const Home = ({ title, publishedAt, author, categories, body }: Post) => {
  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <p>
          {new Date(String(publishedAt)).toLocaleDateString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
        <p>by {author}</p>
        {categories && (
          <p>
            in{" "}
            {categories.map((category, index) => (
              <span key={category._id}>
                {category.title}
                {index !== categories.length - 1 ? (
                  <span>, </span>
                ) : (
                  <span></span>
                )}
              </span>
            ))}
          </p>
        )}
        <PortableText blocks={body} />
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const post = await client.fetch(postQuery)
  const { title, publishedAt, author, categories, body }: Post = post
  return {
    props: { title, publishedAt, author, categories, body }
  }
}
