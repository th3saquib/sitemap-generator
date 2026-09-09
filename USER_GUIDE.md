# 🗺️ Easy Sitemap Generator Guide (Non-Developer Friendly)

Welcome! This guide will show you how to create a sitemap for your website using this tool, even if you've never written a line of code before.

---

## 1. Prerequisites
Before you start, you need to install **Node.js** on your computer. Node.js is the "engine" that runs this program.

1.  Go to [nodejs.org](https://nodejs.org/).
2.  Download the **LTS (Long Term Support)** version for Windows or Mac.
3.  Run the installer and follow the instructions (just click "Next" for everything).

---

## 2. Setting Up
1.  **Download this folder:** Make sure you have this `sitemap-generator` folder on your computer (e.g., on your Desktop).
2.  **Open your Terminal:**
    *   **Windows:** Press the `Windows` key, type `PowerShell`, and press Enter.
    *   **Mac:** Press `Command + Space`, type `Terminal`, and press Enter.
3.  **Go to the folder:**
    Type `cd ` (with a space) and then drag your `sitemap-generator` folder from your Desktop into the terminal window. It should look something like this:
    `cd C:\Users\YourName\Desktop\sitemap-generator`
    Press **Enter**.

---

## 3. Preparing the Program
In your terminal, type the following command and press **Enter**:
```bash
npm install
```
*This downloads the necessary "parts" the program needs to work. You only need to do this once.*

---

## 4. Generating Your Sitemap
Now, let's create your sitemap! You will use a simple command where you replace the URL with your own website.

### The Magic Command:
Copy and paste the text below into your terminal, but **change `https://yourwebsite.com` to your actual website address**:

```powershell
node -e "const SitemapGenerator = require('./src/index.js'); const generator = SitemapGenerator('https://yourwebsite.com', { filepath: './sitemap.xml' }); generator.on('done', () => console.log('✅ Success! Your sitemap is ready.')); generator.on('add', (url) => console.log('Adding page:', url)); generator.on('error', (err) => console.error('❌ Error:', err)); generator.start();"
```

### What happens next?
*   You will see a list of "Adding page: ..." as the program finds links on your site.
*   Wait until you see the **✅ Success!** message.
*   The program will create a file named `sitemap.xml` inside your folder.

---

## 5. Frequently Asked Questions

**Where is the sitemap file?**
It is in the same folder as this guide, named `sitemap.xml`.

**What do I do with the `sitemap.xml`?**
Usually, you upload this file to your website's main folder (root directory) and then submit the link (e.g., `yourwebsite.com/sitemap.xml`) to [Google Search Console](https://search.google.com/search-console/about).

**The program stopped with an error!**
Don't worry. This can happen if your internet is slow or if your website blocks the crawler. Check your website URL and try again.

**Can I change the filename?**
Yes! In the "Magic Command" above, change `./sitemap.xml` to whatever you like, such as `./my-new-sitemap.xml`.
