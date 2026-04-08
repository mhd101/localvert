"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Encode as application/x-www-form-urlencoded so Next.js App Router
    // doesn't intercept it as a Server Action (fixes the POST / 404 error).
    const params = new URLSearchParams();
    params.append("form-name", "waitlist");
    params.append("email", email);
    params.append("bot-field", ""); // honeypot field (must match static HTML form)


    try {
      const response = await fetch("/.netlify/functions/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success || data.dev)) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={`modal-content ${status === "success" ? "success" : ""}`}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 380 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {status === "success" ? (
              <motion.div
                className="modal-success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3>You&apos;re Officially In!</h3>
                <p>Check your inbox. We&apos;ll notify you at <strong>{email}</strong> the second LocalVert launches.</p>
                <button className="btn btn-primary btn-pill" style={{ width: "100%", marginTop: "10px", padding: "14px" }} onClick={onClose}>
                  Got it 🎉
                </button>
              </motion.div>
            ) : (
              <>
                <div className="modal-header-icon" style={{ marginBottom: "20px", display: "inline-flex", padding: "12px", background: "rgba(0, 255, 147, 0.07)", borderRadius: "16px", color: "var(--primary)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3>Get Early Access</h3>
                <p>Join the waitlist for exclusive early access and launch-day discounts. </p>

                <form
                  name="waitlist"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="modal-form"
                >
                  <input type="hidden" name="form-name" value="waitlist" />
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modal-input"
                    disabled={status === "loading"}
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="btn btn-primary btn-pill"
                    style={{ width: "100%", padding: "16px", fontSize: "15px" }}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <svg style={{ animation: "spin 1s linear infinite" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                        </svg>
                        Joining...
                      </span>
                    ) : "Join Waitlist"}
                  </button>
                  <p className="privacy-note">🔒 No spam. Only major updates and early access news.</p>
                  {status === "error" && (
                    <p className="error-message">Connection failed. Please try again.</p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
