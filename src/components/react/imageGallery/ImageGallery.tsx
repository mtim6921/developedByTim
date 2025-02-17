import Dropdown from "../UI/Dropdown";
import SelectableFilter from "../UI/SelectableFilter";
import SearchInput from "../UI/SearchInput";
import { filmFormatOptions, filmOrientationOptions, filmSpeedOptions, filmStockOptions } from "../uploadWindow/UploadWindow";

export default function ImageGallery() {
    const handleUpdate = () => {

    }
    return <div>
        {/* <SelectableFilter onUpdate={handleUpdate}/> */}
        <div className="flex items-center gap-6 justify-between">
            <SearchInput onUpdate={handleUpdate} />
            <div className="flex items-center gap-6 ">
                <Dropdown
                    label="ISO"
                    onChange={() => { }}

                    options={filmSpeedOptions}
                />

                <Dropdown
                    label="STOCK"
                    onChange={() => { }}

                    options={filmStockOptions}
                />

                <Dropdown
                    label="FORMAT"
                    onChange={() => { }}

                    options={filmFormatOptions}
                />
                <Dropdown
                    label="Orientation"
                    onChange={() => { }}
                    options={filmOrientationOptions}
                />
                <Dropdown
                    label="Sort"
                    onChange={() => { }}

                    options={[{key: 'iso',text:  'ISO'}, {key: 'date',text:  'DATE'}]}
                />
            </div>

        </div>

    </div>
}