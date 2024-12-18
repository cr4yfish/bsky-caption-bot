"use client";

import { useState } from "react";
import { captionImage } from "../../functions/ai-caption";

export default function Home() {
  const [imageLink, setImageLink] = useState<string>("");

  const handleCaptionImage = async () => {
    console.log("Captioning image")
    const res = await captionImage(imageLink);
    console.log(res)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       
        <input className="text-black" value={imageLink} onChange={(e) => setImageLink(e.currentTarget.value)} placeholder="Image link" />
        <button onClick={handleCaptionImage}>Run</button>
      </main>
    </div>
  );
}
