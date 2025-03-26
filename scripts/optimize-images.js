import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const VOLVO_AR_DIRS = [
    'images/assets/Volvo Cars AR',
    'public/images/assets/Volvo Cars AR'
];

async function optimizeImage(inputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Only process PNG files
        if (metadata.format !== 'png') {
            return;
        }

        // Create a backup of the original file
        const backupPath = inputPath.replace('.png', '.backup.png');
        await fs.copyFile(inputPath, backupPath);

        // Optimize the image
        await image
            .png({
                quality: 85,
                compressionLevel: 9,
                palette: true
            })
            .toBuffer()
            .then(async (buffer) => {
                // Only save if the new file is smaller
                const originalStats = await fs.stat(inputPath);
                if (buffer.length < originalStats.size) {
                    await fs.writeFile(inputPath, buffer);
                    console.log(`✅ Optimized: ${path.basename(inputPath)}`);
                    console.log(`   Original size: ${(originalStats.size / 1024).toFixed(2)}KB`);
                    console.log(`   New size: ${(buffer.length / 1024).toFixed(2)}KB`);
                    console.log(`   Saved: ${((originalStats.size - buffer.length) / 1024).toFixed(2)}KB\n`);
                } else {
                    console.log(`ℹ️ Skipped: ${path.basename(inputPath)} (already optimized)\n`);
                    // Remove the backup since we didn't modify the original
                    await fs.unlink(backupPath);
                }
            });
    } catch (error) {
        console.error(`❌ Error processing ${inputPath}:`, error);
    }
}

async function processDirectory(directory) {
    try {
        const files = await fs.readdir(directory);
        for (const file of files) {
            if (file.toLowerCase().endsWith('.png')) {
                const filePath = path.join(directory, file);
                await optimizeImage(filePath);
            }
        }
    } catch (error) {
        console.error(`❌ Error processing directory ${directory}:`, error);
    }
}

async function main() {
    console.log('🔍 Starting image optimization...\n');
    
    for (const dir of VOLVO_AR_DIRS) {
        console.log(`📁 Processing directory: ${dir}`);
        await processDirectory(dir);
    }
    
    console.log('\n✨ Image optimization complete!');
}

main().catch(console.error); 