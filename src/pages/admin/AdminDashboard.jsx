import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";

import { auth } from "../../services/firebase/config";

import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../services/firebase/products";

import { uploadImageToCloudinary } from "../../services/cloudinary";

import toast from "react-hot-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showAddForm, setShowAddForm] = useState(false);

  const [editingProductId, setEditingProductId] = useState(null);

  const [title, setTitle] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const [uploadingImage, setUploadingImage] = useState(false);

  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");

    setPrice("");

    setCategory("");

    setDescription("");

    setImage("");

    setImageFile(null);

    setEditingProductId(null);

    setInStock(true);

    setShowAddForm(false);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      setUploadingImage(true);

      let uploadedImageUrl = image;

      if (imageFile) {
        uploadedImageUrl = await uploadImageToCloudinary(imageFile);
      }

      const productData = {
        title,
        price: Number(price),
        category,
        description,
        image: uploadedImageUrl,
        inStock,
      };

      if (editingProductId) {
        await updateProduct(editingProductId, productData);

        toast.success("Product updated successfully!");
      } else {
        await addProduct(productData);

        toast.success("Product added successfully!");
      }

      resetForm();

      fetchProducts();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      toast.success("Product deleted successfully!");

      fetchProducts();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete product");
    }
  };

  const handleEdit = (product) => {
    setEditingProductId(product.id);

    setTitle(product.title);

    setPrice(product.price);

    setCategory(product.category);

    setDescription(product.description);

    setImage(product.image);

    setInStock(product.inStock);

    setShowAddForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/admin/login");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <section className="p-10">
        <p>Loading dashboard...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f8f5f2] p-4 sm:p-6 lg:p-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
        <div>
          <p className="uppercase tracking-[4px] text-sm text-[#b59b82] mb-3">
            PREETHIZIGN ADMIN
          </p>

          <h1 className="text-4xl sm:text-5xl">Dashboard</h1>
        </div>

        <button
          onClick={handleLogout}
          className="bg-black text-white px-7 py-4 rounded-2xl hover:bg-[#b38b59] transition duration-300 cursor-pointer w-full sm:w-fit"
        >
          Logout
        </button>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="border border-[#efe7de] rounded-[35px] p-5 sm:p-7 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">
          <h2 className="text-3xl sm:text-4xl">Products</h2>

          <button
            onClick={() => {
              resetForm();

              setShowAddForm(true);
            }}
            className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-[#b38b59] transition duration-300 cursor-pointer w-full sm:w-fit"
          >
            + Add Product
          </button>
        </div>

        {/* FORM */}
        {showAddForm && (
          <form
            onSubmit={handleAddProduct}
            className="border border-[#efe7de] rounded-[30px] p-5 sm:p-7 mb-10 space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl mb-6">
              {editingProductId ? "Edit Product" : "Add Product"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-[#e5ddd3] px-5 py-4 rounded-xl outline-none"
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-[#e5ddd3] px-5 py-4 rounded-xl outline-none"
                required
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
w-full
border
border-[#e5ddd3]
px-5
py-4
rounded-xl
outline-none
bg-white
text-sm
"
                required
              >
                <option value="">Select Category</option>

                <option value="Keychains">Keychains</option>

                <option value="Refrigerator Magnets">
                  Refrigerator Magnets
                </option>

                <option value="Desk Buddies">Desk Buddies</option>
              </select>

              <select
                value={inStock}
                onChange={(e) => setInStock(e.target.value === "true")}
                className="w-full border border-[#e5ddd3] px-5 py-4 rounded-xl outline-none bg-white"
              >
                <option value="true">Available</option>

                <option value="false">Sold Out</option>
              </select>

              {/* IMAGE INPUT */}
              <div className="space-y-4 md:col-span-2">
                <label className="inline-block">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];

                      setImageFile(file);

                      if (file) {
                        setImage(URL.createObjectURL(file));
                      }
                    }}
                  />

                  <span className="bg-black text-white px-6 py-4 rounded-2xl cursor-pointer hover:bg-[#b38b59] transition duration-300 inline-block">
                    Upload Product Image
                  </span>
                </label>

                {imageFile && (
                  <p className="text-sm text-[#777]">
                    Selected: {imageFile.name}
                  </p>
                )}

                {uploadingImage && (
                  <p className="text-sm text-[#b59b82]">Uploading image...</p>
                )}

                {image && (
                  <div className="border border-[#efe7de] rounded-2xl p-3 w-fit">
                    <img
                      src={image}
                      alt="Preview"
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="5"
              className="w-full border border-[#e5ddd3] px-5 py-4 rounded-xl outline-none resize-none"
              required
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                type="submit"
                disabled={uploadingImage}
                className="
bg-black
text-white
px-8
py-4
rounded-2xl
hover:bg-[#b38b59]
transition
duration-300
cursor-pointer
disabled:opacity-50
w-full
sm:w-auto
"
              >
                {uploadingImage
                  ? "Uploading..."
                  : editingProductId
                    ? "Update Product"
                    : "Add Product"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="
border
border-black
px-8
py-4
rounded-2xl
hover:bg-black
hover:text-white
transition
duration-300
cursor-pointer
w-full
sm:w-auto
"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white
border
border-[#efe7de]
rounded-[30px]
overflow-hidden
shadow-sm
hover:shadow-md
transition-all
duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[170px] sm:h-[260px] object-cover"
              />

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <p className="uppercase tracking-[4px] text-xs text-[#b59b82]">
                    {product.category}
                  </p>

                  <span
                    className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${
                      product.inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.inStock ? "Available" : "Sold Out"}
                  </span>
                </div>

                <h3 className="text-lg sm:text-3xl leading-tight break-words mb-3">
                  {product.title}
                </h3>

                <p className="text-lg sm:text-2xl mb-4">₹{product.price}</p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleEdit(product)}
                    className="border border-black px-5 py-3 rounded-2xl hover:bg-black hover:text-white transition duration-300 cursor-pointer"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-5 py-3 rounded-2xl hover:bg-red-600 transition duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
