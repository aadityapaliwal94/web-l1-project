import { createContext, useContext, useState, useCallback } from "react";
import { useLocalStorageArray } from "../hooks/useLocalStorageArray";

const PurchaseContext = createContext(null);

export const usePurchase = () => {
    const context = useContext(PurchaseContext);
    if (!context) {
        throw new Error("usePurchase must be used within a PurchaseProvider");
    }
    return context;
};

export const PurchaseProvider = ({ children }) => {
    const [buyingItem, setBuyingItem] = useState({});
    const [showBuyPopup, setShowBuyPopup] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const { addItem: addBuyer } = useLocalStorageArray("buyers", []);
    const { items: invoiceItems, addItem: addInvoice } = useLocalStorageArray("invoices", []);

    const handleBuyButtonTap = useCallback((item) => {
        setBuyingItem(item);
        setShowBuyPopup(true);
    }, []);

    const closeBuyPopup = useCallback(() => {
        setShowBuyPopup(false);
        setBuyingItem({});
    }, []);

    const handlePurchaseSubmit = useCallback((name, email, itemName) => {
        // Add buyer to localStorage
        addBuyer({ name: name, email: email, items: itemName });

        // Get current invoice count from localStorage to calculate ID
        let currentInvoiceCount = 0;
        try {
            const invoices = window.localStorage.getItem("invoices");
            if (invoices) {
                const parsed = JSON.parse(invoices);
                currentInvoiceCount = Array.isArray(parsed) ? parsed.length : 0;
            }
        } catch (error) {
            console.warn("Error reading invoices from localStorage:", error);
        }

        // Add invoice to localStorage
        const id = currentInvoiceCount + 1;
        addInvoice({
            id: id,
            product: itemName,
            email: email,
            date: Date(),
            status: "purchased"
        });

        // Close buy popup and show success popup
        setShowBuyPopup(false);
        setBuyingItem({});
        setShowSuccess(true);
    }, [addBuyer, addInvoice]);

    const closeSuccessPopup = useCallback(() => {
        setShowSuccess(false);
    }, []);

    const value = {
        buyingItem,
        showBuyPopup,
        showSuccess,
        handleBuyButtonTap,
        closeBuyPopup,
        handlePurchaseSubmit,
        closeSuccessPopup,
    };

    return (
        <PurchaseContext.Provider value={value}>
            {children}
        </PurchaseContext.Provider>
    );
};
