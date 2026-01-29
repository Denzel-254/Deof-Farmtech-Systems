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
    <div style={{ padding: 80, maxWidth: 900, margin: "auto" }}>
      <h2> Admin Product Manager</h2>

      <div style={{ display: "grid", gap: 10 }}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input name="capacity" placeholder="Capacity" value={form.capacity} onChange={handleChange} />
        <input name="motorPower" placeholder="Motor Power" value={form.motorPower} onChange={handleChange} />
        <input name="pelletSize" placeholder="Pellet Size" value={form.pelletSize} onChange={handleChange} />
        <input name="dimensions" placeholder="Dimensions" value={form.dimensions} onChange={handleChange} />
        <input name="weight" placeholder="Weight" value={form.weight} onChange={handleChange} />

        <textarea name="usage" placeholder="Usage (comma separated)" value={form.usage} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <textarea name="benefits" placeholder="Benefits (comma separated)" value={form.benefits} onChange={handleChange} />
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <textarea name="contactInfo" placeholder="Contact Info" value={form.contactInfo} onChange={handleChange} />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button onClick={handleSubmit}>
          {editingId ? "Update Product" : "Add Product"}
        </button>

        {editingId && <button onClick={resetForm}>Cancel Edit</button>}
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h3>📦 Existing Products</h3>

      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}>
          <strong>{p.name}</strong> — {p.price}
          <div style={{ marginTop: 5 }}>
            <button onClick={() => handleEdit(p)}>✏️ Edit</button>
            <button onClick={() => handleDelete(p.id)} style={{ marginLeft: 10 }}>🗑️ Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}