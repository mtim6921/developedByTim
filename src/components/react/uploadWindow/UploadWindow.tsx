import Dropdown, { type DropdownOptions } from "../UI/Dropdown";
import SelectableFilter from "../UI/SelectableFilter";
import Input from "../UI/Input";
import SubmitButton from "../UI/SubmitButton";
import Checkbox from "../UI/Checkbox";
import { FilmColorType, FilmFormatType, FilmOrientationType, FilmSpeedType, FilmStockType } from "../UI/types";
export const filmOrientationOptions: DropdownOptions[] = Object.entries(FilmOrientationType).map(([key, text]) => ({
    key,
    text,
  }));
 // Film Stock Options
export const filmStockOptions: DropdownOptions[] = Object.entries(FilmStockType).map(([key, text]) => ({
    key,
    text,
  }));
  
  // Film Speed (ISO) Options
  export const filmSpeedOptions: DropdownOptions[] = Object.values(FilmSpeedType)
    .filter((v) => typeof v === "number") // Ensures we only get numeric values
    .map((iso) => ({
      key: `ISO${iso}`,
      text: `ISO ${iso}`,
    }));
  
  // Film Format Options
  export const filmFormatOptions: DropdownOptions[] = Object.keys(FilmFormatType)
    .filter((key) => isNaN(Number(key))) // Filters out numeric index keys
    .map((format) => ({
      key: format,
      text: format.replace("Format", "").replace(/([A-Z])/g, " $1").trim(),
    }));
  
  // Film Color Options
  export const filmColorOptions: DropdownOptions[] = Object.entries(FilmColorType).map(([key, text]) => ({
    key,
    text,
  }));

  
export default function UploadWindow() {
    const handleUpload = () => {

    }
    return <div>
        <div className="flex items-center gap-6 justify-between p-4">
            <div className="flex flex-col gap-6 ">
                <Input placeholder='Paste image url' onChange={()=>{}}/>
                <Checkbox placeholder='Black and White' onChange={()=>{}}/>
                <Dropdown
                    label="STOCK"
                    onChange={() => { }}
                    options={filmStockOptions}
                />
                <Dropdown
                    label="ISO"
                    onChange={() => { }}
                    options={filmSpeedOptions}
                />
                <Dropdown
                    label="FORMAT"
                    onChange={() => { }}
                    options={filmFormatOptions}
                />
                <SubmitButton onClick={()=>{}}>Upload</SubmitButton>
            </div>

        </div>
    </div>
}