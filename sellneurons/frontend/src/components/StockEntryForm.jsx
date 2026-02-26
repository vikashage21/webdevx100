import React, { useState } from "react";
import Sidebar from "./Sidebar";

const StockEntryForm = () => {
  const [formData, setFormData] = useState({
    lotConcept: "Lot Concept",
    purity: "",
    tags: "",
    vendor: "",
    size: "",
    store: "",
    productName: "",
    tagRef: "",
    costPrice: "",
    retailPrice: "",
    stoneType: "",
    stoneName: "",
    grossWt: "",
    stoneWt: "",
    netWt: "",
    price: "",
    purchaseAmt: "",
    purchaseTouch: "",
    purchaseTouchCode: "",
    purchaseMelting: "",
    hallmarkNo: "",
    hallmarkCenter: "",
    purchaseFlatCharge: "",
    purchaseWastageWt: "",
    purchaseMcFlat: "",
    purchaseNetWt: "",
  });

  const sizeOptions = ["6", "7", "8", "9", "10", "11", "12"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-white p-4 rounded shadow">
          <h1 className="text-lg font-bold">STOCK ENTRY</h1>

          <div className="flex gap-3 w-full md:w-auto">
            <select
              name="lotConcept"
              value={formData.lotConcept}
              onChange={handleChange}
              className="border p-2 rounded w-full md:w-auto"
            >
              <option>Lot Concept</option>
            </select>

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full md:w-auto"
            >
              SAVE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

          {/* LEFT SIDE */}
          <div className="xl:col-span-8 space-y-6">
{/* <Sidebar/> */}
            {/* Product Details */}
            <section className="bg-white p-4 md:p-6 rounded shadow">
              <h2 className="font-bold text-purple-600 mb-4">
                Product Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <SelectField
                  label="Purity"
                  name="purity"
                  value={formData.purity}
                  onChange={handleChange}
                  options={["18K", "22K"]}
                />

                <InputField label="Vendor" name="vendor" value={formData.vendor} onChange={handleChange} />
                <InputField label="Product Name" name="productName" value={formData.productName} onChange={handleChange} />
                <InputField label="Purchase Amount" name="purchaseAmt" value={formData.purchaseAmt} onChange={handleChange} />
                <InputField label="Cost Price" name="costPrice" value={formData.costPrice} onChange={handleChange} />
                <InputField label="Retail Price" name="retailPrice" value={formData.retailPrice} onChange={handleChange} />

                <SelectField
                  label="Tag Type"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  options={["Electronic", "Footwear", "Women's Wear", "Men's Wear"]}
                />

                <SelectField
                  label="To Storage"
                  name="store"
                  value={formData.store}
                  onChange={handleChange}
                  options={["Marathalli", "Domlu", "KR Pura", "Electronic City"]}
                />

                <SelectField
                  label="Size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  options={sizeOptions}
                />

                <InputField label="Price" name="price" value={formData.price} onChange={handleChange} />
                <InputField label="Gross Weight" name="grossWt" value={formData.grossWt} onChange={handleChange} />
                <InputField label="Stone Weight" name="stoneWt" value={formData.stoneWt} onChange={handleChange} />
                <InputField label="Net Weight" name="netWt" value={formData.netWt} onChange={handleChange} />

              </div>
            </section>

            {/* Production Details */}
            <section className="bg-white p-4 md:p-6 rounded shadow">
              <h2 className="font-bold text-blue-600 mb-4">
                Production Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                <InputField label="Tag Ref No." name="tagRef" value={formData.tagRef} onChange={handleChange} />
                <InputField label="Purchase Touch" name="purchaseTouch" value={formData.purchaseTouch} onChange={handleChange} />
                <InputField label="Touch Code" name="purchaseTouchCode" value={formData.purchaseTouchCode} onChange={handleChange} />
                <InputField label="Purchase Melting" name="purchaseMelting" value={formData.purchaseMelting} onChange={handleChange} />
                <InputField label="Hallmark No" name="hallmarkNo" value={formData.hallmarkNo} onChange={handleChange} />
                <InputField label="Hallmark Center" name="hallmarkCenter" value={formData.hallmarkCenter} onChange={handleChange} />
                <InputField label="Flat Charge" name="purchaseFlatCharge" value={formData.purchaseFlatCharge} onChange={handleChange} />
                <InputField label="Wastage Weight" name="purchaseWastageWt" value={formData.purchaseWastageWt} onChange={handleChange} />
                <InputField label="MC Flat" name="purchaseMcFlat" value={formData.purchaseMcFlat} onChange={handleChange} />
                <InputField label="Purchase Net Weight" name="purchaseNetWt" value={formData.purchaseNetWt} onChange={handleChange} />

              </div>
            </section>
          </div>

          {/* RIGHT SIDE */}
          <div className="xl:col-span-4 space-y-6">

            <section className="bg-white p-4 md:p-6 rounded shadow">
              <h2 className="font-semibold mb-4">
                Stone Details
              </h2>

              <InputField label="Stone Type" name="stoneType" value={formData.stoneType} onChange={handleChange} />
              <InputField label="Stone Name" name="stoneName" value={formData.stoneName} onChange={handleChange} />
            </section>

          </div>
        </div>
      </form>
    </div>
  );
};

/* Reusable Input Component */
const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 text-sm">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

/* Reusable Select Component */
const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block mb-1 text-sm">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="border w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option value="">Select</option>
      {options.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default StockEntryForm;