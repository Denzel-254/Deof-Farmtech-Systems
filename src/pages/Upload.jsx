import { useEffect } from "react";
import bulkUploadProducts from "../bulkUploadProducts";

export default function UploadPage() {
  useEffect(() => {
    bulkUploadProducts();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Uploading products to Firebase...</h2>
      <p>Check console & Firebase Firestore.</p>
    </div>
  );
}
