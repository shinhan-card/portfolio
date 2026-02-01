"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./ui/Card";
import { Users, Smile, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkingPrinciples() {
  const { language } = useLanguage();

  const principles = {
    en: [
      {
        icon: Users,
        emoji: "🤝",
        title: "Communication & Teamwork",
        description:
          "I work with the belief that 'before being a great planner, I must first be a colleague people want to work with' and 'services can never be built alone.' Rather than pushing my opinions, I respect teammates—fellow PMs, designers, developers—and make decisions through sufficient discussion and persuasion.",
      },
      {
        icon: Smile,
        emoji: "✨",
        title: "Positive Attitude & Motivation",
        description:
          "Work that creates positive impact on the company, the world, and people (users/customers) is inherently motivating to me. I approach my work with pride and responsibility for the services and company I operate and plan for.",
      },
      {
        icon: Wrench,
        emoji: "🔧",
        title: "Flexible Problem Solver",
        description:
          "I look for possible solutions within current conditions rather than focusing on why things can't be done. In financial services, challenging procedures and regulations frequently create obstacles even for similar services. When problems arise, I seek the best path forward within those constraints.",
      },
      {
        icon: Sparkles,
        emoji: "🚀",
        title: "Continuous Technology & Trend Exploration",
        description:
          "I continuously explore new technologies and trends to apply to my work. Through this, I derive new ideas and find ways to improve or solve existing problems.",
      },
    ],
    ko: [
      {
        icon: Users,
        emoji: "🤝",
        title: "소통 방식과 팀워크",
        description:
          "'훌륭한 기획자가 되기 전, 우선 함께 일하고 싶은 동료가 되겠다', '서비스는 절대 혼자 만들 수 없다'는 믿음 하에 팀원들과 협업합니다. 제 의견을 무작정 내세우며 밀어붙이기보다는 주변 동료 기획자, 디자이너, 개발자의 의견을 늘 존중하며 충분한 토의와 설득을 거친 후에 결정합니다.",
      },
      {
        icon: Smile,
        emoji: "✨",
        title: "긍정적인 태도와 동기부여",
        description:
          "회사와 세상, 그리고 사람(유저/고객)에 긍정적 영향을 주는 일은 그 자체로 저에게 동기부여가 됩니다. 제가 운영/기획하는 서비스와 회사에 대해 자부심과 책임감을 가지고 업무에 임합니다.",
      },
      {
        icon: Wrench,
        emoji: "🔧",
        title: "유연한 해결사",
        description:
          "안되는 이유보다는 현재 주어진 조건에서 가능한 방법을 찾습니다. 금융업 특성상 같은 종류의 서비스를 개발하더라도 까다로운 절차와 규제 탓에 난관에 부딪히는 경우가 빈번합니다. 업무 진행에 문제가 생겨도 그 상황 안에서 최선으로 진행할 수 있는 방향을 모색합니다.",
      },
      {
        icon: Sparkles,
        emoji: "🚀",
        title: "새로운 기술과 트렌드에 대한 끊임없는 탐구",
        description:
          "업무에 접목시킬 새로운 기술과 트렌드를 지속적으로 탐구합니다. 이를 통해 새로운 아이디어를 도출하고, 기존의 문제를 개선하거나 해결할 수 있는 방법을 찾아냅니다.",
      },
    ],
  };

  const content = principles[language];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4 flex items-center justify-center gap-3">
          <span className="text-3xl sm:text-4xl">🙋🏻</span>
          {language === "ko" ? "How I Work" : "How I Work"}
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          {language === "ko"
            ? "제품을 만들고 팀과 협업하는 방식"
            : "My approach to building products and working with teams"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className="p-6 h-full border-l-4 border-accent group relative overflow-hidden"
              >
                {/* Background emoji */}
                <div className="absolute top-4 right-4 text-6xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                  {principle.emoji}
                </div>

                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text mb-3 group-hover:text-accent transition-colors">
                      {principle.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {principle.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
