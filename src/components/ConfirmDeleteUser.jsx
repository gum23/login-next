'use client'

import { motion, AnimatePresence } from "framer-motion"

export default function ConfirmDeleteUser({isOpen, onConfirm, onCancel, message}){
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    >
                    <motion.div
                        className="bg-white rounded-xl p-6 shadow-lg max-w-sm text-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        >
                        <p className="text-lg mb-6">{message}</p>
                        <div className="flex justify-center gap-4">
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
                        >
                            Aceptar
                        </button>
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
                        >
                            Cancelar
                        </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}