import {useRouter} from "next/router"
import Link from 'next/link';

function productDetail() {
    const router = useRouter()
    const productId = router.query.productId
    return(
        <>
            <h1>Details on product {productId}</h1>
            <Link href="/product">
            <a>Go Back to product page</a>
            </Link>
        </>
    )
}

export default productDetail
