import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryManager({ categories, onCategoriesUpdate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "", icon: "🎯" });

  const defaultCategories = [
    "all",
    "hardware",
    "gaming",
    "peripherals",
    "audio",
    "photography",
    "software",
    "books",
    "other",
  ];

  const addCategory = () => {
    if (!newCategory.name.trim()) return;

    const key = newCategory.name.toLowerCase().replace(/\s+/g, "_");
    const updated = {
      ...categories,
      [key]: {
        nameKey: key,
        name: newCategory.name,
        icon: newCategory.icon,
      },
    };

    onCategoriesUpdate(updated);
    setNewCategory({ name: "", icon: "🎯" });
  };

  const removeCategory = (key) => {
    if (defaultCategories.includes(key)) return;

    if (confirm(`Remove category "${categories[key]?.name || key}"? Items will remain but the category will be removed.`)) {
      const updated = { ...categories };
      delete updated[key];
      onCategoriesUpdate(updated);
    }
  };

  const handleKeyPress = (e) => e.key === "Enter" && addCategory();

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
      >
        <span className="text-lg">⚙️</span>
        <span>Manage Categories</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center p-4 z-50"
            >
              <div className="w-full max-w-md bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="text-xl">🏷️</span> Categories
                  </h4>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <span>📋</span> Current Categories
                  </h5>

                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {Object.entries(categories).map(([key, category]) => {
                      const defaultNames = {
                        all: "All",
                        hardware: "Hardware",
                        gaming: "Gaming",
                        peripherals: "Peripherals",
                        audio: "Audio",
                        photography: "Photo/Video",
                        software: "Software",
                        books: "Books",
                        other: "Other",
                      };

                      const isDefault = defaultCategories.includes(key);

                      return (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                            isDefault
                              ? "bg-gray-700/30 border border-gray-600/30"
                              : "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:from-purple-500/20 hover:to-pink-500/20"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{category.icon}</span>
                            <span className="text-sm font-medium text-gray-200">
                              {category.name || defaultNames[key] || key}
                            </span>

                            {isDefault && (
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                                Default
                              </span>
                            )}
                          </div>

                          {!isDefault && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeCategory(key)}
                              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                            >
                              🗑️
                            </motion.button>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-600/30 pt-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                    <span>➕</span> Add Category
                  </h5>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Category name"
                        value={newCategory.name}
                        onChange={(e) =>
                          setNewCategory({ ...newCategory, name: e.target.value })
                        }
                        onKeyPress={handleKeyPress}
                        className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      />

                      <input
                        type="text"
                        placeholder="🎯"
                        value={newCategory.icon}
                        onChange={(e) =>
                          setNewCategory({ ...newCategory, icon: e.target.value })
                        }
                        onKeyPress={handleKeyPress}
                        className="w-16 px-3 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-sm text-white text-center focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                      />
                    </div>

                    <motion.button
                      onClick={addCategory}
                      disabled={!newCategory.name.trim()}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-sm font-medium shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <span>✨</span> Add Category
                    </motion.button>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <p className="text-xs text-blue-300 flex items-start gap-2">
                    <span className="text-sm">💡</span>
                    <span>Default categories cannot be removed. Custom ones can be deleted anytime.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.7);
        }
      `}</style>
    </div>
  );
}
