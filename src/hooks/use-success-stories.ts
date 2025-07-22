import { Program } from "@/models/Program";
import { SuccessStory } from "@/models/successStories";
import { useEffect, useState } from "react";

export const useSuccessStories = () => {
    const [successStories, setSuccessStory] = useState<SuccessStory[]>([]);
    const [sloading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('http://localhost:3001/success-stories');
                const data: SuccessStory[] = await response.json();
                setSuccessStory(data);
            } catch (error) {
                console.error('Failed to fetch programs:', error);

            } finally {
                setLoading(false);
            }
        }
        fetchPrograms();

    }, []);
    return { successStories, sloading };

}