// src/app/product/[id].js
import { useRouter } from 'next/router';
import { items as clothingItems } from '../../data/clothingitems';
import { items as shoeItems } from '../../data/shoeitems';
import { items as accessoryItems } from '../../data/accessoriesitems';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Extract product ID from URL

  // Find the product based on the ID
  const product = [
    ...clothingItems,
    ...shoeItems,
    ...accessoryItems,
  ].find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>; // Handle case if product doesn't exist
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.mainImage} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: Rs. {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Size: {product.size}</p>
      <p>Condition: {product.condition}</p>
      <p>Discolor: {product.discolor}</p>
      <p>Tear: {product.tear}</p>
    </div>
  );
};

export default ProductDetail;
