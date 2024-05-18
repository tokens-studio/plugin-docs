// This file gets only the public doc files, and renames them to remove spaces

import { default as fs } from 'fs';
import { default as path } from 'path';
import { fileURLToPath } from 'url';
import _ from 'lodash';
import replace from 'replace';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const skipFiles = ['__tempassets__', 'public', '.obsidian'];


// Define the folder paths
const publishFolder = path.join(__dirname, 'obsidian_vault');
const distFolder = path.join(__dirname, 'new_pages/');
const distFolderPublic = path.join(__dirname, 'new_public/');

console.log("🗑️  Cleaning up temporary folders...")
fs.existsSync(distFolder) && fs.rmSync(distFolder, { recursive: true });
fs.existsSync(distFolderPublic) && fs.rmSync(distFolderPublic, { recursive: true });

async function copyDirAndRename(sourceDir, targetDir) {



  if(path.basename(sourceDir) === 'public'){
    console.log('public folder')
    const publicFiles = await fs.readdirSync(sourceDir, { withFileTypes: true });
    for (let file of publicFiles) {
      const sourcePath = path.join(sourceDir, file.name);
      const targetPath = path.join(distFolderPublic, file.name);
      console.log("  🏞️ ", (path.basename(sourcePath)), ' >> ', targetPath)
      fs.copyFileSync(sourcePath, targetPath)
    }
  }

  if(!skipFiles.includes(path.basename(sourceDir))){
  console.log("📂", path.basename(targetDir))
  await fs.mkdirSync(targetDir, { recursive: true }); // Ensure target directory exists
  const entries = await fs.readdirSync(sourceDir, { withFileTypes: true });

  for (let entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory() && ( !path.basename(sourcePath).startsWith('.') || !path.basename(sourcePath).startsWith('__') || path.basename(sourcePath) !== 'public') ){
      // Ignore directories starting with a dot, like .obsidian
      // Igrnore internal directories starting with, like __tempassets__
      await copyDirAndRename(sourcePath, targetPath); // Recurse into subdirectory
    } else {
     
      const fileName = path.basename(sourcePath)

          if(fileName === "_meta.md"){
            console.log("   🤖 meta.json")
              const meta = await fs.readFileSync(sourcePath, 'utf8').trim().split('\n')
  
              const metaJson = {}
              if(path.basename(targetDir) === "pages"){
                metaJson["index"] = "Hyma Hub"
              }
              meta.forEach((line) => {
              // Extract the title and path from the _meta.md file
              const regex = /\[([^\]]+)\]\(([^\)]+)\)/g;
              const input = line;
              const matches = input.matchAll(regex);
              let title, linePath;
              for (const match of matches) {
               title = match[1].toString()
               linePath = match[2].toString()
              }     
              const sentenceCase = (str) => {
                str = str.replace(/-/g, ' ')
                return _.upperFirst(_.lowerCase(str))
                }
               console.log('🔥', title, title.split(' ').length)     
              metaJson[path.parse(linePath).name] = title.split(' ').length > 1 ? title : sentenceCase(title)
            })
              await fs.writeFileSync(path.join(targetDir, '_meta.json'), JSON.stringify(metaJson, null, 2))
            }
            else {
              if(!path.basename(sourcePath).startsWith('.')){
              console.log("   📄", (path.basename(sourcePath)))
              fs.copyFileSync(sourcePath, targetPath)
              }
            }
        }

    }
    }
  }


await copyDirAndRename(publishFolder, distFolder)

// Obsidian uses .md files, but we need to link to pages directly, not a file name
replace({
  regex: /.md/g,
  replacement: "",
  paths: [distFolder],
  recursive: true,
  silent: true,
});



console.log('✅ Done!')