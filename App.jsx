import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { frameworkPoints } from "./points";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [subscreen, setSubscreen] = useState(null);
  const [detail, setDetail] = useState(null);
  const [filter, setFilter] = useState({ ai: false, age: 13 });
  const [showFilters, setShowFilters] = useState(false);
  const filterWrapRef = useRef(null);
  const activeTheme = screen === "home" ? "cognitive" : screen;

  // Shared data mapping across UI
  const dataMap = {
    cognitive: frameworkPoints?.cognitive || {},
    socio: frameworkPoints?.socioEmotional || {},
    physical: frameworkPoints?.physical || {},
  };

  const prettyMain = (key) => {
    if (key === "socio") return "Socio-Emotional";
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  const prettySecond = (main, key) => {
    if (main === "cognitive") {
      if (key === "structure") return "Structure & Executing Ideas";
      if (key === "idea") return "Enabling Idea Generation";
    }
    // Fallback: Title case and spacing before capitals
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const parseAgeRange = (ageStr) => {
    if (!ageStr) return [0, 100];
    const parts = ageStr
      .replace(/\s+/g, "")
      .split("-")
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));
    if (parts.length === 2) return parts;
    if (parts.length === 1) return [parts[0], parts[0]];
    return [0, 100];
  };

  /** === Filter popup === */
  const FilterControls = () => (
    <div className="filters-controls sleek-popup glass">
      <label>
        <input
          type="checkbox"
          checked={filter.ai}
          onChange={() => setFilter((prev) => ({ ...prev, ai: !prev.ai }))}
        />
        AI-related
      </label>
      <label>
        Age: {filter.age}
        <input
          type="range"
          min="0"
          max="13"
          step="1"
          value={filter.age}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              age: parseInt(e.target.value, 10),
            }))
          }
        />
      </label>
      <div className="mini-actions">
        <button
          className="btn sleek small"
          onClick={() => setFilter({ ai: false, age: 13 })}
        >
          Reset
        </button>
        <button className="btn sleek small" onClick={() => setShowFilters(false)}>
          Close
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    const onDocClick = (e) => {
      if (!showFilters) return;
      if (filterWrapRef.current && !filterWrapRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [showFilters]);

  const Layout = ({ children, variant = "page" }) => (
    <div className={`page-shell ${variant === "home" ? "home-shell" : ""} theme-${activeTheme}`}>
      <div
        className={`container ${variant === "home" ? "home-container" : ""} theme-${activeTheme}`}
      >
        {children}
      </div>
    </div>
  );


  /** === Theme info bubble next to main title === */
  const themeDescriptions = {
    cognitive:
      "Recommendations that support children's intellectual progress during creative activities.",
    socio:
      "Recommendations that help to make the creativity experience more enjoyable and engaging for children.",
    physical:
      "Recommendations that involve children's physical capabilities during creative activities.",
  };

  const ThemeInfo = ({ which }) => {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    useEffect(() => {
      const onDoc = (e) => {
        if (!open) return;
        if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
      };
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, [open]);

    if (!which) return null;
    return (
      <span className="theme-info-wrap" ref={wrapRef}>
        <button className="theme-info-btn" onClick={() => setOpen((p) => !p)} aria-expanded={open}>
          i
        </button>
        <span className={`theme-info-bubble ${open ? "open" : ""}`}>
          <strong>{prettyMain(which)}</strong>
          <div className="theme-info-text">{themeDescriptions[which]}</div>
        </span>
      </span>
    );
  };

  /** === Top Controls (only show Filter if in detail) === */
  const TopControls = () => (
    <div className="top-right-controls" ref={filterWrapRef}>
      {detail && (
        <button
          className="control-btn"
          onClick={() => setShowFilters((p) => !p)}
        >
          Filter
        </button>
      )}
      {showFilters && <FilterControls />}
    </div>
  );

  /** === Breadcrumb tracker === */
  const Breadcrumb = () => {
    if (screen === "home") return null;
    const segments = [];
    if (screen) {
      segments.push({
        label: prettyMain(screen),
      });
    }
    if (screen && subscreen) {
      segments.push({
        label: prettySecond(screen, subscreen),
      });
    }
    if (screen && subscreen && detail) {
      segments.push({
        label: detail.title,
      });
    }
    const lastIndex = segments.length - 1;
    return (
      <div className={`breadcrumb theme-${screen || "cognitive"}`}>
        {segments.map((seg, idx) => (
          <React.Fragment key={`${seg.label}-${idx}`}>
            <span className={`crumb ${idx === lastIndex ? "active" : ""}`}>
              {seg.label}
            </span>
            {idx !== lastIndex && <span className="crumb-sep">›</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  /** === Detail Screen === */
  if (detail) {
    let filtered = Array.isArray(detail.points) ? detail.points : [];
    if (filter.ai) filtered = filtered.filter((p) => p.ai);
    if (filter.age < 13)
      filtered = filtered.filter((p) => {
        const [min] = parseAgeRange(p.age);
        return min <= filter.age;
      });

    return (
      <Layout>
        <TopControls />
        <Breadcrumb />
        <h2>{detail.title}</h2>
        {filtered.length ? (
          <ul className="detail-list">
            {filtered.map((p, i) => (
              <li key={i} className="detail-item">
                <p>{p.text}</p>
                <small>
                  Age: {p.age} {p.ai && <strong>(AI)</strong>}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results match filters.</p>
        )}
        <button className="btn sleek" onClick={() => setDetail(null)}>
          ← Back
        </button>
      </Layout>
    );
  }

  /** === Subtheme Screen (shows features dynamically) === */
  if (subscreen) {
    const themeObj = dataMap[screen];
    const theme = themeObj ? themeObj[subscreen] : null;
    if (!theme) return null;

    const subtopics = Object.keys(theme).map((key) => theme[key]);

    return (
      <Layout>
        <TopControls />
        <Breadcrumb />
        <h2>{prettySecond(screen, subscreen)}</h2>
        <div className="features-container big">
          {subtopics.map((feat, i) => (
            <button
              key={i}
              className="feature-btn large"
              onClick={() => setDetail(feat)}
            >
              {feat.title}
            </button>
          ))}
        </div>
        <button className="btn sleek" onClick={() => setSubscreen(null)}>
          ← Back
        </button>
      </Layout>
    );
  }

  /** === Cognitive Screen === */
  if (screen === "cognitive") {
    return (
      <Layout>
        <TopControls />
        <Breadcrumb />
        <div className="title-row">
          <h2>Cognitive</h2>
          <ThemeInfo which="cognitive" />
        </div>
        <p>Choose a subtheme to explore features and recommendations.</p>
        <div className="subtheme-grid">
          {Object.keys(dataMap.cognitive).map((k) => (
            <button key={k} className="subtheme-btn cognitive" onClick={() => setSubscreen(k)}>
              {prettySecond("cognitive", k)}
            </button>
          ))}
        </div>
      </Layout>
    );
  }

  /** === Socio / Physical Screens === */
  if (screen === "socio" || screen === "physical") {
    return (
      <Layout>
        <TopControls />
        <Breadcrumb />
        <div className="title-row">
          <h2>{screen === "socio" ? "Socio-Emotional" : "Physical"}</h2>
          <ThemeInfo which={screen} />
        </div>
        <p>Choose a subtheme to explore features and recommendations.</p>
        <div className="subtheme-grid">
          {Object.keys(dataMap[screen]).map((k) => (
            <button key={k} className={`subtheme-btn ${screen}`} onClick={() => setSubscreen(k)}>
              {prettySecond(screen, k)}
            </button>
          ))}
        </div>
      </Layout>
    );
  }

  /** === Home === */
  return (
    <Layout variant="home">
      <h1 className="title sleek-title">CSTDRC Framework</h1>
      <p className="subtitle">
        Creative Support Technology Design Recommendations for Children
      </p>
      <div className="home-actions">
        <button className="home-btn cognitive" onClick={() => setScreen("cognitive")}>
          Cognitive
        </button>
        <button className="home-btn socio" onClick={() => setScreen("socio")}>
          Socio-Emotional
        </button>
        <button className="home-btn physical" onClick={() => setScreen("physical")}>
          Physical
        </button>
      </div>
    </Layout>
  );
}
