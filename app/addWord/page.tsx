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
            <h3>Add new word, tags and description, please .</h3>
            <Form />
          </article>
        </section>
      </div >
    )
  }
  