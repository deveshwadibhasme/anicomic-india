import { useState } from 'react';

const useToaster = () => {
    
    const [toasts, setToasts] = useState([]);

    const addToast = (message) => {
        const id = Date.now();
        setToasts([...toasts, { id, message }]);
        setTimeout(() => {
            setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
        }, 2000); // Toast will disappear after 2 seconds
    };

    const ToastContainer = () => (
        <div className="absolute z-50 top-15 left-1/2 transform -translate-x-1/2 space-y-2 text-m md:text-xl">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className="bg-orange-800 text-white px-4 py-2 rounded shadow-lg"
                >
                    {toast.message}
                </div>
            ))}
        </div>
    );

    return {addToast, ToastContainer};
};

export default useToaster;