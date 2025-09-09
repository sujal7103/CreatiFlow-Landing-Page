"use client";

import React from "react";
import { motion } from "framer-motion";

interface CometCardProps {
  children: React.ReactNode;
  className?: string;
}

export function CometCard({ children, className = "" }: CometCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Comet effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-100"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-200"></div>
        </div>
      </div>
      {children}
    </motion.div>
  );
}
