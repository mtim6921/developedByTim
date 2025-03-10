import { LoadingSpinner } from "../../navigation/assets";


export default function Loading() {
    return (
        <div className="flex justify-center items-center mt-8 ">
            <img src={LoadingSpinner.src} alt="Loading..." className="w-16 h-16 mix-blend-overlay" />
        </div>
    );
}