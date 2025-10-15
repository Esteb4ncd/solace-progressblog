import React, { useEffect, useRef, useState } from "react";

// Image objects with date and short caption
const galleryItems = [
  {
    date: "2025-10-08",
    caption: "Tour around BCIT's ironworker building with our advisor, Kenner",
    src: process.env.PUBLIC_URL + "/gallery-images/IMG_4433.webp",
  },
  {
    date: "2025-10-08",
    caption: "Tour around BCIT's ironworker building with our advisor, Kenner",
    src: process.env.PUBLIC_URL + "/gallery-images/IMG_4463.webp",
  },
  {
    date: "2025-10-08",
    caption: "Tour around BCIT's ironworker building with our advisor, Kenner",
    src: process.env.PUBLIC_URL + "/gallery-images/IMG_7033.webp",
  },
  {
    date: "2025-10-10",
    caption: "Solace team when DigiCam",
    src: process.env.PUBLIC_URL + "/gallery-images/DSCN4335.JPG",
  },
  {
    date: "2025-10-10",
    caption: "Solace team when DigiCam",
    src: process.env.PUBLIC_URL + "/gallery-images/DSCN4339.JPG",
  },
  {
    date: "2025-10-10",
    caption: "Solace team when DigiCam",
    src: process.env.PUBLIC_URL + "/gallery-images/DSCN4344.JPG",
  },
  {
    date: "2025-10-10",
    caption: "Solace team when DigiCam",
    src: process.env.PUBLIC_URL + "/gallery-images/DSCN4347.JPG",
  },
  {
    date: "2025-10-10",
    caption: "Solace team when DigiCam",
    src: process.env.PUBLIC_URL + "/gallery-images/DSCN4348.JPG",
  },
];



const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

function Gallery() {
  const scrollRef = useRef(null);
  const isHovering = useRef(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Horizontal auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const allItems = [...galleryItems, ...galleryItems]; // duplicate for seamless loop
    let speed = 1;
    let requestId;

    const step = () => {
      if (!isHovering.current) {
        scrollContainer.scrollLeft += speed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestId = requestAnimationFrame(step);
    };

    requestId = requestAnimationFrame(step);

    scrollContainer.addEventListener("mouseenter", () => (isHovering.current = true));
    scrollContainer.addEventListener("mouseleave", () => (isHovering.current = false));

    return () => cancelAnimationFrame(requestId);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Split images into 3 rows
  const rows = [[], [], []];
  const allItems = [...galleryItems, ...galleryItems];
  allItems.forEach((item, idx) => rows[idx % 3].push(item));

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        borderRadius: "12px",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* CSS styles moved outside the render loop */}
      <style>{`
        .image-container {
          position: relative;
          flex: 0 0 auto;
          width: 300px;
          height: 150px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .image-container img {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.5s ease;
        }

        .caption {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-align: center;
          opacity: 0;
          z-index: 2;
          transition: opacity 0.5s ease;
        }

        .image-container:hover img {
          transform: scale(1.1);
        }

        .image-container:hover .caption {
          opacity: 1;
        }

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 16px;
        }
        .modal-content {
          position: relative;
          background: #0b0b0b;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          display: flex;
          flex-direction: column;
        }
        .modal-media {
          width: min(84vw, 960px);
          height: min(65vh, 720px);
          background: #111;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #111;
        }
        .modal-meta {
          padding: 12px 14px;
          color: #f6f6f6;
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
        }
        .modal-date {
          font-weight: 700;
          font-size: 14px;
        }
        .modal-caption {
          font-size: 14px;
          opacity: 0.95;
        }
        .modal-close {
          position: absolute;
          top: 8px;
          right: 8px;
          border: none;
          border-radius: 8px;
          padding: 8px 10px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .modal-close:hover {
          background: rgba(0,0,0,0.8);
        }
      `}</style>

      <div
        ref={scrollRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          cursor: "grab",
        }}
      >
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", gap: "12px" }}>
            {rowItems.map((item, index) => (
              <div key={index} className="image-container" onClick={() => setSelectedItem(item)}>
                <img
                  src={item.src}
                  alt={`${item.caption} — ${formatDate(item.date)}`}
                  loading="lazy"
                />
                <div className="caption">
                  <span style={{ fontWeight: 700 }}>{formatDate(item.date)}</span>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)} aria-label="Close dialog">✕</button>
            <div className="modal-media">
              <img src={selectedItem.src} alt={`${selectedItem.caption} — ${formatDate(selectedItem.date)}`} />
            </div>
            <div className="modal-meta">
              <div className="modal-date">{formatDate(selectedItem.date)}</div>
              <div className="modal-caption">{selectedItem.caption}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
