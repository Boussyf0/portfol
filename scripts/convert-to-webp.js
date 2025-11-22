import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images to convert to WebP
const imagesToConvert = [
    'public/assets/image.png',
    'public/assets/image_el.png',
    'public/assets/rag_thumbnail.png',
    'public/assets/cv_analyzer.png',
    'public/assets/screenshots/job_search_platform.png',
    'public/assets/screenshots/cv_matching_tool.png',
];

async function convertToWebP() {
    console.log('🚀 Starting WebP conversion...\n');

    for (const imagePath of imagesToConvert) {
        const fullPath = path.join(__dirname, '..', imagePath);

        if (!fs.existsSync(fullPath)) {
            console.log(`⚠️  Skipping ${imagePath} - file not found`);
            continue;
        }

        const webpPath = fullPath.replace(/\.png$/i, '.webp');

        try {
            const stats = fs.statSync(fullPath);
            const originalSize = (stats.size / 1024).toFixed(2);

            await sharp(fullPath)
                .webp({ quality: 85 })
                .toFile(webpPath);

            const webpStats = fs.statSync(webpPath);
            const webpSize = (webpStats.size / 1024).toFixed(2);
            const savings = ((1 - webpStats.size / stats.size) * 100).toFixed(1);

            console.log(`✅ ${path.basename(imagePath)}`);
            console.log(`   ${originalSize}KB → ${webpSize}KB (${savings}% reduction)\n`);
        } catch (error) {
            console.error(`❌ Error converting ${imagePath}:`, error.message);
        }
    }

    console.log('✨ WebP conversion complete!');
}

convertToWebP().catch(console.error);
