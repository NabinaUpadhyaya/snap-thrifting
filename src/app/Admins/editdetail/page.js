"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "../../components/useAuth";

const EditProductPage = () => {
  const { user, loading: loadingUser } = useAuth(); // Get user data if needed
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) {
      console.error("Product ID is missing");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://snap-thrift-backend.onrender.com/products/getProductById/${productId}`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) throw new Error("Failed to load product data");

        const data = await response.json();
        // Assuming your API returns the product object directly or wrapped in data.data
        const productData = data.data ? data.data : data;

        // Map API response fields to your form's state structure.
        const mappedData = {
          productName: productData.name,
          productPrice: productData.price,
          productDescription: productData.description,
          productSize: productData.size,
          productCategory: productData.category,
          productDiscolor: productData.discolor ? "yes" : "no",
          productCondition: productData.condition,
          productTear: productData.tear ? "yes" : "no",
          productImage1:
            productData.images && productData.images[0]
              ? productData.images[0].url
              : "",
          productImage2:
            productData.images && productData.images[1]
              ? productData.images[1].url
              : "",
        };

        console.log("Mapped Product Data:", mappedData);
        setFormData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("description", formData.productDescription);
    form.append("size", formData.productSize.toUpperCase());
    form.append("discolor", formData.productDiscolor === "yes");
    form.append("condition", formData.productCondition.toLowerCase());
    form.append("tear", formData.productTear === "yes");
    form.append("category", formData.productCategory.toLowerCase());

    if (formData.productImage1 && typeof formData.productImage1 !== "string") {
      form.append("images", formData.productImage1);
    }
    if (formData.productImage2 && typeof formData.productImage2 !== "string") {
      form.append("images", formData.productImage2);
    }

    try {
      const response = await fetch(
        `https://snap-thrift-backend.onrender.com/products/updateProduct/${productId}`,
        {
          method: "PUT",
          credentials: "include",
          body: form,
        }
      );
      const data = await response.json();

      if (response.ok) {
        alert("Product updated successfully!");
        router.push("/Admins/manageproducts"); // Redirect to manage products page
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert("There was an error updating the product. Please try again.");
    }
  };

  if (loading || !formData) return <p>Loading product data...</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="font-bold text-2xl mb-6 text-center">Edit Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName || ""}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="productPrice">Product Price</label>
            <input
              type="text"
              id="productPrice"
              name="productPrice"
              value={formData.productPrice || ""}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="productDescription">Product Description</label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription || ""}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="productSize">Size</label>
            <select
              id="productSize"
              name="productSize"
              value={formData.productSize || "S"}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="productCategory">Category</label>
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory || "clothing"}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="clothing">Clothing</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="productImage1">Product Image 1</label>
              {formData.productImage1 &&
                typeof formData.productImage1 === "string" && (
                  <img
                    src={formData.productImage1}
                    alt="Product 1"
                    className="w-20 h-20 object-cover"
                  />
                )}
              <input
                type="file"
                id="productImage1"
                name="productImage1"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="productImage2">Product Image 2</label>
              {formData.productImage2 &&
                typeof formData.productImage2 === "string" && (
                  <img
                    src={formData.productImage2}
                    alt="Product 2"
                    className="w-20 h-20 object-cover"
                  />
                )}
              <input
                type="file"
                id="productImage2"
                name="productImage2"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
