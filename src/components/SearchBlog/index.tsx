import React, { useState, useEffect, useCallback } from 'react';
import { Command } from 'cmdk';
import { Search } from 'lucide-react';
import styles from './styles.module.css';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary?: string;
}

// Hardcoded blog posts - sourced from blog directory
const BLOG_POSTS: BlogPost[] = [
  { title: "1st Jan 2019", url: "/blog/1st-Jan-2019", date: "2019-01-01" },
  { title: "A Company in the Silicon Valley", url: "/blog/a-company-in-the-silicon-valley", date: "2019-07-09", summary: "My experience working in Silicon Valley" },
  { title: "Balance", url: "/blog/balance", date: "2020-08-15" },
  { title: "Explain Financial Freedom like I'm Five", url: "/blog/explain-financial-freedom-like-I-m-five", date: "2020-10-10" },
  { title: "Full Stack Dev", url: "/blog/full-stack-dev", date: "2020-08-29" },
  { title: "How a Chapter of Trigonometry Changed My Life", url: "/blog/how-a-chapter-of-trigonometry-changed-my-life", date: "2020-07-04" },
  { title: "How Redux Connect Works", url: "/blog/how-redux-connect-works", date: "2017-02-05" },
  { title: "Keybinding Override in Linux", url: "/blog/keybinding-override-in-linux", date: "2017-11-06" },
  { title: "Lessons Learned from a Year Working as a Remote Worker", url: "/blog/lessons-learned-from-a-year-working-as-a-remote-worker", date: "2016-06-14" },
  { title: "Luxury of Going Back to School", url: "/blog/luxury-of-going-back-to-school", date: "2020-08-29" },
  { title: "Migration Lessons from Corporate to Start-up", url: "/blog/migration-lessons-from-corporate-to-start-up", date: "2018-08-08" },
  { title: "Mosquitoes vs. MacBook Pro's 🔋", url: "/blog/mosquitoes-vs-macbook-pro-battery", date: "2020-05-29", summary: "How I understood computer networks" },
  { title: "My Productivity Apps", url: "/blog/my-productivity-apps", date: "2020-12-20" },
  { title: "My Window Management on Mac OS", url: "/blog/my-window-management-on-mac-os", date: "2016-02-14" },
  { title: "Passive Income Ideas", url: "/blog/passive-income-ideas", date: "2020-08-15" },
  { title: "Pocket vs Browser Bookmarks", url: "/blog/pocket-vs-browser-bookmarks", date: "2016-01-17" },
  { title: "Programming is a Skill", url: "/blog/programming-is-a-skill", date: "2017-04-23" },
  { title: "Remote Work a Sweet Spot", url: "/blog/remote-work-a-sweet-spot-between-working-for-a-company-and-for-self", date: "2015-10-24" },
  { title: "Restructuring and Layoffs", url: "/blog/restructuring-and-layoffs", date: "2019-08-03" },
  { title: "Small City Experience", url: "/blog/small-city-experience", date: "2020-02-09" },
  { title: "Use the Filter Method for Letter Wise Search", url: "/blog/use-the-filter-method-for-letter-wise-search", date: "2017-01-29" },
  { title: "v0.1", url: "/blog/v0-1", date: "2015-10-04" },
  { title: "Who is a Senior Software Engineer", url: "/blog/who-is-a-senior-software-engineer", date: "2018-07-29" },
  { title: "Zed Code Editor", url: "/blog/zed-code-editor", date: "2024-01-14" },
];

interface SearchBlogProps {
  isInline?: boolean;
}

export default function SearchBlog({ isInline = false }: SearchBlogProps): React.ReactNode {
  const [open, setOpen] = useState(false);

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = useCallback((url: string) => {
    setOpen(false);
    window.location.href = url;
  }, []);

  return (
    <>
      {/* Search Input - Fake input that acts as a button */}
      {isInline && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={styles.fakeSearchInput}
          title="Search (Cmd+K)"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="cmdk-blog-search"
        >
          <Search size={16} />
          <span className={styles.searchPlaceholder}>Search posts...</span>
          <kbd className={styles.searchKbd}>⌘K</kbd>
        </button>
      )}

      {/* Search Button - for non-inline use */}
      {!isInline && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={styles.searchButton}
          title="Search (Cmd+K)"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="cmdk-blog-search"
        >
          <Search size={18} />
          <span className={styles.searchButtonText}>Search</span>
          <kbd className={styles.kbd}>⌘K</kbd>
        </button>
      )}

      {/* Command Palette */}
      {open && (
        <div
          className={styles.commandPaletteOverlay}
          onClick={() => setOpen(false)}
        >
          <div className={styles.commandPaletteContainer} onClick={(e) => e.stopPropagation()}>
            <Command className={styles.command} label="Search blog posts" id="cmdk-blog-search">
              <Command.Input
                placeholder="Search blog posts..."
                className={styles.commandInput}
                autoFocus
              />
              <Command.List className={styles.commandList}>
                {BLOG_POSTS.length === 0 ? (
                  <Command.Empty>No blog posts found.</Command.Empty>
                ) : (
                  <Command.Group heading="Blog Posts">
                    {BLOG_POSTS.map((post) => (
                      <Command.Item
                        key={post.url}
                        value={`${post.title} ${post.summary || ''}`}
                        onSelect={() => handleSelect(post.url)}
                        className={styles.commandItem}
                      >
                        <div>
                          <div className={styles.commandItemTitle}>{post.title}</div>
                          {post.summary && (
                            <div className={styles.commandItemSummary}>{post.summary}</div>
                          )}
                          <div className={styles.commandItemDate}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}
              </Command.List>
            </Command>
            <div className={styles.commandFooter}>
              <span>Press ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
