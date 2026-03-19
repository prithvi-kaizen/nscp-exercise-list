const fs = require('fs');

try {
  // Read the current script.js to extract the data structures securely
  const code = fs.readFileSync('script.js', 'utf8');

  // Extract just the arrays using Regex to avoid executing the rest of the script/DOM
  const exercisesMatch = code.match(/const exercises = (\[[\s\S]*?\]);/);
  const groupsMatch = code.match(/const groups = (\[.*?\]);/);

  let exercises, groups;
  // Use isolated eval just on the array definitions
  eval('exercises = ' + exercisesMatch[1]);
  eval('groups = ' + groupsMatch[1]);

  // Build the LaTeX document string
  let latex = `\\documentclass[11pt,a4paper]{article}
\\usepackage[margin=0.8in]{geometry}
\\usepackage{booktabs}
\\usepackage{tabularx}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{xcolor}
\\usepackage{hyperref}

\\definecolor{nscterra}{HTML}{C1440E}
\\definecolor{nscink}{HTML}{1A1208}

\\titleformat{\\section}{\\Large\\bfseries\\color{nscterra}}{\\thesection}{1em}{}[\\titlerule]

\\title{\\textbf{\\color{nscink} Netaji Sports Club -- Exercise Reference}}
\\date{}
\\author{}

\\begin{document}
\\maketitle
\\vspace{-2em}
\\noindent A comprehensive reference sheet of all exercises mapped by their primary muscle group.

`;

  groups.forEach(group => {
    if (group === "All") return;
    const groupEx = exercises.filter(e => e.group === group);
    if (groupEx.length === 0) return;
    
    // Escape latex special characters in group name if needed
    const escapedGroup = group.replace(/&/g, '\\&').replace(/%/g, '\\%');
    latex += `\\section*{${escapedGroup}}\n`;
    latex += `\\begin{itemize}[leftmargin=*]\n`;
    
    groupEx.forEach(ex => {
      // Escape LaTeX special chars from content
      const escapeLatex = (str) => {
        if (!str) return '';
        return str
          .replace(/&/g, '\\&')
          .replace(/%/g, '\\%')
          .replace(/\\/g, '\\textbackslash ')
          .replace(/_/g, '\\_')
          .replace(/#/g, '\\#');
      };

      const name = escapeLatex(ex.name);
      const diff = escapeLatex(ex.difficulty);
      const equipment = escapeLatex(ex.equipment);
      const primary = escapeLatex(ex.primary);
      const secondary = escapeLatex(ex.secondary);

      latex += `  \\item \\textbf{${name}} (\\textit{${diff}})\\\\\n`;
      latex += `        \\textbf{Primary:} ${primary} $|$ \\textbf{Secondary:} ${secondary}\\\\\n`;
      latex += `        \\textbf{Equipment:} ${equipment}\n`;
    });
    
    latex += `\\end{itemize}\n\\vspace{0.5em}\n\n`;
  });

  latex += `\\end{document}\n`;

  // Write out the LaTeX file
  fs.writeFileSync('exercises_sheet.tex', latex);
  console.log('Successfully extracted DB to exercises_sheet.tex!');

} catch (e) {
  console.error("Failed to generate LaTeX:", e);
}
