import { useCart } from '../CartContext'

function Cart() {

  const { orderCount, storeOrderId, setStoreOrderId, setOrderCount } = useCart()
  console.log(storeOrderId)

  return (
    <section className="flex flex-col justify-center items-center gap-4 py-12 xl:py-16 px-(--section-content-px)">
      {storeOrderId.map((item) => (
        <div className='h-50 w-50 bg-amber-500'></div>
      ))}
    </section>
  )
}

export default Cart