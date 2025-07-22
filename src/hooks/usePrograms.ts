import { Program } from "@/models/Program";
import { useEffect, useState } from "react";

export const usePrograms = () => {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('http://localhost:3001/programs');
                const data: Program[] = await response.json();
                setPrograms(data);
            } catch (error) {
                console.error('Failed to fetch programs:', error);

            } finally {
                setLoading(false);
            }
        }
        fetchPrograms();

    }, []);
    return { programs, loading };

}