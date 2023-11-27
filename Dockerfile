# Use the official Node.js image as the base
FROM node:latest

# Clone the Faust IDE repository from GitHub
RUN git clone https://github.com/grame-cncm/faustide.git --depth 1

# Change to the faustide directory
WORKDIR /faustide

# Install dev dependencies
RUN npm install

# Possibly update the dependencies
RUN npm update

# Build the Faust IDE using Webpack, Babel, and TypeScript
RUN npm run build

# Expose port 8000 for the local server
EXPOSE 8000

# Start the local server
CMD ["npm", "run", "serve"]
