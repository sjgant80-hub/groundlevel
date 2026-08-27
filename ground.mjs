// groundlevel · ground.mjs — the deadline law, konomified IN PLACE (2026-08-27).
// A legal case manager's date maths is a statutory clock: wrong by one day is real harm. These are
// the page's own functions extracted byte-faithful — STATE.cases becomes the `cases` parameter and
// the clock is injected (todayMs) so the gate is deterministic while the page passes its real now.
// The page inlines this kernel verbatim and delegates — the gated maths IS the live maths.

export function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }

export function daysBetween(a, b) { return Math.round((new Date(b) - new Date(a)) / 86400000); }

// every PENDING deadline due within `days` of today (days === 0 = no window: everything pending),
// sorted soonest-first. Overdue (diff < 0) is EXCLUDED by the window — the page surfaces overdue
// separately; locking that behavior is deliberate.
export function collectUpcomingDeadlines(cases, days, todayMs) {
  const today = new Date(todayMs); today.setHours(0, 0, 0, 0);
  const out = [];
  (cases || []).forEach(c => {
    (c.deadlines || []).forEach(d => {
      if (d.status !== 'pending') return;
      const diff = daysBetween(today, d.due);
      if (days === 0 || (diff >= 0 && diff <= days)) {
        out.push({ ...d, case_id: c.id, case_title: c.title });
      }
    });
  });
  return out.sort((a, b) => new Date(a.due) - new Date(b.due));
}
