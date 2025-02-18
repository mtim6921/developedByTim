import React, { useState, useEffect } from 'react';
import Dropdown from "../UI/Dropdown"; // Assuming your Dropdown is imported
import { filmSpeedOptions, filmStockOptions, filmFormatOptions, filmOrientationOptions } from '../uploadWindow/UploadWindow'; // Update the import paths based on your project structure
import SearchInput from "../UI/SearchInput"; // Update if necessary
import { FilmSpeedType, FilmStockType, FilmFormatType, FilmOrientationType } from "../UI/types"; // Assuming you have the necessary types

// Assuming Image type is defined somewhere
interface Image {
    id: string;
    fileName: string;
    url: string;
    filmStock: string;
    filmSpeed: FilmSpeedType;
    filmFormat: FilmFormatType;
    filmOrientation: FilmOrientationType;
    bw: boolean;
}

export default function ImageGallery() {
    // States for dropdown values
    const [filmSpeed, setFilmSpeed] = useState<FilmSpeedType | string>(''); 
    const [filmStock, setFilmStock] = useState<FilmStockType | string>('');
    const [filmFormat, setFilmFormat] = useState<FilmFormatType | string>('');
    const [filmOrientation, setFilmOrientation] = useState<FilmOrientationType | string>('');
    const [sortBy, setSortBy] = useState<string>('');

    // State to store fetched images
    const [images, setImages] = useState<Image[]>([]);

    // Fetch images on initial render
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("https://localhost:7115/api/Image");
                if (!response.ok) throw new Error("Failed to fetch images");
                const data = await response.json();
                setImages(data); // Assuming the response is an array of image objects
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    const handleUpdate = () => {
        // Handle update logic when any filter is changed
        console.log('Filters Updated', {
            filmSpeed,
            filmStock,
            filmFormat,
            filmOrientation,
            sortBy
        });
        // You could refetch or filter images based on the updated state here
    };

    return (
        <div>
            {/* Search and Filter Section */}
            <div className="flex items-center gap-6 justify-between">
                <SearchInput onUpdate={handleUpdate} />
                <div className="flex items-center gap-6 ">
                    <Dropdown
                        label="ISO"
                        value={filmSpeed}
                        onChange={(value) => setFilmSpeed(value)}
                        options={filmSpeedOptions}
                    />

                    <Dropdown
                        label="STOCK"
                        value={filmStock}
                        onChange={(value) => setFilmStock(value)}
                        options={filmStockOptions}
                    />

                    <Dropdown
                        label="FORMAT"
                        value={filmFormat}
                        onChange={(value) => setFilmFormat(value)}
                        options={filmFormatOptions}
                    />
                    <Dropdown
                        label="Orientation"
                        value={filmOrientation}
                        onChange={(value) => setFilmOrientation(value)}
                        options={filmOrientationOptions}
                    />
                    <Dropdown
                        label="Sort"
                        value={sortBy}
                        onChange={(value) => setSortBy(value)}
                        options={[{ key: 'iso', text: 'ISO' }, { key: 'date', text: 'DATE' }]}
                    />
                </div>
            </div>

            {/* Images Display Section */}
            <div className="grid grid-cols-4 gap-4 mt-8">
                {images.map((image) => (
                    <div key={image.id} className="border p-4">
                        <img src={image.url} alt={image.fileName} className="w-full h-auto" />
                        <div className="text-center mt-2">
                            <h3>{image.fileName}</h3>
                            <p>{`ISO: ${image.filmSpeed}, Stock: ${image.filmStock}, Format: ${image.filmFormat}`}</p>
                            <p>{image.bw ? 'Black and White' : 'Color'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
