import React, { useEffect, useState } from 'react'

export default function Home() {
  const [checkoutId, setCheckoutId] = useState('')

  const loadScript = (checkoutId: string) => {
    const script = document.createElement('script')
    console.log({ checkoutId })
    script.src = `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${checkoutId}`
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }

  const getCheckoutId = async () => {
    try {
      const checkoutRes = await fetch(`api/payment/hobex/init`, { method: 'POST' })
      const checkout = await checkoutRes.json()
      setCheckoutId(checkout.checkout.ndc)
    } catch (e) {
      setCheckoutId('')
    }
  }

  useEffect(() => {
    getCheckoutId()
  }, [])

  useEffect(() => {
    if (checkoutId !== '') {
      console.log({ checkoutId })
      loadScript(checkoutId)
    }
  }, [checkoutId])

  return (
    <div>
      <form action={`http://localhost:3000/`} className="paymentWidgets" data-brands="VISA MASTER AMEX"></form>
    </div>
  )
}
