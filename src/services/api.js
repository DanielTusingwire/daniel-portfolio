// API service functions
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Generic fetch wrapper with error handling
const fetchWithErrorHandling = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
};

// Project-related API calls
export const projectAPI = {
    // Get all projects
    getAll: () => fetchWithErrorHandling(`${API_BASE_URL}/projects`),

    // Get project by ID
    getById: (id) => fetchWithErrorHandling(`${API_BASE_URL}/projects/${id}`),

    // Create new project
    create: (projectData) => fetchWithErrorHandling(`${API_BASE_URL}/projects`, {
        method: 'POST',
        body: JSON.stringify(projectData),
    }),

    // Update project
    update: (id, projectData) => fetchWithErrorHandling(`${API_BASE_URL}/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(projectData),
    }),

    // Delete project
    delete: (id) => fetchWithErrorHandling(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
    }),
};

// Contact form API
export const contactAPI = {
    sendMessage: (messageData) => fetchWithErrorHandling(`${API_BASE_URL}/contact`, {
        method: 'POST',
        body: JSON.stringify(messageData),
    }),
};

// Theme API (for future use)
export const themeAPI = {
    getPreferences: () => fetchWithErrorHandling(`${API_BASE_URL}/theme/preferences`),
    updatePreferences: (preferences) => fetchWithErrorHandling(`${API_BASE_URL}/theme/preferences`, {
        method: 'PUT',
        body: JSON.stringify(preferences),
    }),
}; 