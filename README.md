const fs = require("fs");
const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask questions
const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

// Main function to generate README
const generateReadme = async () => {
  console.log("📘 Welcome to the README Generator!");

  // Collect project details
  const title = await askQuestion("Project Title: ");
  const description = await askQuestion("Description: ");
  const features = await askQuestion(
    "Features (separate with commas, e.g., Feature1, Feature2): "
  );
  const installation = await askQuestion("Installation Instructions: ");
  const usage = await askQuestion("Usage Instructions: ");
  const dependencies = await askQuestion(
    "Dependencies (separate with commas, e.g., React, Vite): "
  );
  const liveDemo = await askQuestion("Live Demo URL (optional): ");
  const author = await askQuestion("Author Name: ");
  const github = await askQuestion("GitHub Profile URL: ");
  const linkedin = await askQuestion("LinkedIn Profile URL (optional): ");

  // Format the README content
  const readmeContent = `
# ${title}

## 📖 Description
${description}

## 🌟 Features
${features.split(",").map((feature) => `- ${feature.trim()}`).join("\n")}

## 🛠️ Installation
\`\`\`bash
${installation}
\`\`\`

## 🚀 Usage
${usage}

## 📦 Dependencies
\`\`\`
${dependencies.split(",").map((dep) => dep.trim()).join("\n")}
\`\`\`

${liveDemo ? `## 🌐 Live Demo\n[Click here to visit the live website](${liveDemo})\n` : ""}

## 👨‍💻 Author
- **Name**: ${author}
- **GitHub**: [${github}](${github})
${linkedin ? `- **LinkedIn**: [${linkedin}](${linkedin})` : ""}
`;

  // Write the README file
  fs.writeFileSync("README.md", readmeContent.trim());

  console.log("\n✅ README.md has been generated successfully!");
  rl.close();
};

// Execute the function
generateReadme();

