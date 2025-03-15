// Mock API functions
export const endpoints = {
  // Ideas Generator
  generateIdeas: async (prompt) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ideas: [
            "Create a mobile app for plant care reminders",
            "Design a sustainable fashion marketplace",
            "Build a local food delivery network",
            "Develop a fitness tracking app with social features",
            "Launch a virtual event platform"
          ]
        });
      }, 2000);
    });
  },
  
  // Logo Generator
  generateLogo: async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Generate a unique logo based on company name
        const logoText = encodeURIComponent(data.companyName || 'Sample Logo');
        resolve({
          logo: `https://placehold.co/600x400/333/fff/png?text=${logoText}`,
          variations: [
            `https://placehold.co/600x400/444/fff/png?text=${logoText}+1`,
            `https://placehold.co/600x400/555/fff/png?text=${logoText}+2`,
            `https://placehold.co/600x400/666/fff/png?text=${logoText}+3`
          ]
        });
      }, 1500);
    });
  },
  
  // SEO Research
  analyzeSEO: async (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          score: 85,
          recommendations: [
            "Improve meta descriptions",
            "Add more relevant keywords",
            "Increase page loading speed",
            "Add alt text to images"
          ]
        });
      }, 2500);
    });
  },
  
  // Task Manager
  getTasks: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Complete project proposal", status: "pending" },
          { id: 2, title: "Review client feedback", status: "completed" },
          { id: 3, title: "Update website content", status: "in-progress" }
        ]);
      }, 1000);
    });
  },
  
  createTask: async (task) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: Math.floor(Math.random() * 1000),
          ...task,
          status: "pending"
        });
      }, 1000);
    });
  },
  
  updateTask: async (id, updates) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          ...updates
        });
      }, 1000);
    });
  },
  
  deleteTask: async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }
}; 