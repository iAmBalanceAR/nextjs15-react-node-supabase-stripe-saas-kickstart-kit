import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export const getStripeSession = async ({
  priceId,
  userId,
  domain,
}: {
  priceId: string
  userId: string
  domain: string
}) => {
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'required',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${domain}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domain}/pricing`,
    client_reference_id: userId,
    customer_email: undefined, // Will be set by Stripe based on the authenticated user
    subscription_data: {
      metadata: {
        userId,
      },
    },
    payment_method_types: ['card'],
  })

  return session
}

export const getStripeCustomerPortalSession = async ({
  customerId,
  domain,
}: {
  customerId: string
  domain: string
}) => {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${domain}/dashboard`,
  })

  return session
} 