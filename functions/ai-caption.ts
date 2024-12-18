/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { HfInference } from "@huggingface/inference";
import { cache } from "react";

export const captionImage = cache(async (imageLink: string): Promise<string> => {
    // fetch the image to get blob
    const response = await fetch(imageLink);
    const blob = await response.blob();
    const inference = new HfInference(process.env.HF_ACCESS_TOKEN!);
    const { generated_text } = await inference.imageToText({
        model: "Salesforce/blip-image-captioning-large",
        data: blob
    })
    return generated_text;
})