
import { Form } from '@/components/form';
import WordCard from '@/components/wordCard';
import Image from 'next/image'

export default async function Home() {

  return (
    <div>
      <section>
        <article>
          <h1>
            All words of the glossary
          </h1>
          <WordCard />
        </article>
      </section>
    </div >
  )
}
