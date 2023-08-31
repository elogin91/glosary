
import { Form } from '@/components/form';
import WordCard from '@/components/wordCard';
import Image from 'next/image'

export default async function Home() {

  return (
    <div>
      <h1>
        Welcome to the  Glosary for Developers.
      </h1>
      <section>
        <h2>Glosary of Words</h2>
        <article>
          <h3>All words of develop glosary.</h3>
          <WordCard/>    
        </article>
      </section>
    </div >
  )
}
