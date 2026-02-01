"use client";

import { motion } from "framer-motion";
import { Quote, Linkedin, Twitter, Mail } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  relationship?: string; // e.g., "Worked together at", "Managed directly"
  tags?: string[];
  platform?: "linkedin" | "twitter" | "email" | "other";
  date?: string;
  featured?: boolean;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  variant?: "grid" | "carousel" | "masonry";
}

export default function Testimonials({
  testimonials,
  title = "What People Say",
  subtitle,
  variant = "grid",
}: TestimonialsProps) {
  const getPlatformIcon = (platform?: Testimonial["platform"]) => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Quote className="w-4 h-4" />;
    }
  };

  const getPlatformColor = (platform?: Testimonial["platform"]) => {
    switch (platform) {
      case "linkedin":
        return "text-blue-500";
      case "twitter":
        return "text-sky-400";
      case "email":
        return "text-muted";
      default:
        return "text-accent";
    }
  };

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4 flex items-center justify-center gap-3">
          <span className="text-3xl">💬</span>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Grid variant */}
      {variant === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className={`p-6 h-full flex flex-col ${
                  testimonial.featured
                    ? "border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
                    : ""
                }`}
              >
                {/* Quote icon & Platform */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>
                  {testimonial.platform && (
                    <div className={getPlatformColor(testimonial.platform)}>
                      {getPlatformIcon(testimonial.platform)}
                    </div>
                  )}
                </div>

                {/* Featured badge */}
                {testimonial.featured && (
                  <Badge variant="accent" className="mb-3 w-fit text-xs">
                    ⭐ Featured
                  </Badge>
                )}

                {/* Content */}
                <blockquote className="flex-1 mb-4">
                  <p className="text-sm text-text leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-start gap-3">
                    {testimonial.avatar ? (
                      <div className="w-12 h-12 rounded-full bg-surface2 overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-accent">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-text">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted mb-1">
                        {testimonial.role}
                        {testimonial.company && ` @ ${testimonial.company}`}
                      </p>
                      {testimonial.relationship && (
                        <p className="text-xs text-muted2 italic">
                          {testimonial.relationship}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  {testimonial.tags && testimonial.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {testimonial.tags.map((tag) => (
                        <Badge key={tag} className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  {testimonial.date && (
                    <p className="text-xs text-muted2 mt-2">{testimonial.date}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Masonry variant */}
      {variant === "masonry" && (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <Card
                hover
                className={`p-5 ${
                  testimonial.featured
                    ? "border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent"
                    : ""
                }`}
              >
                {testimonial.featured && (
                  <Badge variant="accent" className="mb-3 text-xs">
                    ⭐ Featured
                  </Badge>
                )}

                <blockquote className="mb-4">
                  <div className="flex gap-2 mb-2">
                    <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <p className="text-sm text-text leading-relaxed italic">
                      {testimonial.content}
                    </p>
                  </div>
                </blockquote>

                <div className="flex items-center gap-3 border-t border-border pt-3">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-accent">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="flex-1">
                    <p className="text-sm font-bold text-text">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role}
                      {testimonial.company && ` @ ${testimonial.company}`}
                    </p>
                  </div>

                  {testimonial.platform && (
                    <div className={getPlatformColor(testimonial.platform)}>
                      {getPlatformIcon(testimonial.platform)}
                    </div>
                  )}
                </div>

                {testimonial.tags && testimonial.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {testimonial.tags.map((tag) => (
                      <Badge key={tag} className="text-xs px-2 py-0.5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
