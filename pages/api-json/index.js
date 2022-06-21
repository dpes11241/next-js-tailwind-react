import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>

      {ninjas.map(ninja => (
        <Link href={'/api-json/' + ninja.id} key={ninja.id}>
          <a className='single'>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Ninjas;
