"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { GuestbookEntry } from "@/lib/supabase/client";
import GuestbookEntryCard from "./GuestbookEntryCard";
import GuestbookSkeleton from "./GuestbookSkeleton";
import Button from "../ui/Button";

interface GuestbookListProps {
  refreshTrigger: number;
}

export default function GuestbookList({ refreshTrigger }: GuestbookListProps) {
  const { language } = useLanguage();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const texts = {
    en: {
      loading: "Loading messages...",
      error: "Failed to load messages",
      empty: "No messages yet. Be the first to leave one!",
      loadMore: "Load More",
      loading2: "Loading...",
    },
    ko: {
      loading: "메시지 불러오는 중...",
      error: "메시지를 불러올 수 없습니다",
      empty: "아직 메시지가 없습니다. 첫 메시지를 남겨주세요!",
      loadMore: "더 보기",
      loading2: "로딩 중...",
    },
  };

  const t = texts[language];

  const fetchEntries = async (pageNum: number) => {
    try {
      setIsLoading(true);
      setError("");
      const res = await fetch(`/api/guestbook?page=${pageNum}`);
      
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();
      
      if (pageNum === 1) {
        setEntries(data.entries);
      } else {
        setEntries((prev) => [...prev, ...data.entries]);
      }
      
      setTotalPages(data.totalPages);
      setPage(pageNum);
    } catch (err) {
      setError(t.error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries(1);
  }, [refreshTrigger]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchEntries(page + 1);
    }
  };

  if (isLoading && entries.length === 0) {
    return <GuestbookSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-2 px-4 py-3 bg-surface2 border border-border rounded-lg">
          <span className="text-xl">⚠️</span>
          <p className="text-muted">{error}</p>
        </div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted2">{t.empty}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <GuestbookEntryCard key={entry.id} entry={entry} />
      ))}
      
      {page < totalPages && (
        <div className="flex justify-center pt-4">
          <Button
            onClick={handleLoadMore}
            variant="secondary"
            disabled={isLoading}
          >
            {isLoading ? t.loading2 : t.loadMore}
          </Button>
        </div>
      )}
    </div>
  );
}
