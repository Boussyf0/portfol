# Adding Images to Your Portfolio

This directory is where you should place your image assets for the portfolio website.

## Profile Image

To add your profile picture:
1. Add your profile image to this directory (e.g., `profile.jpg`)
2. Open `src/components/About.jsx`
3. Update the `profileImage` constant to point to your image:
   ```javascript
   const profileImage = 'src/assets/profile.jpg';
   ```

## Resume PDF

To add your resume:
1. Add your PDF resume to this directory (e.g., `resume.pdf`)
2. Open `src/components/About.jsx`
3. Update the `resumePDF` constant to point to your file:
   ```javascript
   const resumePDF = 'src/assets/resume.pdf';
   ```

## Project Images

To customize project images:
1. Add your project images to this directory (e.g., `project-ai.jpg`, `project-web.jpg`)
2. Open `src/components/Projects.jsx`
3. Modify the `getProjectImage` function to use your images:
   ```javascript
   const getProjectImage = (technologies) => {
     if (technologies.includes('LLMs')) {
       return 'src/assets/project-ai.jpg';
     } else if (technologies.includes('Python')) {
       return 'src/assets/project-python.jpg';
     }
     // Add more conditions for other project types
     else {
       return 'src/assets/project-default.jpg';
     }
   };
   ```

## Image Optimization

For better website performance:
- Keep image sizes reasonable (under 500KB if possible)
- Use JPG or WebP formats for photos
- Use PNG for images that need transparency
- Consider resizing large images to appropriate dimensions before adding them 