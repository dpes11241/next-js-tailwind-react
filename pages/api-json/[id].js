import Link from 'next/link'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}


const Details = ({ ninja }) => {
  return (
   <>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1>{ ninja.name }</h1>
        <p>{ ninja.email }</p>
        <p>{ ninja.website }</p>
        <p>{ ninja.address.city }</p>
        <div className='spacer'></div>
        <Link href={'/api-json'}>
                    <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
                      Go Back
                    </a>
      </Link>
      </div>


      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='spacer'></div>
    </>
  );
}

export default Details;
