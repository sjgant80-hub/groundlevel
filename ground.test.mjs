// ground.test.mjs — the deadline law, falsifiable. A statutory clock wrong by one day is real harm.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { addDays, daysBetween, collectUpcomingDeadlines } from './ground.mjs';

const T = Date.parse('2026-08-27T09:00:00Z');
const cases = [
  { id: 'c1', title: 'Smith v Jones', deadlines: [
    { id: 'd1', due: '2026-08-27', status: 'pending' },
    { id: 'd2', due: '2026-09-03', status: 'pending' },
    { id: 'd3', due: '2026-08-20', status: 'pending' },
    { id: 'd4', due: '2026-08-28', status: 'done' },
  ] },
  { id: 'c2', title: 'Re Estate', deadlines: [{ id: 'd5', due: '2026-09-10', status: 'pending' }] },
];

test('ADDDAYS — month ends and leap years carry correctly', () => {
  assert.equal(addDays('2026-08-31', 1).toISOString().slice(0, 10), '2026-09-01');
  assert.equal(addDays('2028-02-28', 1).toISOString().slice(0, 10), '2028-02-29', '2028 is a leap year');
  assert.equal(addDays('2026-02-28', 1).toISOString().slice(0, 10), '2026-03-01');
  assert.equal(addDays('2026-01-01', -1).toISOString().slice(0, 10), '2025-12-31');
});

test('DAYSBETWEEN — signed, zero on same day', () => {
  assert.equal(daysBetween('2026-08-27', '2026-09-03'), 7);
  assert.equal(daysBetween('2026-09-03', '2026-08-27'), -7);
  assert.equal(daysBetween('2026-08-27', '2026-08-27'), 0);
});

test('DEADLINES — the 7-day window: due-today IN, day-7 IN, day-8 OUT, overdue OUT, done OUT', () => {
  const w = collectUpcomingDeadlines(cases, 7, T);
  assert.deepEqual(w.map((d) => d.id), ['d1', 'd2'], 'today (0) and day-7 exactly; overdue d3 and done d4 excluded');
  assert.equal(w[0].case_title, 'Smith v Jones', 'the case rides on each deadline');
  const w6 = collectUpcomingDeadlines(cases, 6, T);
  assert.deepEqual(w6.map((d) => d.id), ['d1'], 'day-7 falls OUT of a 6-day window — the fence is exact');
});

test('DEADLINES — days=0 means NO window: every pending deadline, overdue included, sorted soonest-first', () => {
  const all = collectUpcomingDeadlines(cases, 0, T);
  assert.deepEqual(all.map((d) => d.id), ['d3', 'd1', 'd2', 'd5'], 'sorted by due; done still excluded');
});

test('DEADLINES — total on junk: null cases, missing deadlines arrays', () => {
  assert.deepEqual(collectUpcomingDeadlines(null, 7, T), []);
  assert.deepEqual(collectUpcomingDeadlines([{ id: 'x', title: 'bare' }], 7, T), []);
});
