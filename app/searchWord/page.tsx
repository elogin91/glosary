import { Form } from "@/components/form";
import { Search } from "@/components/search";

export default async function Home() {

  return (
    <div>
      <section>
        <article>
          <h1>
           Search a new word to the  Glossary for Developers.
          </h1>
          <form action="">
            <Search />
          </form>
        </article>
      </section>
    </div >
  )
}
