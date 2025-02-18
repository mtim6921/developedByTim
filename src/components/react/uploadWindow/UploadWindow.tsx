import Dropdown, { type DropdownOptions } from "../UI/Dropdown";
import SelectableFilter from "../UI/SelectableFilter";
import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";
import Checkbox from "../UI/Checkbox";
import { FilmColorType, FilmFormatType, FilmOrientationType, FilmSpeedType, FilmStockType } from "../UI/types";
import { useState } from "react";
export const filmOrientationOptions: DropdownOptions<any>[] = Object.entries(FilmOrientationType).map(([key, text]) => ({
    key,
    text,
  }));
 // Film Stock Options
export const filmStockOptions: DropdownOptions<any>[] = Object.entries(FilmStockType).map(([key, text]) => ({
    key,
    text,
  }));
  
  // Film Speed (ISO) Options
  export const filmSpeedOptions: DropdownOptions<any>[] = Object.values(FilmSpeedType)
    .filter((v) => typeof v === "number") // Ensures we only get numeric values
    .map((iso) => ({
      key: iso,
      text: `ISO ${iso}`,
    }));
  
  // Film Format Options
  export const filmFormatOptions: DropdownOptions<any>[] = Object.keys(FilmFormatType)
    .filter((key) => isNaN(Number(key))) // Filters out numeric index keys
    .map((format) => ({
      key: format,
      text: format.replace("Format", "").replace(/([A-Z])/g, " $1").trim(),
    }));
  
  // Film Color Options
  export const filmColorOptions: DropdownOptions<any>[] = Object.entries(FilmColorType).map(([key, text]) => ({
    key,
    text,
  }));

  
export default function UploadWindow() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isBW, setIsBW] = useState(false);
  const [filmStock, setFilmStock] = useState<FilmStockType>(FilmStockType.KodakGold);
  const [filmSpeed, setFilmSpeed] = useState<FilmSpeedType>(FilmSpeedType.ISO200);
  const [filmFormat, setFilmFormat] = useState<FilmFormatType>(FilmFormatType.Format35mm);
  
  const handleUpload = async () => {
    console.log( 'Uploading',imageUrl ,filmStock ,filmSpeed ,filmFormat)
    

    const uploadData = {
      FileName: imageUrl.split("/").pop(), // Extracts filename from URL
      Url: imageUrl,
      BW: isBW,
      FilmStock: filmStock,
      FilmSpeed: filmSpeed, 
      FilmFormat: filmFormat,
    };
    console.log(uploadData, 'Uploading')
    try {
      const response = await fetch("https://localhost:7115/api/Image/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(uploadData),
      });

      if (!response.ok) throw new Error("Upload failed!");

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Failed to upload image.");
    }
  };
    return <div>
        <div className="flex items-center gap-6 justify-between p-4">
            <div className="flex flex-col gap-6 ">
           <Input placeholder="Paste image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          <Checkbox placeholder="Black and White" checked={isBW} onChange={(e) => setIsBW(e.target.checked)} />
          <Dropdown value={filmStock} label="STOCK" options={filmStockOptions} onChange={(value) => setFilmStock(value)} />
          <Dropdown value={filmSpeed} label="ISO" options={filmSpeedOptions} onChange={(value) => setFilmSpeed(value)} />
          <Dropdown value={filmFormat} label="FORMAT" options={filmFormatOptions} onChange={(value) => setFilmFormat(value)} />
          <SubmitButton disabled={!imageUrl} onClick={handleUpload}>Upload</SubmitButton>
            </div>

        </div>
    </div>
}