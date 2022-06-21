import {useRouter} from "next/router"
import Link from 'next/link';

const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: 'product/1',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: 'product/2',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: 'product/3',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: 'product/4',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

function productDetail() {
    const router = useRouter()
    var productId = parseInt(router.query.productId)
    // const singleProduct = products[productId]
    return(
        <>
            <h1>Details on product {productId}</h1>

            {/* <h2> -------  {productId + products[0].name}</h2> */}
            {/* <h3 className="mt-4 text-sm text-gray-700">{products + [productId]+.name}</h3> */}
             {/* {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </a>
              ))} */}
            <Link href="/product">
                <a>Go Back to product page</a>
            </Link>

        </>
    )
}

export default productDetail
