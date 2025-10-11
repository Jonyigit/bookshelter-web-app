import axios from "axios";
import toast from "react-hot-toast";

import type { GoogleBookItem, GoogleBooksResponse } from "../types/google-books";

/**
 *
 * @param query
 * @param page
 * @param maxResults
 */

export async function fetchBooks(query: string, page: number, maxResults: number = 9): Promise<GoogleBookItem[]> {
    const searchTerm = query?.trim() ? query : "search+terms";
    const startIndex = (page - 1) * maxResults;

    try {
        const response = await axios.get<GoogleBooksResponse>(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${startIndex}&maxResults=${maxResults}`
        );

        return response.data.items ?? [];
    } catch (error) {
        toast.error("Error fetching!");
        return [];
    }
}
