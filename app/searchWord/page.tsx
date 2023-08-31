import { Form } from "@/components/form";

export default async function Home() {

    return (
      <div>
        <h1>
          Add a new word to the  Glosary for Developers.
        </h1>
        <section>
          <h2>Glosary of Words</h2>
          <article>
            <h3>Insert a word to search his description.</h3>
            <form action="">
              <label htmlFor="">Word</label>
              <input type="text" />
            </form>

          </article>
        </section>
      </div >
    )
  }
  