import { EyeIcon } from "lucide-react";
import { Button } from "./button";
import {CopyIcon} from "lucide-react"
import Link from "next/link";



export default function UrlList() {
  return (
  <div>
    <h2 className="text-2xl font-bold mb-4">  Recent URLS </h2>
    <ul className="space-y-2">
       <li className="flex items-center gap-2 justify-between">
        <Link 
        href="https://onedeveloper.co.uk" 
        target="blank" 
        className="text-blue-950"
        > 
            https://onedeveloper.co.uk
        </Link>
        
        <div className="flex items-center gap-2">
            <Button 
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:bg-mute"
            > 
            <CopyIcon className= "w-4 h-4"/>
            <span className="sr-only"> Copy URL</span>
                </Button>
                <span className="flex items-center">
                <EyeIcon className=" h-4 w-4" />
                100 views
                </span>
            </div>        
        </li> 
     </ul>
</div>
  );
}
