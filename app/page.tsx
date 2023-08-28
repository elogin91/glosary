
import { Form } from '@/components/form';
import WordCard from '@/components/wordCard';
import Image from 'next/image'

export default async function Home() {

    // const words = await word.find();

  return (
    <div>
      <h1>
        Welcome to the  Glosary for Developers.
      </h1>
      <section>
        <h2>Glosary of Words</h2>
        <article>
          <h3>Introduce nuevas palabras en el glosario.</h3>
          <Form />
        </article>
        <article>
          <h3>Palabras de mi glosario.</h3>
          <WordCard/>    
        </article>
      </section>
    </div >
  )
}
