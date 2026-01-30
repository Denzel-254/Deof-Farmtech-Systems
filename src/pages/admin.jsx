import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const categories = [
  "Feed Processing Equipment",
  "Fodder & Silage Equipment",
  "Waste Management & Recycling Equipment",
  "Poultry Equipment",
  "Poultry Housing Equipment",
  "Poultry Transport Equipment",
];

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    capacity: "",
    motorPower: "",
    pelletSize: "",
    dimensions: "",
    weight: "",
    usage: "",
    description: "",
    benefits: "",
    notes: "",
    contactInfo: "",
    image: "",
  });

  // ✅ Cloudinary upload (FIXED)
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    // 🔥 CHANGE THIS to your REAL upload preset (NO spaces)
    formData.append("upload_preset", "testing");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyk8rpf7f/auto/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

     console.log("🔥 Cloudinary response:", data); // ADD THIS

    if (!data.secure_url) {
      console.error("Cloudinary error:", data);
      throw new Error("Cloudinary upload failed");
    }

    return data.secure_url;
  };

  const fetchProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: "",
      price: "",
      category: "",
      capacity: "",
      motorPower: "",
      pelletSize: "",
      dimensions: "",
      weight: "",
      usage: "",
      description: "",
      benefits: "",
      notes: "",
      contactInfo: "",
      image: "",
    });
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      let imageUrl = form.image;

      if (image) {
        imageUrl = await uploadToCloudinary(image);
      }

      const productData = {
        ...form,
        image: imageUrl,
        usage: form.usage ? form.usage.split(",").map((u) => u.trim()) : [],
        benefits: form.benefits
          ? form.benefits.split(",").map((b) => b.trim())
          : [],
      };

      if (editingId) {
        await updateDoc(doc(db, "products", editingId), productData);
        alert("✅ Product updated!");
      } else {
        await addDoc(collection(db, "products"), productData);
        alert("✅ Product added!");
      }

      resetForm();
      fetchProducts();
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ Upload failed. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      ...product,
      usage: product.usage?.join(", "),
      benefits: product.benefits?.join(", "),
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  return (
    <div className="pt-32 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        🛠️ Admin Product Manager
      </h2>

      {/* FORM */}
      <div className="grid gap-4 mb-8 bg-white p-6 rounded-xl shadow-lg">
        <input
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          name="price"
          placeholder="Price (KES)"
          value={form.price}
          onChange={handleChange}
        />

        <select
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          className="border rounded px-3 py-2"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2"
          name="motorPower"
          placeholder="Motor Power"
          value={form.motorPower}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2"
          name="pelletSize"
          placeholder="Pellet Size"
          value={form.pelletSize}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2"
          name="dimensions"
          placeholder="Dimensions"
          value={form.dimensions}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2"
          name="weight"
          placeholder="Weight"
          value={form.weight}
          onChange={handleChange}
        />

        <textarea
          className="border rounded px-3 py-2"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2"
          name="usage"
          placeholder="Usage (comma separated)"
          value={form.usage}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2"
          name="benefits"
          placeholder="Benefits (comma separated)"
          value={form.benefits}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2"
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2"
          name="contactInfo"
          placeholder="Contact Info"
          value={form.contactInfo}
          onChange={handleChange}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="py-2"
        />

        <div className="flex gap-3">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition disabled:opacity-50"
          >
            {loading
              ? "Uploading..."
              : editingId
                ? "Update Product"
                : "Add Product"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      {/* PRODUCTS LIST */}
      <h3 className="text-xl font-semibold mb-4">📦 Existing Products</h3>

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 bg-white shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
          >
            <div>
              <strong className="text-gray-800">{p.name}</strong>
              <p className="text-gray-600 text-sm">{p.price}</p>
            </div>

            <div className="flex gap-3">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => handleEdit(p)}
              >
                ✏️ Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDelete(p.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
