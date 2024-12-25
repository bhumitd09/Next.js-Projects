'use client'

import { useState } from "react";
import {  Button  } from "./button"
import { Input } from "./input"
import { headers } from "next/headers";

interface ShortenFormProps {
    handleURLShortened: () => void;
}
export default function ShortenForm({ handleURLShortened  }: ShortenFormProps) {
    const [url, setUrl] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const response = await fetch("/api/shorten", {
            method: "POST",
            headers: {"Content-Type":  "application/json"},
            body: JSON.stringify({
            url,   
            }),
        });
        await response.json
        setUrl('');
        handleURLShortened();
    } catch(error)  {
        console.error('Error shortening URL:', error);
    } finally {
        setIsLoading(false);
    }
};
   
    return (
        <form onSubmit={handleSubmit} className="mb-4">
         <div className="space-y-4">
            <Input 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-12" 
                type="url"
                placeholder="Enter URL to shorten" 
                required
                />
             <Button className="w-full p-2" type="submit" disabled={isLoading}> 
              
              {isLoading ? "Shortening..."   :   "Shorten URL" }
                </Button>
        </div>
        </form>
  );
}
