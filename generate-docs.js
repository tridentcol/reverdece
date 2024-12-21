import { promises as fs } from 'fs';
import { join, relative, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateProjectDocumentation(startPath) {
    let output = '# Documentación del Proyecto\n\n';
    
    async function processDirectory(currentPath, indent = '') {
        const items = await fs.readdir(currentPath, { withFileTypes: true });
        
        // Ordenar items: primero directorios, luego archivos
        const sortedItems = items.sort((a, b) => {
            if (a.isDirectory() && !b.isDirectory()) return -1;
            if (!a.isDirectory() && b.isDirectory()) return 1;
            return a.name.localeCompare(b.name);
        });

        for (const item of sortedItems) {
            const fullPath = join(currentPath, item.name);
            const relativePath = relative(startPath, fullPath);
            
            // Ignorar node_modules y .git
            if (item.name === 'node_modules' || item.name === '.git') {
                continue;
            }

            if (item.isDirectory()) {
                output += `\n${indent}## 📁 ${relativePath}/\n`;
                await processDirectory(fullPath, indent + '  ');
            } else {
                // Leer el contenido del archivo
                try {
                    const content = await fs.readFile(fullPath, 'utf8');
                    const extension = extname(item.name).toLowerCase();
                    
                    output += `\n${indent}### 📄 ${relativePath}\n`;
                    output += `\n${indent}\`\`\`${getLanguageFromExtension(extension)}\n`;
                    output += content;
                    output += `\n${indent}\`\`\`\n`;
                } catch (error) {
                    output += `\n${indent}### ❌ Error al leer ${relativePath}: ${error.message}\n`;
                }
            }
        }
    }

    await processDirectory(startPath);
    return output;
}

function getLanguageFromExtension(extension) {
    const languageMap = {
        '.js': 'javascript',
        '.jsx': 'jsx',
        '.ts': 'typescript',
        '.tsx': 'tsx',
        '.css': 'css',
        '.scss': 'scss',
        '.html': 'html',
        '.json': 'json',
        '.md': 'markdown'
    };
    
    return languageMap[extension] || 'plaintext';
}

// Función principal
async function main() {
    try {
        const projectPath = process.argv[2] || '.';
        const documentation = await generateProjectDocumentation(projectPath);
        
        // Crear directorio de salida si no existe
        const outputDir = 'documentation';
        await fs.mkdir(outputDir, { recursive: true });
        
        // Guardar la documentación en un archivo
        const outputPath = join(outputDir, 'project-documentation.md');
        await fs.writeFile(outputPath, documentation);
        
        console.log(`✅ Documentación generada exitosamente en: ${outputPath}`);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

main();