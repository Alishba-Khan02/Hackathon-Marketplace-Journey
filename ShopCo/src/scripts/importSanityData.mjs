import { createClient } from '@sanity/client';
import dotenv from 'dotenv'
const client = createClient({
  projectId: "6pl0nbg4",
  dataset: "production",
  useCdn: false,
  apiVersion: '2025-01-13',
  token: "sk4ElMcgJ7XaeTmY181WPznlKzkCzMBJquFwv8ZAkMDUzeFuCXnrUUiTgfUTomgUOUa3m8nDLHyg8XXUn2R82k2D20DrqaqvWRiYqnCn6fPWzFJBBDwHxNoWtQoTKuf85245hTQuN7ebu2OAwppaljE3gyEVpCesdnnCsYjPYgYaA7hQiglC"
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
      };
      console.log("UPloading .....")
      const createdProduct = await client.create(document);
      console.log("product  upload .....")

      // console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');
    console.log("response",response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    console.log("products",products)
    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();
export default client;