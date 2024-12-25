'use client';

import { Check, EyeIcon } from "lucide-react";
import { Button } from "./button";
import { CopyIcon } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";

type Url = {
  id: string,
  shortCode: string,
  originUrl: string,
  visits: number
};

export default function UrlList() {
  const [urls, setUrls] = useState<Url[]>([]); // Fixed the state name from setUrl to setUrls
  const [copied, setCopied] = useState<boolean>(false);
  const [copyUrl, setCopyUrl] = useState<string>("");

  const shortenerUrl = (code: string) => 
    `${process.env.NEXT_PUBLIC_BASE_URL}/${code}`;

  const fetchUrls = async () => {
    try {
      const response = await fetch('/api/urls');
      const data = await response.json();
      // Make sure data is an array before setting it
      if (Array.isArray(data)) {
        setUrls(data);
      } else {
        console.error("Fetched data is not an array:", data);
        setUrls([]); // Set empty array if data is invalid
      }
    } catch (error) {
      console.error("Error fetching URLs:", error);
      setUrls([]); // Set empty array on error
    }
  };

  const handleCopyUrl = (code: string) => {
    const fullUrl = shortenerUrl(code);
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setCopyUrl(code);
      setTimeout(() => {
        setCopied(false);
        setCopyUrl("");
      }, 3000);
    });
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // Add loading state check
  if (!urls) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recent URLS</h2>
      <ul className="space-y-2">
        {Array.isArray(urls) && urls.map(url => (
          <li key={url.id} className="flex items-center gap-2 justify-between">
            <Link 
              href={`/${url.shortCode}`}
              target="_blank"
              className="text-blue-950"
            >
              {shortenerUrl(url.shortCode)}
            </Link>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:bg-muted"
                onClick={() => handleCopyUrl(url.shortCode)}
              > 
                {copied && copyUrl === url.shortCode ? (
                  <Check className="w-4 h-4"/>
                ) : (
                  <CopyIcon className="w-4 h-4"/>
                )}
                <span className="sr-only">Copy URL</span>
              </Button>
              <span className="flex items-center gap-2">
                <EyeIcon className="h-4 w-4" />
                {url.visits} views
              </span>
            </div>        
          </li> 
        ))}
      </ul>
    </div>
  );
}