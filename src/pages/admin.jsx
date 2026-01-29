import { useEffect, useState } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
  });

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
    });
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    let imageUrl = form.image;

    if (image) {
      const imageRef = ref(storage, `products/${Date.now()}-${image.name}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    const productData = {
      ...form,
      image: imageUrl,
      usage: form.usage.split(",").map((u) => u.trim()),
      benefits: form.benefits.split(",").map((b) => b.trim()),
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
    <div className="pt-32 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Admin Product Manager
      </h2>

      <div className="grid gap-4 mb-6">
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <select
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="motorPower"
          placeholder="Motor Power"
          value={form.motorPower}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="pelletSize"
          placeholder="Pellet Size"
          value={form.pelletSize}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="dimensions"
          placeholder="Dimensions"
          value={form.dimensions}
          onChange={handleChange}
        />
        <input
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="weight"
          placeholder="Weight"
          value={form.weight}
          onChange={handleChange}
        />

        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          name="usage"
          placeholder="Usage (comma separated)"
          value={form.usage}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          name="benefits"
          placeholder="Benefits (comma separated)"
          value={form.benefits}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          name="notes"
          placeholder="Notes"
          value={form.notes}
          onChange={handleChange}
        />
        <textarea
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
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

        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {editingId ? "Update Product" : "Add Product"}
          </button>

          {editingId && (
            <button
              onClick={resetForm}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <h3 className="text-xl font-semibold mb-4">📦 Existing Products</h3>

      <div className="space-y-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded p-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2"
          >
            <div>
              <strong className="text-gray-800">{p.name}</strong> —{" "}
              <span className="text-gray-600">{p.price}</span>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button className="text-blue-500 hover:underline" onClick={() => handleEdit(p)}>
                ✏️ Edit
              </button>
              <button
                className="text-red-500 hover:underline"
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
