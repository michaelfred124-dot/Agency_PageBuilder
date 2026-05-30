import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeDomain = searchParams.get('storeDomain');
  const storefrontToken = searchParams.get('storefrontToken');

  if (!storeDomain || !storefrontToken) {
    return NextResponse.json({ error: 'Missing storeDomain or storefrontToken' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://${storeDomain}/api/2023-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontToken,
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 24) {
              edges {
                node {
                  id
                  title
                  descriptionHtml
                  handle
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        id
                        price {
                          amount
                          currencyCode
                        }
                        availableForSale
                      }
                    }
                  }
                }
              }
            }
          }
        `
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Shopify API responded with status ${response.status}` }, { status: 502 });
    }

    const result = await response.json();

    if (result.errors) {
      return NextResponse.json({ error: result.errors[0]?.message || 'Shopify GraphQL error' }, { status: 400 });
    }

    const products = (result.data?.products?.edges || []).map((e: any) => ({
      id: e.node.id,
      title: e.node.title,
      handle: e.node.handle,
      image: e.node.images.edges[0]?.node.url || null,
      imageAlt: e.node.images.edges[0]?.node.altText || e.node.title,
      price: e.node.variants.edges[0]?.node.price || null,
      variantId: e.node.variants.edges[0]?.node.id || null,
      available: e.node.variants.edges[0]?.node.availableForSale ?? true,
    }));

    return NextResponse.json({ products });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to connect to Shopify' }, { status: 500 });
  }
}
