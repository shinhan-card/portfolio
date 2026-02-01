import { getAllCaseStudies } from "@/data/case-studies";
import { resumeData } from "@/data/resume";

/**
 * Build portfolio context for AI grounding
 * ONLY factual information from site data
 */
export function buildPortfolioContext(lang: "en" | "ko"): string {
  const projects = getAllCaseStudies();
  const resume = resumeData;
  const l = lang === "ko" ? "ko" : "en";

  const context = `
# PORTFOLIO CONTEXT: 윤태웅 (Eric Yoon)

## BASIC INFORMATION
- Name: 윤태웅 (Eric Yoon / Yoon Tae Woong)
- Current Role: ${resume.currentRole[l]}
- Location: ${resume.location[l]}
- Company: Shinhan Card
- Years of Experience: 9+ years
- Email: stylist@kakao.com
- LinkedIn: https://www.linkedin.com/in/yoontaewoong/

## SUMMARY
${resume.summary[l]}

## CORE FOCUS
${resume.coreFocus[l].map((f, i) => `${i + 1}. ${f}`).join("\n")}

## SELECTED IMPACT
${resume.selectedImpact[l].map((imp, i) => `- ${imp}`).join("\n")}

## PROJECTS (${projects.length} total)
${projects.map((p, i) => `
### ${i + 1}. ${p.title}
- Role: ${p.meta.role}
- Timeline: ${p.meta.timeline}
- Tags: ${p.tags.join(", ")}
- Goal: ${p.goal}
- Key Results: ${p.results.map(r => `${r.metric}: ${r.value}`).join("; ")}
`).join("\n")}

## AWARDS
${resume.awards[l].map(a => `- ${a.title} (${a.issuer}, ${a.date}): ${a.description}`).join("\n")}

## CERTIFICATIONS
${resume.certifications.map(c => `- ${c.title}`).join("\n")}

## PATENTS
${resume.patents[l].map(p => `- ${p.title}: ${p.description || ""}`).join("\n")}

## EDUCATION
- ${resume.education[l].degree}, ${resume.education[l].major}
- ${resume.education[l].school}, ${resume.education[l].period}

## MILITARY SERVICE
- ${resume.military[l].rank}, ${resume.military[l].unit}
- ${resume.military[l].period}

---
END OF FACTUAL CONTEXT
Any question not answerable from above should be declined politely.
`.trim();

  return context;
}
